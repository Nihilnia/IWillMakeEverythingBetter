export default function UserInput({ title, intelSymbol, handleUserInput }) {
  function handleValueChange(e) {
    handleUserInput(intelSymbol, e.target.value);
  }

  return (
    <div>
      <label htmlFor="">{title}</label>
      <input type="text" onChange={handleValueChange} />
    </div>
  );
}
