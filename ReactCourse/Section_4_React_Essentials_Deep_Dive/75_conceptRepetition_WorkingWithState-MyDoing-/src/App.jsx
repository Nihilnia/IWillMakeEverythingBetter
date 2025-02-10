import { useState } from "react";
import Player from "./components/Player";

function App() {
  const [players, setPlayers] = useState([
    {
      name: "Pl1",
      symbol: "X",
    },
    {
      name: "Pl2",
      symbol: "Y",
    },
  ]);

  function handleNameChange(name, newName) {
    let newList = [...players];

    let playerIndex = players.findIndex((f) => f.name === name);
    newList[playerIndex] = { ...newList[playerIndex], name: newName };

    setPlayers(newList);

    console.log(players);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {players.map((player) => (
            <Player
              key={player.symbol}
              name={player.name}
              symbol={player.symbol}
              onSelected={handleNameChange}
            />
          ))}
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
