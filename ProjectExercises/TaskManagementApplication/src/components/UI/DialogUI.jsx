import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function DialogUI({ children, ref }) {
  const refDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      showDialog() {
        refDialog.current.showModal();
      },
      closeDialog() {
        refDialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={refDialog}>{children}</dialog>,
    document.getElementById("modal")
  );
}
