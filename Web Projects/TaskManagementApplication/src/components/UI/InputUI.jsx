export default function InputUI({ type, placeholder, ref, props }) {
  return (
    <input
      ref={ref}
      type={type}
      placeholder={placeholder}
      {...props}
      className="border border-gray-300 rounded-md p-2"
    />
  );
}
