import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";

export default function MainContent({
  currentPage,
  handleCurrentPage,
  handleProjects,
  selectedProject,
  handleTodos,
}) {
  console.log("selectedProject");
  console.log(selectedProject);

  return (
    <section id="main-content">
      {currentPage === "home" && (
        <div>
          <h2>No project selected</h2>
          <button onClick={() => handleCurrentPage("NewProject")}>
            Add new project
          </button>
        </div>
      )}
      {currentPage === "NewProject" && (
        <NewProject handleProjects={handleProjects} />
      )}
      {currentPage === "ProjectDetails" && (
        <ProjectDetails
          selectedProject={selectedProject}
          handleTodos={handleTodos}
        />
      )}
    </section>
  );
}
