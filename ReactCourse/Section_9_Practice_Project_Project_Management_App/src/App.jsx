import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined, id or null - makes hella sense to control three conditions
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: null }));
  }

  function handleCancel() {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: undefined }));
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

  function handleSelectedProject(prjId) {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: prjId }));
  }

  console.log(projectsState);

  let selectedProject = projectsState.projects.find(
    (f) => f.id === projectsState.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddNewProject={handleAddNewProject}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        allProjects={projectsState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
