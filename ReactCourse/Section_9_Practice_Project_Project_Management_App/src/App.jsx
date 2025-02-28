import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined, id or null - makes hella sense to control three conditions
    projects: [],
  });

  function handleStartAddProject() {
    console.log("asdas");
    setProjectsState((prev) => ({ ...prev, selectedProjectId: null }));
  }

  let render;

  switch (projectsState.selectedProjectId) {
    case null:
      render = <NewProject handleStartAddProject={handleStartAddProject} />;
      break;

    default:
      render = (
        <NoProjectSelected handleStartAddProject={handleStartAddProject} />
      );
      break;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar handleStartAddProject={handleStartAddProject} />
      {render}
    </main>
  );
}

export default App;
