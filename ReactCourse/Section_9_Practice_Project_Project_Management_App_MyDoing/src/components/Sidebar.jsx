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
    <section>
      <button onClick={() => setCurrentPage("NewProject")}>Add</button>
      <div id="all-projects">
        {allProjects.map((project, index) => (
          <button key={index} onClick={() => handleSelectedProject(project)}>
            {project.title}
          </button>
        ))}
      </div>
    </section>
  );
}
