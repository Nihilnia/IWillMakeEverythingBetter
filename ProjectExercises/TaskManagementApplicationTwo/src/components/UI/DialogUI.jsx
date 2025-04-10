import { useImperativeHandle, useRef } from "react";

export default function DialogUI({ children, ref }) {
  const refDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      showDialog() {
        refDialog.current.showModal();
      },
    };
  });

  return <dialog ref={refDialog}>{children}</dialog>;
}
