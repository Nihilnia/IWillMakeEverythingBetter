import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const showPlayerName = useRef();

  function handleClick() {
    setPlayerName(showPlayerName.current.value);
    showPlayerName.current.value = ""; //not what we want but in this case its okay.
    //? why? Because we are directly manipulating the dom.
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
