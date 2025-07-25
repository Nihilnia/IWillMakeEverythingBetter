import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Dialog({ open, children, onClose, className = "" }) {
  const refDialog = useRef();

  useEffect(() => {
    const modal = refDialog.current;

    if (modal && open) {
      modal.showModal();
    }

    return () => {
      if (modal) modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={refDialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
