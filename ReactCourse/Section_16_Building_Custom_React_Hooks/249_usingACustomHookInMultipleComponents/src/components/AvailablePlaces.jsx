import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { fetchAvailablePlaces } from "../http.js";
import { useEffect } from "react";
import { sortPlacesByDistance } from "../loc.js";

export default function AvailablePlaces({ onSelectPlace }) {
	const {
		isFetching,
		error,
		fetchedData: availablePlaces,
		setFetchedData: setAvailablePlaces,
	} = useFetch(fetchAvailablePlaces, "http://localhost:3000/places", []);

	// navigator.geolocation.getCurrentPosition((pos) => {
	// 	setAvailablePlaces(() => {
	// 		return sortPlacesByDistance(
	// 			availablePlaces,
	// 			pos.coords.latitude,
	// 			pos.coords.longitude,
	// 		);
	// 	});
	// });

	if (error) {
		return <Error title="An error occurred!" message={error.message} />;
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching}
			loadingText="Fetching place data..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
