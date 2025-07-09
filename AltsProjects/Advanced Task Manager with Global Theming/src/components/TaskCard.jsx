import { useContext, useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import { TaskContext } from "../context/TaskContext";
import Button from "./UI/Button";

import { Trash2 } from "lucide-react";

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
      className="flex flex-row items-center p-3 gap-20 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200"
    >
      <div className="flex flex-row gap-3 items-center">
        <input
          type="checkbox"
          className="appearance-none bg-transparent border border-white/30 checked:bg-blue-500 checked:border-blue-500 rounded-sm w-4 h-4 text-white focus:ring-blue-500 focus:ring-2"
        />
        <p>{title}</p>
      </div>
      <div>
        <Trash2 className="h-4 w-4" />
      </div>

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
