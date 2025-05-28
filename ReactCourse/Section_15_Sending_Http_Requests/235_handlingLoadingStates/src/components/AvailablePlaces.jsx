import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchPlaces() {
			const response = await fetch("http://localhost:3000/places");
			const respData = await response.json();
			setAvailablePlaces(respData.places);
			setIsLoading(false);
		}

		fetchPlaces();
	}, []);

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isLoading}
			loadingText={"Fetching place data.."}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
