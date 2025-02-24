import { useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";

export default function ResultModal({
  ref,
  targetTime,
  remainingTime,
  onReset,
}) {
  const dialog = useRef();

  const isWin = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      openIt() {
        dialog.current.showModal();
      },
    };
  });

  // My way
  const aKey = useRef();

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      aKey.current.click();
      onReset();
    }
  }

  return ReactDOM.createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {!isWin && <h2>Your score: {score}</h2>}
      {isWin && <h2>You lost.</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form
        method="dialog"
        onSubmit={() => onReset()}
        onKeyDown={handleKeyDown}
      >
        <button ref={aKey}>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
}
