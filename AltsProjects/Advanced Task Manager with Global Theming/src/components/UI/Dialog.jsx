import { useEffect, useRef } from "react";

export default function Dialog({ children, onHandleCloseDialog }) {
  const refDialog = useRef(null);

  useEffect(() => {
    if (refDialog.current) {
      refDialog.current.showModal();
    }
  }, []);

  function handleOnClose() {
    onHandleCloseDialog();
    refDialog.current.close();
  }

  return (
    <dialog
      ref={refDialog}
      onClose={handleOnClose}
      className="m-auto p-4 rounded-lg backdrop:bg-black/50"
    >
      {children}
    </dialog>
  );
}
