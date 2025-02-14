export default function Log({ daLog }) {
  const movez = daLog.map((move) => {
    const { row, column } = move.square;
    const symbol = move.player;

    return (
      <li>
        {symbol} being played to row: {row}- column: {column}
      </li>
    );
  });

  return <ol id="log">{movez}</ol>;
}
