import { useContext, useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import { TaskContext } from "../context/TaskContext";
import Button from "./UI/Button";

import { Pencil } from "lucide-react";
import { X } from "lucide-react";

export default function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const [openDialog, setOpenDialog] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleToggleDialog(e) {
    if (e) {
      setOpenDialog(e.currentTarget.dataset.iconName);
    } else {
      setOpenDialog(false);
    }
  }

  function handleRemoveTask() {
    removeTask(id);
    setOpenDialog(false);
  }

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="border border-gray-300 w-fit px-3 py-2 rounded bg-gray-200 text-black shadow-amber-200"
    >
      <h2>Title: {title}</h2>
      <h2>Description: {description}</h2>
      <h2>Due Date: {dueDate}</h2>
      <h2>Priority: {priority}</h2>
      <h2>Status: {isCompleted ? "Completed" : "Waiting to complete"}</h2>

      {isHover && (
        <div className="flex flex-row gap-4 justify-end items-center ">
          <X onClick={handleToggleDialog} size={20} data-icon-name="remove" />
          <Pencil onClick={handleToggleDialog} size={15} data-icon-name="edit" />
        </div>
      )}

      {openDialog && (
        <Dialog onHandleCloseDialog={handleToggleDialog}>
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
