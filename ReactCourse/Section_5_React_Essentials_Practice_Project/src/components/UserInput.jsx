export default function UserInput({ title, getUserIntel, symbol }) {
  function handleInputChange(e) {
    getUserIntel(symbol, e.target.value);
  }

  return (
    <>
      <label htmlFor="">{title}</label>
      <input type="text" onChange={handleInputChange} />
    </>
  );
}
