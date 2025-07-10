export default function Input({ ...props }) {
  return (
    <input
      type="text"
      className="bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-2 text-amber-50"
      {...props}
    />
  );
}
