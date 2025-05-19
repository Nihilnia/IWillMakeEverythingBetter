export default function TasksList({ tasks, onRemoveTask, onToggleTask }) {
  function handleRemoveTask(id) {
    onRemoveTask(id);
  }

  function handleCompleted(id) {
    onToggleTask(id);
  }

  const content = tasks.map((task) => (
    <div key={task.id} className="mt-5">
      <div className="flex gap-2">
        <h4>Title: {task.name}</h4>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleCompleted(task.id)}
        />
      </div>
      <button
        onClick={() => handleRemoveTask(task.id)}
        className="bg-[blue] px-2 rounded-sm"
      >
        Remove task
      </button>
    </div>
  ));

  return <section>{content}</section>;
}
