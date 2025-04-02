import { useImperativeHandle, useRef } from "react";

import ButtonUI from "./ButtonUI";

export default function DialogUI({ btnTitle, props, ref, children }) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        dialogRef.current.showModal();
      },
      closeDialog() {
        dialogRef.current.close();
      },
    };
  });

  return (
    <dialog ref={dialogRef} {...props}>
      {children}
      <form method="dialog">
        <ButtonUI type="submit" title={btnTitle} />
        <ButtonUI title="Close" onClick={() => dialogRef.current.close()} />
      </form>
    </dialog>
  );
}
