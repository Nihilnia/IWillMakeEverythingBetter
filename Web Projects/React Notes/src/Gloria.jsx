import { useState } from "react";
import TabButton from "./components/TabButton";
import { sections } from "./database/sections";

function App() {
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedLecture, setSelectedLecture] = useState(null);

  function handleSectionChange(secID) {
    setSelectedSection(secID);
  }

  function handleLectureChange(lecTitle) {
    setSelectedLecture(lecTitle);
  }

  let allSections = sections.map((section) => {
    return (
      <TabButton
        key={section.id}
        onSelected={() => handleSectionChange(section.id)}
      >
        {section.title}
      </TabButton>
    );
  });

  let currentLectures = sections[selectedSection].lectures.map((lecture) => {
    return (
      <TabButton
        key={lecture.title}
        onSelected={() => handleLectureChange(lecture.title)}
      >
        {lecture.title}
      </TabButton>
    );
  });

  let currentLecture = sections[selectedSection].lectures.map((lecture) => {
    return (
      lecture.title === selectedLecture && (
        <div>
          <h2>{lecture.title}</h2>
          <h2>{lecture.description}</h2>
          <h2>{lecture.codeExamples}</h2>
        </div>
      )
    );
  });

  return (
    <section id="container-main">
      <div id="left-side">{allSections}</div>
      <div id="right-side">
        {currentLectures}
        {currentLecture}
      </div>
    </section>
  );
}

export default App;
