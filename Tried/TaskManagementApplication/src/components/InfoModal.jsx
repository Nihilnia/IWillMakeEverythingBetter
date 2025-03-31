import { useImperativeHandle, useRef } from "react";

export default function InfoModal({ ref, children }) {
  const refDialog = useRef(0);

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        refDialog.current.showModal();
      },
      closeDialog() {
        refDialog.current.close();
      },
    };
  });

  return <dialog ref={refDialog}>{children}</dialog>;
}
