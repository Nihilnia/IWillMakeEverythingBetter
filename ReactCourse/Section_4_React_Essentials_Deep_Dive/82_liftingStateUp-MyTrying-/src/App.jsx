import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSwitchPlayer() {
    setActivePlayer((prev) => {
      return prev === "X" ? "O" : "X";
    });
  }

  const isXActive = activePlayer === "X" ? true : false;
  const isYActive = activePlayer === "O" ? true : false;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player One" symbol="X" isActive={isXActive} />
          <Player name="Player Two" symbol="O" isActive={isYActive} />
        </ol>
        <GameBoard
          activePlayer={activePlayer}
          onSelected={handleSwitchPlayer}
        />
      </div>
    </main>
  );
}

export default App;
