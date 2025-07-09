import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const { editTask, removeTask } = useContext(TaskContext);

  function handleTaskOp(e) {
    const choice = e.target.name;
    if (choice === "EDIT_TASK") {
      const newDetails = {
        title: "AAABBBCC",
        description: "AAABBBCC",
        dueDate: "0000-11-22",
        priority: "higher",
        isCompleted: true,
      };

      editTask(id, newDetails);
    } else {
      removeTask(id);
    }
  }

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>description: {description}</h2>
      <h2>dueDate: {dueDate}</h2>
      <h2>priority: {priority}</h2>
      <h2>isCompleted: {isCompleted ? "y" : "n"}</h2>
      <button onClick={handleTaskOp} type="button" name="REMOVE_TASK">
        Remove
      </button>
      <button onClick={handleTaskOp} type="button" name="EDIT_TASK">
        Edit
      </button>
    </div>
  );
}
