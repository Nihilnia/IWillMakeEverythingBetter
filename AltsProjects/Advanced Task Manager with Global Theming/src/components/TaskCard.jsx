import { useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";

export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const [isDialog, setIsDialog] = useState(false);

  function handleToggleDialog() {
    setIsDialog((prev) => {
      return !prev;
    });
  }

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>description: {description}</h2>
      <h2>dueDate: {dueDate}</h2>
      <h2>priority: {priority}</h2>
      <h2>isCompleted: {isCompleted ? "y" : "n"}</h2>
      <button onClick={handleToggleDialog} type="button">
        Remove
      </button>
      <button onClick={handleToggleDialog} type="button">
        Edit
      </button>
      {isDialog && (
        <Dialog>
          <TaskForm
            incomingTask={task}
            buttonTitle={"Update Task"}
            onHandleCloseDialog={handleToggleDialog}
          />
        </Dialog>
      )}
    </div>
  );
}
