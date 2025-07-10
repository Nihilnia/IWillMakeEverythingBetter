import { useState } from "react";
import Button from "./Button";

import { Trash2, Pencil } from "lucide-react";

export default function TaskCard({ task, onHandleCloseDialog }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;

  const [isHover, setIsHover] = useState(false);

  function handleClick(e) {
    onHandleCloseDialog(e, task);
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
            defaultChecked={isCompleted}
            className="appearance-none border border-amber-50 rounded-sm w-4 h-4 checked:bg-blue-500 checked:border-transparent focus:outline-none"
          />
          <p className={isCompleted && "line-through"}>{title}</p>
        </div>

        <div className="flex gap-x-1">
          <Pencil data-op-name="EDIT_TASK" onClick={handleClick} className="h-4 w-4" />
          <Trash2 data-op-name="REMOVE_TASK" onClick={handleClick} className="h-4 w-4" />
        </div>
      </div>
      {isHover && (
        <div>
          <p>{description}</p>
          <p>{dueDate}</p>
          <p>{priority}</p>
          <p>{isCompleted}</p>
        </div>
      )}
    </div>
  );
}
