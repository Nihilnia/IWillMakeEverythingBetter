import { useCallback, useRef, useState } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
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
        ></CodeExample>
      </div>
    </section>
  );
}
