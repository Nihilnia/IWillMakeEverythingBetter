import { useState } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const [count, setCount] = useState(0);
  /*
    count = state itself
    setCount = setter function for the state
    0 = initial value
  */

  function handleCount() {
    setCount((prev) => prev + 1);

    /*
      Javascript objects are immutable
      because of this we are getting the snapshot of the current state
      then we are updating that (shallow) copy.
    */
  }

  const code = `
  const [count, setCount] = useState(0);
  /*
    count = state itself
    setCount = setter function for the state
    0 = initial value
  */

  function handleCount() {
    setCount((prev) => prev + 1);

    /*
      Javascript objects are immutable
      because of this we are getting the snapshot of the current state
      then we are updating that (shallow) copy.
    */
  }
`;

  return (
    <section className="max-w-[60%] w-[100%]">
      <h2>{count}</h2>
      <button onClick={handleCount}>Click me</button>
      <h1 className="mb-10 text-3xl">State</h1>
      <div>
        <CodeExample
          code={code}
          title={"State changes, component changes; re-render."}
        />
      </div>
    </section>
  );
}
