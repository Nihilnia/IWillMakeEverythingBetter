import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, //undefined, id or null - makes hella sense to control three conditions
    projects: [],
    tasks: [],
  });

  function handleStartAddProject() {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: null }));
  }

  function handleCancel() {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: undefined }));
  }

  function handleAddNewProject(prj) {
    setProjectsState((prev) => {
      const newProject = {
        ...prj,
        id: Math.random(),
      };

      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleAddNewTask(task) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, { id: prev.selectedProjectId, title: task }],
      };
    });
  }

  function handleRemoveTask(task) {
    setProjectsState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((f) => f.title !== task.title),
      };
    });
  }

  function handleSelectedProject(prjId) {
    setProjectsState((prev) => ({ ...prev, selectedProjectId: prjId }));
  }

  function handleDeleteProject() {
    setProjectsState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter((f) => f.id !== prev.selectedProjectId),
    }));
  }

  console.log("projectsState");
  console.log(projectsState);

  let selectedProject = projectsState.projects.find(
    (f) => f.id === projectsState.selectedProjectId
  );

  let selectedProjectTasks = projectsState.tasks.filter(
    (f) => f.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onProjectDelete={handleDeleteProject}
      onAddNewTask={handleAddNewTask}
      onRemoveTask={handleRemoveTask}
      projectTasks={selectedProjectTasks}
    />
  );

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
