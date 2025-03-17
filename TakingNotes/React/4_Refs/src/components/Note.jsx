import { useRef } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const theInput = useRef("");

  function handleClick() {
    console.log(theInput.current.value);
  }

  return (
    <section className="max-w-[60%] w-[100%]">
      <div>
        <input type="text" ref={theInput} placeholder="Write something.." />
        <button onClick={handleClick}>Click me</button>
      </div>
      <h1 className="mb-10 text-3xl">Refs</h1>
      <div>
        <CodeExample
          code={code}
          title={"There' s an element, let' s give it a reference!"}
        />
      </div>
    </section>
  );
}
