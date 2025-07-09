export default function Label({ props, children }) {
  return (
    <label {...props} className="font-semibold">
      {children}
    </label>
  );
}
