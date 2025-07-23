import { useEffect, useState } from "react";

export default function useFetch(link) {
  const [fetchedData, setFetchedData] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async function fetchData() {
      try {
        setLoading(true);
        setFetchError(null);

        const response = await fetch(link);

        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setFetchedData(data);
      } catch (err) {
        setFetchError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [link]);

  return {
    fetchedData,
    fetchError,
    loading,
  };
}
