import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Dialog({ open, children, className = "", handleClose }) {
  const refDialog = useRef();

  useEffect(() => {
    if (refDialog.current && open) {
      refDialog.current.showModal();
    }

    return () => {
      if (refDialog.current) refDialog.current.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={refDialog} className={`modal ${className}`} onClose={handleClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
