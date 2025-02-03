export default function TabButton({ children }) {
  function handleClick() {
    console.log("Button clicked mfs.");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
