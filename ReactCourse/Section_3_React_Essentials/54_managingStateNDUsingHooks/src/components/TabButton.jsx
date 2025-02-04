export default function TabButton({ children, onSelect }) {
  console.log("TabButton component rendered.");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
