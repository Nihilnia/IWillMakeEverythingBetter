import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    activePlayer = "O";
  }

  return activePlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({ X: "Player_1", O: "Player_2" });

  const activePlayer = deriveActivePlayer(gameTurns);

  //you needed to create a deep copy..
  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol) {
      if (
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol === "X" ? players.X : players.O;
      }
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSwitchPlayer(rowIndex, colIndex) {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setGameTurns((prev) => {
      const currentPlayer = deriveActivePlayer(prev);
      //Idk why we need another one. We already have activeplayer.

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prev,
      ];

      return updatedTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns(() => []);
    console.log(gameBoard);
  }

  function handleGetPlayerName(name, symbol) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: name };
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
            getPlayerName={handleGetPlayerName}
          />
          <Player
            name="Player Two"
            symbol="O"
            isActive={activePlayer === "O"}
            getPlayerName={handleGetPlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} onSelected={handleRestartGame} />
        )}
        <GameBoard onSelected={handleSwitchPlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
