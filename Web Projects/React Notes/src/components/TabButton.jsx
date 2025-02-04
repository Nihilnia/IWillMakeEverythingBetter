function TabButton({ children, onSelected }) {
  return (
    <button className="btn-tab" onClick={onSelected}>
      {children}
    </button>
  );
}

export default TabButton;
