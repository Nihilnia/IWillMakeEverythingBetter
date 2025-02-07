export default function TabButton({ children, onSelected, isActive }) {
  return (
    <li>
      <button onClick={onSelected} className={isActive ? "active" : null}>
        {children}
      </button>
    </li>
  );
}
