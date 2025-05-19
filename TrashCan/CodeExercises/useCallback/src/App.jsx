import { useState, useCallback } from "react";
import Gloria from "./components/Gloria";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Gloria onButtonClick={handleClick} />
      <h2>Count: {count}</h2>
    </div>
  );
}
