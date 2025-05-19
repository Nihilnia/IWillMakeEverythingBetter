import { useState } from "react";
import TracksGrid from "../components/TracksGrid";

import { TracksContext } from "../store/TracksContext";

export default function TracksDB() {
  const [allTracks, setAllTracks] = useState([
    { id: 0, name: "Song_0" },
    { id: 1, name: "Song_1" },
    { id: 2, name: "Song_2" },
    { id: 3, name: "Song_3" },
    { id: 4, name: "Song_4" },
    { id: 5, name: "Song_5" },
    { id: 6, name: "Song_6" },
    { id: 7, name: "Song_7" },
    { id: 8, name: "Song_8" },
    { id: 9, name: "Song_9" },
  ]);

  function handleNameChange(id, newName) {
    setAllTracks((prev) => {
      return prev.map((f) => (f.id === id ? { ...f, name: newName } : f));
    });
  }

  const ctxValue = {
    allTracks: allTracks,
    handleChangeTrackName: handleNameChange,
  };

  return (
    <TracksContext.Provider value={ctxValue}>
      <TracksGrid />
    </TracksContext.Provider>
  );
}
