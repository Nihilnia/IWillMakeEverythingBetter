import { useEffect, useRef, useState } from "react";

export default function Gloria() {
  const [output, setOutput] = useState("");

  const refInput = useRef();

  useEffect(() => {
    refInput.current.focus();
  }, []);

  useEffect(() => {
    if (output) {
      document.title = `You wrote: ${output}`;
    } else {
      document.title = "React App";
    }
  }, [output]);

  function handleClick() {
    setOutput(refInput.current.value);
    refInput.current.value = "";
  }

  return (
    <>
      <h2>Output: {output}</h2>
      <input ref={refInput} type="text" />
      <button onClick={handleClick}>Update</button>
    </>
  );
}
