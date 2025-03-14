import { useEffect, useState } from "react";

export default function ProgressBar({ max }) {
  const [remainingTime, setRemainingTime] = useState(max);

  useEffect(() => {
    const progress = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(progress);
    };
  }, []);

  return <progress value={remainingTime} max={max} />;
}
