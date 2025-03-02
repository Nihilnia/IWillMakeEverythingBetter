import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import ButtonAdd from "./ButtonAdd";

//work on forwardRef (if its necessary since its updated with ver 19)
// work on userImperativeHandle, understand it

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
    <dialog
      ref={myDialog}
      className="backdrop:bg-stone-900/60 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <ButtonAdd>{buttonCaption}</ButtonAdd>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Dialog;
