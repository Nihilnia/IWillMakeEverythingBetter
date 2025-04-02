import { useState } from "react";
import Square from "./components/Square";

function App() {
  const [turn, setTurn] = useState(false);
  let [moves, setMoves] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  function setMark() {
    return turn ? "X" : "Y";
  }

  function handleClick(sIdx) {
    setTurn(!turn);
    console.log(sIdx);
    setMoves((prevMoves) => {
      // Create a new array with the updated values
      const newMoves = [...prevMoves];
      newMoves[sIdx] = setMark(); // Update the first move to true
      return newMoves;
    });
  }

  let result = null;

  if (
    (moves[0] == "X" && moves[1] == "X" && moves[2] == "X") ||
    (moves[0] == "Y" && moves[1] == "Y" && moves[2] == "Y") ||
    (moves[3] == "X" && moves[4] == "X" && moves[5] == "X") ||
    (moves[3] == "Y" && moves[4] == "Y" && moves[5] == "Y") ||
    (moves[6] == "X" && moves[7] == "X" && moves[8] == "X") ||
    (moves[6] == "Y" && moves[7] == "Y" && moves[8] == "Y") ||
    (moves[0] == "X" && moves[4] == "X" && moves[8] == "X") ||
    (moves[0] == "Y" && moves[4] == "Y" && moves[8] == "Y") ||
    (moves[2] == "X" && moves[4] == "X" && moves[6] == "X") ||
    (moves[2] == "Y" && moves[4] == "Y" && moves[6] == "Y") ||
    (moves[0] == "X" && moves[3] == "X" && moves[6] == "X") ||
    (moves[0] == "Y" && moves[3] == "Y" && moves[6] == "Y") ||
    (moves[1] == "X" && moves[4] == "X" && moves[7] == "X") ||
    (moves[1] == "Y" && moves[4] == "Y" && moves[7] == "Y") ||
    (moves[2] == "X" && moves[5] == "X" && moves[8] == "X") ||
    (moves[2] == "Y" && moves[5] == "Y" && moves[8] == "Y")
  ) {
    result = <h2>{turn ? "Y" : "X"} won</h2>;
  }

  // WORK ON IT
  // const winningCombinations = [
  //   [0, 1, 2], // Top row
  //   [3, 4, 5], // Middle row
  //   [6, 7, 8], // Bottom row
  //   [0, 3, 6], // Left column
  //   [1, 4, 7], // Middle column
  //   [2, 5, 8], // Right column
  //   [0, 4, 8], // Diagonal from top-left to bottom-right
  //   [2, 4, 6], // Diagonal from top-right to bottom-left
  // ];

  // for (const combination of winningCombinations) {
  //   const [a, b, c] = combination;
  //   if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
  //     result = <h2>{moves[a]} won</h2>;
  //     break;
  //   }
  // }

  let allBrackets = moves.map((f, y) => {
    return (
      <Square
        key={y}
        onSelected={() => {
          handleClick(y);
        }}
        move={moves[y]}
        isClicked={moves[y] != null ? true : false}
      ></Square>
    );
  });

  console.log("Gloria");

  return (
    <>
      {result}
      <section id="container-square">{allBrackets}</section>
    </>
  );
}

export default App;
