import { useContext, useRef } from "react";
import { TracksContext } from "../store/TracksContext";

export default function Track({ id, name }) {
  const { handleChangeTrackName } = useContext(TracksContext);

  const newName = useRef("");

  function handleClick() {
    handleChangeTrackName(id, newName.current.value);
  }

  return (
    <div>
      <h4>ID: {id}</h4>
      <h4>Name: {name}</h4>
      <div>
        <input type="text" ref={newName} />
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
}
