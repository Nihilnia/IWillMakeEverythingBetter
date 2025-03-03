import ButtonAdd from "./ButtonAdd";
import Input from "./Input";
import NewTask from "./NewTask";

export default function Tasks({ project, onAddNewTask }) {
  const content =
    project.tasks.length > 0 ? (
      <ul>
        {project.tasks.map((f, idx) => (
          <li key={f.id}>
            Task {idx + 1}- {f.title}
          </li>
        ))}
      </ul>
    ) : (
      <p className="text-stone-800 mb-4">
        This project does not have any tasks yet.
      </p>
    );

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddNewTask={onAddNewTask} />
      {content}
    </section>
  );
}
