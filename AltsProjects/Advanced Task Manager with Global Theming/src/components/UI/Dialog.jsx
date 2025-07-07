import { useEffect, useRef } from "react";

export default function Dialog({ onHandleClose, children }) {
  const refDialog = useRef(null);

  useEffect(() => {
    if (refDialog.current) {
      refDialog.current.showModal();
    }
  }, []);

  function handleClose() {
    onHandleClose();
  }

  return (
    <dialog ref={refDialog} onClose={handleClose}>
      {children}
    </dialog>
  );
}
