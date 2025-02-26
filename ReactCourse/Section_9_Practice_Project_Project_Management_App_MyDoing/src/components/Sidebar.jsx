export default function Sidebar({
  handleCurrentPage,
  allProjects,
  handleCurrentProject,
}) {
  function setCurrentPage(page) {
    handleCurrentPage(page);
  }

  function handleSelectedProject(prj) {
    handleCurrentProject(prj);
  }

  return (
    <section id="all-projects">
      <div>
        <h2>Your Projects</h2>
        <button
          className="btn-add"
          onClick={() => setCurrentPage("NewProject")}
        >
          Add
        </button>
      </div>

      <div className="sidebar-projects">
        {allProjects.map((project, index) => (
          <div
            className="sidebar-project-title"
            key={index}
            onClick={() => handleSelectedProject(project)}
          >
            {project.title}
          </div>
        ))}
      </div>
    </section>
  );
}
