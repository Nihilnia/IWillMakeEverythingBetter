import TabButton from "./TabButton.jsx";

import { EXAMPLES } from "../data.js";
import { useState } from "react";

export default function Examples() {
  const [selected, setSelected] = useState();

  if (selected) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selected]?.title}</h3>
        <p>{EXAMPLES[selected]?.description}</p>
        <pre>
          <code>{EXAMPLES[selected]?.code}</code>
        </pre>
      </div>
    );
  }

  let tabContent = <p>Please select a topic.</p>;

  function handleClick(title) {
    setSelected(title);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          onSelected={() => handleClick("components")}
          isActive={selected === "components"}
        >
          Components
        </TabButton>
        <TabButton
          onSelected={() => handleClick("jsx")}
          isActive={selected === "jsx"}
        >
          JSX
        </TabButton>
        <TabButton
          onSelected={() => handleClick("props")}
          isActive={selected === "props"}
        >
          Props
        </TabButton>
        <TabButton
          onSelected={() => handleClick("state")}
          isActive={selected === "state"}
        >
          State
        </TabButton>
      </menu>
      {tabContent}
    </section>
  );
}
