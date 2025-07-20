import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  const refDialog = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        showDialog() {
          refDialog.current.showModal();
        },
        hideDialog() {
          refDialog.current.close();
        },
      };
    },
    []
  );

  useEffect(() => {
    if (refDialog.current && refDialog.current.open) {
      refDialog.current.close();
    }
  }, []);

  return createPortal(
    <dialog ref={refDialog} onClose={() => refDialog.current.close()}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Dialog;
