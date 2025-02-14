export default function Log({ turns }) {
  let moves = turns.map((turn) => {
    let { row, col } = turn.square;
    const player = turn.player;

    return (
      <li key={`${row}${col}`}>
        {player} selected {row}, {col}
      </li>
    );
  });

  return <ol id="log">{moves}</ol>;
}
