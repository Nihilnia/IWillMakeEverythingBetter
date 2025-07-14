import { useContext } from "react";

import { Trash2, Pencil } from "lucide-react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskCard({ task }) {
  const { id, title, isCompleted } = task;
  const { editTask, handleSetDialog } = useContext(TaskContext);

  function handleClick(e) {
    handleSetDialog(e, task);
  }

  function handleToggleCompleted() {
    editTask(id, {
      ...task,
      isCompleted: !task.isCompleted,
    });
  }

  return (
    <div className="rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-4 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter ">
      <div className="flex items-center justify-between gap-x-2">
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={handleToggleCompleted}
            className="h-4 w-4 cursor-pointer appearance-none rounded-sm border border-amber-50 checked:border-transparent checked:bg-amber-50 focus:outline-none"
          />
          <p
            className={`hover:cursor-pointer ${isCompleted && "line-through"}`}
            onClick={handleToggleCompleted}
          >
            {title}
          </p>
        </div>

        <div className="flex gap-x-1">
          <Pencil
            data-op-name="EDIT_TASK"
            onClick={handleClick}
            className="h-4 w-4 cursor-pointer"
          />
          <Trash2
            data-op-name="REMOVE_TASK"
            onClick={handleClick}
            className="h-4 w-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
