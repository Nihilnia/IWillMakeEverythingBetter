import { useState, useEffect } from "react";

export function useFetch(fetchFn, url, initialVal) {
	const [isFetching, setIsFetching] = useState();
	const [error, setError] = useState();
	const [fetchedData, setFetchedData] = useState(initialVal);

	useEffect(() => {
		async function fetchData() {
			setIsFetching(true);
			try {
				const data = await fetchFn(url);

				setFetchedData(data);
			} catch (error) {
				setError({ message: error.message || "Failed to fetch data.." });
			}

			setIsFetching(false);
		}

		fetchData(fetchFn);
	}, []);

	return {
		isFetching,
		error,
		fetchedData,
	};
}
