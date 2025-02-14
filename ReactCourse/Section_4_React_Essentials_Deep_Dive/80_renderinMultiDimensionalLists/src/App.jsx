import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player One" symbol="X" />
          <Player name="Player Two" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
