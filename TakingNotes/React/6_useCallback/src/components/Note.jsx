import { useCallback } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const handleClick = useCallback(() => {
    console.log("Hello world.");
  }, []);

  const code = `
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []); // Dependencies are empty, so it remains the same

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
    </div>
    );
  };
  `;

  return (
    <section className="max-w-[80%] w-[100%]">
      <div>
        <CodeExample
          code={code}
          title={"useCallback: Control over re-creation of functions."}
          defination={
            "Description : useCallback is a React hook that helps save a function's reference so it doesn’t get recreated on every render. In JavaScript, functions are treated as new every time a component re-renders, which can cause unnecessary updates in child components. By using useCallback, we make sure the function stays the same unless its dependencies change, helping to improve performance."
          }
        />
      </div>
    </section>
  );
}
