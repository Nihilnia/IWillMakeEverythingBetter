import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import { sortPlacesByDistance } from "../loc.js";
import Error from "./Error.jsx";

import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function fetchPlaces() {
			try {
				const places = await fetchAvailablePlaces(
					"http://localhost:3000/places",
				);

				navigator.geolocation.getCurrentPosition((pos) => {
					const sortedPlaces = sortPlacesByDistance(
						places,
						pos.coords.latitude,
						pos.coords.longitude,
					);

					setAvailablePlaces(sortedPlaces);
					setLoading(false);
				});
			} catch (err) {
				setIsError(err.message || "Couldn' t fetch places, try again later.");
			}
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
