import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending, data, method, action } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Enter"}
    </button>
  );
}
