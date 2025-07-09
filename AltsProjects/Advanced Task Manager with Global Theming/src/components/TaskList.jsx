import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import Button from "./UI/Button";

import { Plus } from "lucide-react";

export default function TaskList() {
  const { allTasks, allTasksCount } = useContext(TaskContext);

  const [isDialog, setIsDialog] = useState(false);

  const listClasses = "flex gap-6";

  function handleToggleDialog() {
    setIsDialog((prev) => {
      return !prev;
    });
  }

  return (
    <section className={listClasses}>
      {isDialog && (
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
          <TaskForm onHandleCloseDialog={handleToggleDialog} />
        </div>
      )}
      <div class="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
        <div>
          <h2 class="text-3xl font-semibold">My Tasks</h2>
          <p>Stay organized and productive</p>
        </div>
        <div
          onClick={handleToggleDialog}
          className="flex gap-4 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 py-1 px-2 rounded-lg w-fit m-auto"
        >
          <button className="">Add New Task</button>
          <Plus className="h-4 w-4" />
        </div>
        {allTasksCount > 0 &&
          allTasks.map((task) => {
            return <TaskCard key={task.id} task={task} />;
          })}
      </div>
    </section>
  );
}
