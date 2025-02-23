import { useState, useRef } from "react";

export default function Player() {
  const showPlayerName = useRef();

  const [playerName, setPlayerName] = useState("Unknown Entity");

  function handleClick() {
    setPlayerName(showPlayerName.current.value);
    showPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={showPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
