import { useState } from "react";

export default function useFetch() {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async function fetchData(op, link, dataToSend) {
    try {
      setLoading(true);
      setFetchError(null);

      if (op === "get") {
        const response = await fetch(link);

        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setFetchedData(data);
      } else if (op === "send") {
        const response = await fetch(link, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setFetchedData(data);
      }
    } catch (err) {
      setFetchError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchedData,
    fetchError,
    loading,
    fetchData,
  };
}
