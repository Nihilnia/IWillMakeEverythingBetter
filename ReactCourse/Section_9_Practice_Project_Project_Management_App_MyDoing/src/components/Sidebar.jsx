export default function Sidebar({ handleCurrentPage, projects }) {
  return (
    <section id="sidebar">
      <button onClick={() => handleCurrentPage("NewProject")}>Add</button>
      <div>
        {projects.map((project) => {
          return (
            <button
              key={project.title}
              onClick={() => handleCurrentPage("ProjectDetails", project)}
            >
              {project.title}
            </button>
          );
        })}
      </div>
    </section>
  );
}
