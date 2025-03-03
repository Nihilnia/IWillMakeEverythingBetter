import NewTask from "./NewTask";

export default function Tasks({ projectTasks, onAddNewTask }) {
  const content =
    projectTasks !== undefined ? (
      <ul>
        {projectTasks.map((task) => {
          return <li key={task.id + Math.random()}>{task.title}</li>;
        })}
      </ul>
    ) : (
      <p className="text-stone-800 my-4">
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
