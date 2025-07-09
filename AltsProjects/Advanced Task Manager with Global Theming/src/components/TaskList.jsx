import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import Button from "./UI/Button";

import { Plus } from "lucide-react";

export default function TaskList() {
  const { allTasks, allTasksCount, completedCount, waitingCount } = useContext(TaskContext);

  const [isDialog, setIsDialog] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  function handleToggleDialog(e, task) {
    if (e.currentTarget.dataset.choice) {
      setIsDialog(e.currentTarget.dataset.choice);
      setSelectedTask(task);
    } else {
      setIsDialog(false);
    }
  }

  console.log("isDialog");
  console.log(isDialog);

  return (
    <section className="flex gap-6">
      {isDialog === "add" && (
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
          <TaskForm onHandleCloseDialog={handleToggleDialog} buttonTitle="Add" />
        </div>
      )}
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
        <div>
          <h2 className="text-3xl font-semibold">My Tasks</h2>
          <p>Stay organized and productive</p>
        </div>
        <div
          onClick={handleToggleDialog}
          data-choice="add"
          className="flex gap-4 bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 py-1 px-2 rounded-lg w-fit m-auto"
        >
          <button className="">Add New Task</button>
          <Plus className="h-4 w-4" />
        </div>
        {allTasksCount > 0 &&
          allTasks.map((task) => {
            return <TaskCard key={task.id} task={task} onHandeToggleDialog={handleToggleDialog} />;
          })}
        <div className="flex gap-10 mt-4">
          <p className="text-sm">Tasks: {allTasksCount}</p>
          <p className="text-sm">Completed: {completedCount}</p>
          <p className="text-sm">Waiting: {waitingCount}</p>
        </div>
      </div>
      {isDialog === "edit" && (
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            buttonTitle="Edit"
            incomingTask={selectedTask}
          />
        </div>
      )}
      {isDialog === "remove" && (
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl shadow-2xl p-6 flex flex-col gap-3">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            buttonTitle="Remove"
            incomingTask={selectedTask}
          />
        </div>
      )}
    </section>
  );
}
