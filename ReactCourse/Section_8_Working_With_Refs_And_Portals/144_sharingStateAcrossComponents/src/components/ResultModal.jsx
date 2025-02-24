import { useImperativeHandle, useRef } from "react";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const isWin = remainingTime <= 0 ? "Lost" : "Win";
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      openIt() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      <h2>You {isWin}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={() => onReset()}>
        <button>Close</button>
      </form>
    </dialog>
  );
}
