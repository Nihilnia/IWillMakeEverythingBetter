import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [displayName, setDisplayName] = useState("unknown entity");

  function handlePlayerName(e) {
    setIsShow(false);
    setPlayerName(e.target.value);
  }

  function handleClick() {
    setIsShow(true);
    setDisplayName(playerName);
  }

  return (
    <section id="player">
      <h2>Welcome {isShow ? playerName : displayName}</h2>
      <p>
        <input type="text" value={playerName} onChange={handlePlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
