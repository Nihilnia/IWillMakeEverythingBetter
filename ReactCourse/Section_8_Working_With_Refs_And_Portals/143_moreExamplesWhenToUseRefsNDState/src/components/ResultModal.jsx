import { useImperativeHandle, useRef } from "react";

export default function ResultModal({ ref, result, left, targetTime }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openIt() {
        dialog.current.showModal();
        console.log("ashdgas");
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{left} seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
