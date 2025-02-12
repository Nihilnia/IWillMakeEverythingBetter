import { useState } from "react";

export default function GameBoard() {
  const [gameBoard, setGameboard] = useState([
    ["X", null, "X"],
    [null, "X", null],
    ["X", null, "X"],
  ]);

  function handleClick(rIndex, cIndex, symbol) {
    setGameboard((prev) => {
      const updatedBoard = [...prev.map((col) => [...col])];
      updatedBoard[rIndex][cIndex] = symbol;
      return updatedBoard;
    });
  }

  let theBoard = (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex, "A")}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );

  return theBoard;
}
