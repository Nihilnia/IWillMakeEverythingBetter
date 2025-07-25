export default function Button({ children, textOnly, className, ...props }) {
  const cssClasses = `${textOnly ? "text-button" : "button"} ${className}`;

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
}
