import { useState } from "react";

function Player({ name, symbol, isActive, getPlayerName }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((currentVal) => !currentVal);

    if (isEditing) getPlayerName(name, symbol);
  }

  function handleChange(e) {
    getPlayerName(e.target.value, symbol);
  }

  const editablePlayerName = isEditing ? (
    <input type="text" value={name} onChange={handleChange} />
  ) : (
    <span className="player-name">{name}</span>
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
