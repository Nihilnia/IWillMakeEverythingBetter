import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSwitchPlayer() {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
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
        <GameBoard onSelected={handleSwitchPlayer} whosTurn={activePlayer} />
      </div>
    </main>
  );
}

export default App;
