import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSwitchPlayer(rowIndex, colIndex) {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setGameTurns((prev) => {
      let currentPlayer = "X";

      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: activePlayer,
        },
        ...prev,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player One"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            name="Player Two"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard onSelected={handleSwitchPlayer} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
