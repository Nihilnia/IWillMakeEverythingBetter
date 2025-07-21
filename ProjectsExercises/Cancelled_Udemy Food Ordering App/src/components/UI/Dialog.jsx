import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { DialogContext } from "../../context/DialogContext";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  const { clearActiveDialog } = useContext(DialogContext);

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

  function handleClose() {
    clearActiveDialog();
  }

  return createPortal(
    <dialog ref={refDialog} onClose={handleClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Dialog;
