import { createPortal } from "react-dom";

export default function NotificationUI({ message }) {
  return createPortal(
    <section className="fixed bottom-2 left-2">{message}</section>,
    document.getElementById("notification")
  );
}
