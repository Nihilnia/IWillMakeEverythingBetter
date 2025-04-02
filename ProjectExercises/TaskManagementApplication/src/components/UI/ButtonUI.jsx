export default function ButtonUI({ type, title, ...props }) {
  return (
    <button
      type={type}
      {...props}
      className="bg-amber-400 px-3 py-1 rounded-md"
    >
      {title}
    </button>
  );
}
