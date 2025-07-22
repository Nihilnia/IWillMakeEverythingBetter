import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { DialogContext } from "../../context/DialogContext";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ children }, ref) {
  const refDialog = useRef(null);

  const { clearActiveDialog } = useContext(DialogContext);

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
    <dialog ref={refDialog} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Dialog;
