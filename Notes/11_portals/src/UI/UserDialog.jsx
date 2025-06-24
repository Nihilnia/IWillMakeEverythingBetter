import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function UserDialog({ message, onHandleClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHandleClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onHandleClose]);

  return createPortal(
    <div id="dialog">
      <h2>{message}</h2>
    </div>,
    document.getElementById("modal")
  );
}
