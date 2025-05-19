import { useCallback, useRef, useState } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const [userName, setUserName] = useState("");

  const handleClick = useCallback(() => {
    setUserName(name.current.value);

    console.log(name.current.value);
  }, []);

  const name = useRef("");

  const code = `
Check the source codes.
  `;

  return (
    <section className="max-w-[80%] w-[100%]">
      <div>
        <CodeExample
          code={code}
          title={"Component Composition: Using children instead of prop/ s."}
        >
          {userName.length > 0 && <h2>Welcome {userName}</h2>}
        </CodeExample>
        <div>
          <label>What is your name?</label>
          <input type="text" ref={name} />
          <button onClick={handleClick}>Greet</button>
        </div>
      </div>
    </section>
  );
}
