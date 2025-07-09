import { useContext, useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const [openDialog, setOpenDialog] = useState(false);

  function handleToggleDialog(e) {
    if (e.target.name) {
      setOpenDialog(e.target.name);
    } else {
      setOpenDialog(false);
    }
  }

  function handleRemoveTask() {
    removeTask(id);
    setOpenDialog(false);
  }

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>description: {description}</h2>
      <h2>dueDate: {dueDate}</h2>
      <h2>priority: {priority}</h2>
      <h2>isCompleted: {isCompleted ? "y" : "n"}</h2>
      <button onClick={handleToggleDialog} type="button" name="remove">
        Remove
      </button>
      <button onClick={handleToggleDialog} type="button" name="edit">
        Edit
      </button>
      {openDialog && (
        <Dialog>
          {openDialog === "remove" ? (
            <div>
              <h2>Are you sure?</h2>
              <button type="button" onClick={handleRemoveTask}>
                Yes
              </button>
              <button type="button" onClick={handleToggleDialog}>
                Cancel
              </button>
            </div>
          ) : (
            <TaskForm
              incomingTask={task}
              buttonTitle={"Update Task"}
              onHandleCloseDialog={handleToggleDialog}
            />
          )}
        </Dialog>
      )}
    </div>
  );
}
