export default function Square({ move, onSelected, isClicked }) {
  return (
    <div className="square" onClick={!isClicked ? onSelected : undefined}>
      <span>{move}</span>
    </div>
  );
}
