export default function UserInput({ title, symbol, getUserIntel }) {
  function sendUserIntel(e) {
    getUserIntel(symbol, e.target.value);
  }

  return (
    <div>
      <label htmlFor="">{title}</label>
      <input type="text" name="" id="" onChange={sendUserIntel} />
    </div>
  );
}
