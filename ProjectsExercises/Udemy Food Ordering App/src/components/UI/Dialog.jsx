import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { DialogContext } from "../../context/DialogContext";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  const refDialog = useRef(null);

  const { clearActiveDialog } = useContext(DialogContext);

  function handleClose() {
    clearActiveDialog(ref);
  }

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
    <dialog ref={refDialog} onClose={handleClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Dialog;
