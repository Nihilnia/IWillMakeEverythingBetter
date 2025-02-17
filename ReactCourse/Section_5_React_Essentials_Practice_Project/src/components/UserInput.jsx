export default function UserInput({ title, symbol, getUserInput }) {
  function handleUserInput(e) {
    getUserInput(symbol, e.target.value);
  }

  return (
    <div className="input-group">
      <label htmlFor="">{title}</label>
      <input type="text" name="" id="" onChange={handleUserInput} />
    </div>
  );
}
