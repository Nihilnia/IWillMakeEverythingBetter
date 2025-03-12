import { useRef, useState, useEffect } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

import { sortPlacesByDistance } from "./loc.js";

const storedIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
const storedPlaces = storedIDs.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [modalState, setModalState] = useState({
    type: false,
    isOpen: false,
  });
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );

      console.log(sortedPlaces);

      setAvailablePlaces(sortedPlaces);
    });
  }, []);

  function handleStartRemovePlace(id) {
    setModalState((prev) => {
      return { ...prev, isOpen: true };
    });
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalState((prev) => {
      return { ...prev, isOpen: false };
    });
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        setModalState((prev) => {
          return { ...prev, isOpen: true, type: true };
        });
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    setAvailablePlaces((prev) => {
      const updatedAvailablePlaces = prev.filter((place) => place.id !== id);
      return updatedAvailablePlaces;
    });

    const storedIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    if (storedIDs.indexOf(id) === -1) {
      localStorage.setItem(
        "selectedPlaces",
        JSON.stringify([id, ...storedIDs])
      );
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    setModalState((prev) => {
      return { ...prev, isOpen: false };
    });

    let storedIDs = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIDs.filter((id) => id !== selectedPlace.current))
    );
  }

  return (
    <>
      <Modal open={modalState.isOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
          isSame={modalState.type}
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
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
          fallbackText={"Sorting places by distance.."}
        />
      </main>
    </>
  );
}

export default App;
