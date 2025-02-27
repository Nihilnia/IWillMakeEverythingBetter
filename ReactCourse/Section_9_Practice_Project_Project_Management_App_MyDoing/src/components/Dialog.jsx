import { useRef, useImperativeHandle } from "react";

export default function Dialog({ ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDialog() {
        dialog.current.showModal();
        console.log("Modal opened.");
      },
    };
  });

  function handleClick() {
    dialog.current.close();
  }

  return (
    <dialog ref={dialog} className="result-modal" onClick={handleClick}>
      <h4>Please fill out all.</h4>

      <form method="dialog">
        <button>Okay</button>
      </form>
    </dialog>
  );
}
