import { useContext } from "react";

import { Trash2, Pencil } from "lucide-react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task, onHandleCloseDialog }) {
  const { id, title, isCompleted } = task;
  const { editTask } = useContext(TaskContext);

  function handleClick(e) {
    onHandleCloseDialog(e, task);
  }

  function handleToggleCompleted() {
    editTask(id, {
      ...task,
      isCompleted: !task.isCompleted,
    });
  }

  return (
    <div
      className="bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-4 text-amber-50
    "
    >
      <div className="flex justify-between gap-x-2 items-center">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggleCompleted}
            className="appearance-none border border-amber-50 rounded-sm w-4 h-4 checked:bg-blue-500 checked:border-transparent focus:outline-none"
          />
          <p
            className={`hover:cursor-pointer ${isCompleted && "line-through"}`}
            onClick={handleToggleCompleted}
          >
            {title}
          </p>
        </div>

        <div className="flex gap-x-1">
          <Pencil data-op-name="EDIT_TASK" onClick={handleClick} className="h-4 w-4" />
          <Trash2 data-op-name="REMOVE_TASK" onClick={handleClick} className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
