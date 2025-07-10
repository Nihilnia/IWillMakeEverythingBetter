import { useContext } from "react";
import Button from "./Button";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;

  const { editTask, removeTask } = useContext(TaskContext);

  function handleEditTask() {
    editTask(id, {
      title: "taskEdited",
      description: "Lorem ipsum dolar si amet EDITED",
      dueDate: "99-99-9999",
      priority: 2,
    });
  }
  function handleRemoveTask() {
    removeTask(id);
  }

  return (
    <div className="border border-amber-500 bg-amber-500 hover:bg-amber-300">
      <p>ID: {id}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>dueDate: {dueDate}</p>
      <p>dueDate: {dueDate}</p>
      <p>priority: {priority}</p>
      <p>isCompleted: {isCompleted}</p>
      <div>
        <Button title={"Edit"} type={"button"} onClick={handleEditTask} />
        <Button title={"Remove"} type={"button"} onClick={handleRemoveTask} />
      </div>
    </div>
  );
}
