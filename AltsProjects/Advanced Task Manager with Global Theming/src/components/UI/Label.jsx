export default function Label({ children, ...props }) {
  return (
    <label {...props} className="font-semibold">
      {children}
    </label>
  );
}
