import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { useFetch } from "../hooks/useFetch.js";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";

async function getSortedPlaces() {
	const places = await fetchAvailablePlaces();

	return new Promise((resolve) => {
		navigator.geolocation.getCurrentPosition((pos) => {
			const sortedPlaces = sortPlacesByDistance(
				places,
				pos.coords.latitude,
				pos.coords.longitude,
			);

			resolve(sortedPlaces);
		});
	});
}

export default function AvailablePlaces({ onSelectPlace }) {
	const {
		isFetching,
		error,
		fetchedData: availablePlaces,
	} = useFetch(getSortedPlaces, "http://localhost:3000/places", []);

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
