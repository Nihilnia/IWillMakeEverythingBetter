import { useState } from "react";

function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(!isEditing); //expecting to be true
    // setIsEditing(!isEditing); //expecting to be false, but no.

    //this is not gonna work because react schedule the process and both of our updates does the same thing
    // thats why we are using a function inside the stateUpdate
    //basically theres a lil delay

    setIsEditing((currentVal) => !currentVal);
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
