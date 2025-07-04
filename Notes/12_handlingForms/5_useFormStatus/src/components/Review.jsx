import { useOptimistic, useState } from "react";

export default function Review() {
  const [count, setCount] = useState(0);

  const [optimisticCount, setOptimisticCount] = useOptimistic(count, (prevCount, mode) => {
    return mode === "positive" ? prevCount + 1 : prevCount - 1;
  });

  async function handleReview(e) {
    const choice = e.target.name;

    setOptimisticCount(choice.toString());

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 3000)
    );

    setCount((prev) => {
      return choice === "positive" ? prev + 1 : prev - 1;
    });
  }

  return (
    <>
      <div>Current count: {optimisticCount}</div>
      <div>How do you like user experience?</div>
      <div>
        <button type="button" name="positive" onClick={handleReview}>
          +
        </button>
        <button type="button" name="negative" onClick={handleReview}>
          -
        </button>
      </div>
    </>
  );
}
