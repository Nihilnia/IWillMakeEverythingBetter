import { useState } from "react";
import { sections } from "./database/sections.js";

import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [selectedLecture, setSelectedLecture] = useState(
    selectedSection.lectures[0]
  );

  console.log("selectedLecture");
  console.log(selectedLecture);

  function handleSectionChange(secTitle) {
    let index = sections.findIndex((f) => f.title === secTitle);
    setSelectedSection(sections[index]);
    // setSelectedLecture(selectedSection.lectures[0]); //Doesnt work, take notes
    setSelectedLecture(sections[index].lectures[0]);
  }

  function handleLectureChange(lecTitle) {
    let index = selectedSection.lectures.findIndex((f) => f.title === lecTitle);
    setSelectedLecture(selectedSection.lectures[index]);
  }

  const allSections = sections.map((section) => {
    return (
      <TabButton
        key={section.title}
        onSelected={() => handleSectionChange(section.title)}
      >
        {section.title}
      </TabButton>
    );
  });

  const allLectures = selectedSection.lectures.map((lecture) => {
    return (
      <TabButton
        key={lecture.title}
        onSelected={() => handleLectureChange(lecture.title)}
      >
        {lecture.title}
      </TabButton>
    );
  });

  const jsxLecture = (
    <div>
      <h3>{selectedLecture.title}</h3>
      <h4>{selectedLecture.description}</h4>
      <pre>
        <code>{selectedLecture.codeExamples}</code>
      </pre>
    </div>
  );

  return (
    <section id="container-main">
      <div className="left-side">{allSections}</div>
      <div className="right-side">
        {allLectures}
        {jsxLecture}
      </div>
    </section>
  );
}

export default App;
