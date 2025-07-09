import { useContext, useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import { TaskContext } from "../context/TaskContext";
import Button from "./UI/Button";

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
    <div className="border border-amber-300 w-fit px-3 py-2 rounded">
      <h2>Title: {title}</h2>
      <h2>Description: {description}</h2>
      <h2>Due Date: {dueDate}</h2>
      <h2>Priority: {priority}</h2>
      <h2>Status: {isCompleted ? "Completed" : "Waiting to complete"}</h2>
      <Button onClick={handleToggleDialog} type="button" name="remove">
        Remove
      </Button>
      <Button onClick={handleToggleDialog} type="button" name="edit">
        Edit
      </Button>
      {openDialog && (
        <Dialog>
          {openDialog === "remove" ? (
            <div>
              <h2>Are you sure?</h2>
              <Button type="button" onClick={handleRemoveTask}>
                Yes
              </Button>
              <Button type="button" onClick={handleToggleDialog}>
                Cancel
              </Button>
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
