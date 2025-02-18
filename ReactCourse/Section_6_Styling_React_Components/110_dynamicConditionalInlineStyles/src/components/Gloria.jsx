import { useState } from "react";
import "./Gloria.css";

function Gloria() {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <section id="Gloria">
      <p
        style={{
          color: "rgba(0, 0, 0, 0.44)",
          border: "1px solid rgba(0, 0, 0, 0.44)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        The Grid. A digital frontier. I tried to picture clusters of information
        as they moved through the computer. What did they look like? Ships?
        motorcycles? Were the circuits like freeways? I kept dreaming of a world
        I thought I'd never see. And then, one day, I got in.
      </p>
      <button
        style={{
          color: buttonPressed ? "red" : undefined,
        }}
        onClick={() => setButtonPressed(!buttonPressed)}
      >
        Change Color
      </button>
    </section>
  );
}

export default Gloria;
