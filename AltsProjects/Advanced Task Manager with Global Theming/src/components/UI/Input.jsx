export default function Input({ className, ...props }) {
  return (
    <input
      type="text"
      className={`bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-2 text-amber-50 w-[100%] max-w-[100%] ${className}`}
      {...props}
    />
  );
}
