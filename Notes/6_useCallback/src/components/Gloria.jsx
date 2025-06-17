import { useCallback, useEffect, useRef, useState } from "react";

export default function Gloria() {
  const [output, setOutput] = useState("");

  const refInput = useRef();

  useEffect(() => {
    if (output) {
      document.title = `You wrote: ${output}`;
    } else {
      document.title = "React App";
    }

    refInput.current.focus();
  }, [output]);

  const handleClick = useCallback(() => {
    setOutput(refInput.current.value);
    refInput.current.value = "";
  }, []);

  return (
    <>
      <h2>Output: {output}</h2>
      <input ref={refInput} type="text" />
      <button onClick={handleClick}>Update</button>
    </>
  );
}
