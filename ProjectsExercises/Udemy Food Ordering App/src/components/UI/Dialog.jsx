import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Dialog({ ref, children }) {
  const refDialog = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      showDialog() {
        refDialog.current.showModal();
      },
      hideDialog() {
        refDialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={refDialog} onClose={() => refDialog.current.close()}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
