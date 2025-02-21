// import { useState } from "react";

// export default function Player() {
//   const [display, setDisplay] = useState("unknown entity");
//   const [playerName, setPlayerName] = useState("");

//   function handlePlayerName(e) {
//     setPlayerName(e.target.value);
//   }

//   function handleClick() {
//     setDisplay(playerName);
//   }

//   return (
//     <section id="player">
//       <h2>Welcome {display}</h2>
//       <p>
//         <input type="text" value={playerName} onChange={handlePlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }

import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const showPlayerName = useRef();

  function handleClick() {
    setPlayerName(showPlayerName.current.value);
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
