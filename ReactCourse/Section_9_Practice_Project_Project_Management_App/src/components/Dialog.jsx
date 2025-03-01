import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Dialog = forwardRef(function Dialog({ children, buttonCaption }, ref) {
  const myDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openIt() {
        myDialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={myDialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Dialog;
