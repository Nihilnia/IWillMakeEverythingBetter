import { Check } from "lucide-react";

export default function Notification({ children }) {
  return (
    <div className="fixed bottom-4 right-[5%] notification flex flex-row">
      <Check />
      {children}
    </div>
  );
}
