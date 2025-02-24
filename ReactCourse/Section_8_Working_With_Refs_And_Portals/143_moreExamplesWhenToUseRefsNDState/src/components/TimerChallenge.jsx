import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();
  const result = useRef({ isWin: false, timeLeft: targetTime * 1000 });

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    //user did not click till time is expired
    clearInterval(timer.current);

    result.current = { isWin: false, timeLeft: timeRemaining };
    dialog.current.openIt();
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    //user clicked it
    clearInterval(timer.current);

    result.current = { isWin: true, timeLeft: timeRemaining / 1000 };
    dialog.current.openIt();
    setTimeRemaining(targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={result.current.isWin ? "Won" : "Lose"}
        left={result.current.timeLeft}
        targetTime={targetTime}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running.." : "Not active"}
        </p>
      </section>
    </>
  );
}
