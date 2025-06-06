const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelected }) {
  // const [gameBoard, setGameboard] = useState([
  //   [null, null, null],
  //   [null, null, null],
  //   [null, null, null],
  // ]);

  // function handleClick(rIndex, cIndex) {
  //   setGameboard((prev) => {
  //     const updatedBoard = [...prev.map((col) => [...col])];
  //     updatedBoard[rIndex][cIndex] = whosTurn;
  //     return updatedBoard;
  //   });

  //   onSelected();
  // }

  let theBoard = (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelected}>{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );

  return theBoard;
}
