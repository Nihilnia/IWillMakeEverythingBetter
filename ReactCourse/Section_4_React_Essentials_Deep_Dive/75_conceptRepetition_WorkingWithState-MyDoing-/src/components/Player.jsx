import { useState } from "react";

export default function Player({ name, symbol, onSelected }) {
  const [isClicked, setIsClicked] = useState(false);
  const [newName, setNewName] = useState("");

  console.log("isClicked");
  console.log(isClicked);

  function handleNewName(e) {
    setNewName(e.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isClicked && <span className="player-name">{name}</span>}
        {isClicked && (
          <input
            className="player-name"
            placeholder={name}
            onChange={handleNewName}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isClicked && (
        <button onClick={() => setIsClicked(!isClicked)}>Edit</button>
      )}
      {isClicked && (
        <button
          onClick={() => {
            onSelected(name, newName);
            setIsClicked(!isClicked);
          }}
        >
          Save
        </button>
      )}
    </li>
  );
}
