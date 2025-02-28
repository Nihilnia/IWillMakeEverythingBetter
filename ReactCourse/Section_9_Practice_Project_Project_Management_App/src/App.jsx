import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    selectedPage: undefined,
  });

  function handleSelectedPage(page) {
    setProjectsState((prev) => ({ ...prev, selectedPage: page }));
  }

  const toRender =
    projectsState.selectedPage === undefined ? (
      <NoProjectSelected handleSelectedPage={handleSelectedPage} />
    ) : (
      <NewProject />
    );

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar handleSelectedPage={handleSelectedPage} />
      {toRender}
    </main>
  );
}

export default App;
