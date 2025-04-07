import { useImperativeHandle, useRef } from "react";

import ButtonUI from "./ButtonUI";

export default function DialogUI({
  ref,
  isForm = true,
  btnTitle,
  btnEvent,
  children,
  ...props
}) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        console.log("Dialog on.");
        dialogRef.current.showModal();
      },
      closeDialog() {
        console.log("Dialog off.");
        dialogRef.current.close();
      },
    };
  });

  return (
    <dialog ref={dialogRef} {...props}>
      {children}
      {isForm && (
        <form method="dialog">
          <ButtonUI type="submit" title={btnTitle} onClick={() => btnEvent()} />
          <ButtonUI title="Close" onClick={() => dialogRef.current.close()} />
        </form>
      )}
    </dialog>
  );
}
