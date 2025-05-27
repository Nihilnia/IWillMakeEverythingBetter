import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([]);

	//We set the initial value of the state as an empty array
	//When component starts to get rendered we will fetch the data from the db

	fetch("http://localhost:3000/places")
		.then((response) => {
			return response.json();
		})
		.then((respData) => {
			setAvailablePlaces(respData.places);
		});

	console.log("availablePlaces");
	console.log(availablePlaces);

	return (
		<Places
			title="Available Places"
			places={[]}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
