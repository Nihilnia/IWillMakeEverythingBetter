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
    setProjectsState((prev) => ({ ...prev, selectedProjectId: null }));
  }

  function handleAddNewProject(prj) {
    setProjectsState((prev) => {
      const newProjectId = Math.random();

      const newProject = {
        ...prj,
        id: newProjectId,
      };

      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  console.log(projectsState);

  let content;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddNewProject={handleAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        allProjects={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
