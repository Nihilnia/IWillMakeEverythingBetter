import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(!isEditing);
  }

  const playerName = isEditing ? (
    <input type="text" value={name} />
  ) : (
    <span className="player-name">{name}</span>
  );

  let btnCaption = isEditing ? "Save" : "Edit";

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}

export default Player;
