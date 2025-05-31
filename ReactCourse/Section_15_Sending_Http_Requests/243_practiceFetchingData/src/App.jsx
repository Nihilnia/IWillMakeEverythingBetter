import { useRef, useState, useCallback } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import Error from "./components/Error.jsx";

import { updateUserPlaces } from "./http.js";
import { useEffect } from "react";
import { fetchUserPlaces } from "./http.js";

function App() {
	const selectedPlace = useRef();

	const [userPlaces, setUserPlaces] = useState([]);
	const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [isFetching, setIsFetching] = useState(false);
	const [isError, setIsError] = useState();

	useEffect(() => {
		async function getUserPlaces() {
			setIsFetching(true);
			try {
				const awaitedData = await fetchUserPlaces(
					"http://localhost:3000/user-places",
				);

				setUserPlaces(awaitedData);
			} catch (err) {
				setIsError(
					{ message: err.message } ||
						"Error occured while fetching the users places",
				);
			}

			setIsFetching(false);
		}

		getUserPlaces();
	}, []);

	function handleStartRemovePlace(place) {
		setModalIsOpen(true);
		selectedPlace.current = place;
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false);
	}

	async function handleSelectPlace(selectedPlace) {
		setUserPlaces((prevPickedPlaces) => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = [];
			}
			if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
				return prevPickedPlaces;
			}
			return [selectedPlace, ...prevPickedPlaces];
		});

		try {
			await updateUserPlaces("http://localhost:3000/user-places", [
				selectedPlace,
				...userPlaces,
			]);
		} catch (err) {
			setUserPlaces(userPlaces);
			setErrorUpdatingPlaces({
				message: err.message || "Failed to update places..",
			});
		}
	}

	const handleRemovePlace = useCallback(
		async function handleRemovePlace() {
			setUserPlaces((prevPickedPlaces) =>
				prevPickedPlaces.filter(
					(place) => place.id !== selectedPlace.current.id,
				),
			);

			try {
				await updateUserPlaces(
					"http://localhost:3000/user-places",
					userPlaces.filter((place) => {
						return place.id !== selectedPlace.current.id;
					}),
				);
			} catch (err) {
				setUserPlaces(userPlaces);
				setErrorUpdatingPlaces({
					message: err.message || "Something went wrong while removing..",
				});
			}

			setModalIsOpen(false);
		},
		[userPlaces],
	);

	function handleError() {
		setErrorUpdatingPlaces(null);
	}

	return (
		<>
			<Modal open={errorUpdatingPlaces} onClose={handleError}>
				{errorUpdatingPlaces && (
					<Error
						title={"An error occured.."}
						message={errorUpdatingPlaces.message}
						onConfirm={handleError}
					/>
				)}
			</Modal>

			<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>PlacePicker</h1>
				<p>
					Create your personal collection of places you would like to visit or
					you have visited.
				</p>
			</header>
			<main>
				{isError && (
					<Error title="En error occured.." message={isError.message} />
				)}
				{!isError && (
					<Places
						title="I'd like to visit ..."
						fallbackText="Select the places you would like to visit below."
						places={userPlaces}
						onSelectPlace={handleStartRemovePlace}
						loadingText="Fetching your places.."
						isLoading={isFetching}
					/>
				)}

				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	);
}

export default App;
