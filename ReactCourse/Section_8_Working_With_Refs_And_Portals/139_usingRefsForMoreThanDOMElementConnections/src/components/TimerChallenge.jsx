import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timer = useRef();

  function handleStart() {
    setTimerStarted(true);
    setTimerExpired(false);

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
  }

  function handleStop() {
    setTimerStarted(false);
    setTimerExpired(false);
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && "You lost."}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running.." : "Not active"}
      </p>
    </section>
  );
}
