import { useState } from "react";

export default function Gloria() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  function handleSubtract() {
    setCount((prev) => {
      return prev - 1;
    });
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <h2>Current: {count}</h2>
      <div className="flex gap-2">
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
