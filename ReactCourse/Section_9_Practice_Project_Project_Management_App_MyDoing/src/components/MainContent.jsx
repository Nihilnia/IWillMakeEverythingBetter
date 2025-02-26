import NewProject from "./NewProject";
import ProjectDetails from "./ProjectDetails";

export default function MainContent({
  currentPage,
  handleCurrentPage,
  handleNewProject,
  currentProject,
  handleNewTodo,
  handleRemoveTodo,
}) {
  function setCurrentPage(page) {
    handleCurrentPage(page);
  }

  return (
    <section id="main-content">
      {currentPage === "home" && (
        <div>
          <h2>No project selected</h2>
          <button
            className="btn-add"
            onClick={() => setCurrentPage("NewProject")}
          >
            Add new
          </button>
        </div>
      )}
      {currentPage === "NewProject" && (
        <NewProject handleNewProject={handleNewProject} />
      )}
      {currentPage === "ProjectDetails" && (
        <ProjectDetails
          currentProject={currentProject}
          handleNewTodo={handleNewTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      )}
    </section>
  );
}
