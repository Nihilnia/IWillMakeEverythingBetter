export default function InputUI({ type, ref, props }) {
  return (
    <input
      ref={ref}
      type={type}
      {...props}
      className="border border-gray-300 rounded-md p-2"
    />
  );
}
