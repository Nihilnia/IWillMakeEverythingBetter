function TabButton({ children, onSelected, className }) {
  return (
    <button onClick={onSelected} className={className}>
      {children}
    </button>
  );
}

export default TabButton;
