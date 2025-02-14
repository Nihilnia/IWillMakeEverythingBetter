import { useState } from "react";

function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((currentVal) => !currentVal);
  }

  function handleChange(e) {
    setPlayerName(e.target.value);
  }

  const editablePlayerName = isEditing ? (
    <input type="text" value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  let btnCaption = isEditing ? "Save" : "Edit";
  const playerCSS = isActive ? "active" : undefined;

  return (
    <li className={playerCSS}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
