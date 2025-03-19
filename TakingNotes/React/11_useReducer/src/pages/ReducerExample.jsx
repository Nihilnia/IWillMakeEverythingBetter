import { useState } from "react";

export default function ReducerExample() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount((prev) => prev + 1);
  }
  function handleMinus() {
    setCount((prev) => prev - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <section>
      <h2>Count: {count}</h2>
      <button onClick={handlePlus}>Plus 1</button>
      <button onClick={handleMinus}>Minus 1</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  );
}
