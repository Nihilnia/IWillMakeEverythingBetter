import { useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);

	//We set the initial value of the state as an empty array
	//When component starts to get rendered we will fetch the data from the db

	return (
		<Places
			title="Available Places"
			places={[]}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
