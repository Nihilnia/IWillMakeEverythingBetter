import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchPlaces() {
			try {
				const resp = await fetch("http://localhost:3000/placess");

				if (!resp.ok) {
					throw new Error("Something went wrong..");
				}

				const respData = await resp.json();

				setAvailablePlaces(respData.places);
			} catch (err) {
				setIsError(err.message || "Couldn' t fetch places, try again later.");
			}

			setLoading(false);
		}

		fetchPlaces();
	}, []);

	if (isError)
		return <Error title="Something went wrong.." message={isError} />;

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isLoading}
			loadingText={"Loading.."}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
