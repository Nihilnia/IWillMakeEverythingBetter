import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddNewTask, onRemoveTask }) {
  const content =
    tasks.length > 0 ? (
      <ul className="p-4 mt-8 bg-stone-100 rounded-lg">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className="flex justify-between my-4 hover:bg-red-300 hover:rounded-lg px-3"
            >
              <span>{task.title}</span>
              <button
                onClick={() => onRemoveTask(task)}
                className="text-stone-700 hover:text-red-500"
              >
                Remove
              </button>
            </li>
          );
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
