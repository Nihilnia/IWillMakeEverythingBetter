export default function InputUI({ title, props }) {
  return (
    <button {...props} className="bg-amber-400 px-3 py-1 rounded-md">
      {title}
    </button>
  );
}
