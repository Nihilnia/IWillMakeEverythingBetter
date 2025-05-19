import { useEffect, useState } from "react";

export default function GetImages(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				setData(json);
				setLoading(false);
			} catch (err) {
				setError(true);
				setLoading(false);
			}
		};

		fetchData();
	}, [url]); // Re-fetch if the URL changes

	return { data, loading, error };
}
