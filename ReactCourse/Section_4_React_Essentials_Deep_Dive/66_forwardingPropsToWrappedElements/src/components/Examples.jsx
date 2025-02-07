import { useState } from "react";
import TabButton from "./TabButton.jsx";

import { EXAMPLES } from "../data.js";

import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        tabButtons={
          <>
            {Object.values(EXAMPLES).map((example) => {
              return (
                <TabButton
                  key={example.title}
                  onClick={() => handleSelect(example.title.toLowerCase())}
                >
                  {example.title}
                </TabButton>
              );
            })}
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
