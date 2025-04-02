import { useCallback } from "react";
import CodeExample from "./CodeExample";

export default function Note() {
  const handleClick = useCallback(() => {
    console.log("Hello world.");
  }, []);

  const codeOne = `
  const handleClick = useCallback(() => {
    console.log("Hello world.");
  }, []);
  `;

  return (
    <section className="max-w-[80%] w-[100%]">
      <div>
        <CodeExample
          code={code}
          title={"useCallback: Control over re-creation of functions."}
        />
      </div>
    </section>
  );
}
