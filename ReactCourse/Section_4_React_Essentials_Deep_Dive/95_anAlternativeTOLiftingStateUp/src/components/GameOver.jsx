export default function GameOver({ winner, onSelected }) {
  const result = winner ? <p>{winner} won!</p> : <p>It' s a draw!</p>;

  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {result}
      <p>
        <button onClick={onSelected}>Rematch!</button>
      </p>
    </div>
  );
}
