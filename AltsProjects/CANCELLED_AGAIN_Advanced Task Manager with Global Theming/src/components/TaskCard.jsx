import { useContext, useState } from "react";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import { TaskContext } from "../context/TaskContext";
import Button from "./UI/Button";

import { Trash, Edit3 } from "lucide-react";

export default function TaskCard({ task, onHandeToggleDialog }) {
  const { removeTask } = useContext(TaskContext);
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const [isHover, setIsHover] = useState(false);

  function handleToggleDialog(e) {
    onHandeToggleDialog(e, task);
  }

  return (
    <div
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      className="items-center p-3 gap-20 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200"
    >
      <div className="flex flex-row gap-5 items-center">
        <div className="flex flex-row gap-3 items-center">
          <input
            type="checkbox"
            className="appearance-none bg-transparent border border-white/30 checked:bg-blue-500 checked:border-blue-500 rounded-sm w-4 h-4 text-white focus:ring-blue-500 focus:ring-2"
          />
          <p>{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <Trash
            className="h-4 w-4 transform translate-y-[-0.5px]"
            data-choice="remove"
            onClick={handleToggleDialog}
          />
          <Edit3 className="h-4 w-4" data-choice="edit" onClick={handleToggleDialog} />
        </div>
      </div>
      {/* Details */}
      {isHover && (
        <div>
          <p className="text-sm">{description}</p>
          <p className="text-sm">{dueDate}</p>
          <p className="text-sm">{priority}</p>
        </div>
      )}
    </div>
  );
}
