export default function Input({ ...props }) {
  return (
    <input
      className="border border-b-emerald-950 rounded-sm
  focus:outline-none px-1 py-1
  focus:border-red-500 focus:border-1.5"
      {...props}
    />
  );
}
