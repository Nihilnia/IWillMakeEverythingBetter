import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const { removeTask } = useContext(TaskContext);

  function handleRemove() {
    removeTask(id);
  }

  return (
    <div className="bg-amber-600 rounded-lg p-4 hover:bg-amber-200">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{dueDate}</h2>
      <h2>{priority}</h2>
      <h2>{isCompleted}</h2>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
}
