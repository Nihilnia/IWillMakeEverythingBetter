export default function Button({ className, children, ...props }) {
  const buttonClasses = `rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-2 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter
      cursor-pointer ${className}`;

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
}
