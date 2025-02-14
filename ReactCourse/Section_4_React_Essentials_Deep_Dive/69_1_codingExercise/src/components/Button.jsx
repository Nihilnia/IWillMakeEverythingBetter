export default function Button({ children, mode = "filled", Icon }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  return (
    <button className={mode + "-button"}>
      <span className="button-icon">
        <Icon />
      </span>
      <span>{children}</span>
    </button>
  );
}
