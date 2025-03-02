export default function SelectedProject({ project }) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    dat: "numeric",
  });

  return (
    <div>
      <header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={() => handleDelete(project.Id)}>Delete</button>
        </div>
        <p>{formattedDate}</p>
        <p>{project.description}</p>
      </header>
      TASKS
    </div>
  );
}
