import "./TaskList.css";

import NewTask from "./NewTask";
import TaskCard from "./UI/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskStatistics from "./TaskStatistics";

export default function TaskList() {
  const { allTasks, handleSetDialog } = useContext(TaskContext);

  return (
    <section className="max-w-[100%] rounded-2xl border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-4 p-4">
        <div>
          <h1 className="mb-2 font-bold text-2xl text-white">My Tasks</h1>
          <p className="text-sm text-white/70">Stay organized and productive</p>
          <NewTask />
        </div>
        {allTasks.map((task) => {
          return <TaskCard key={task.id} task={task} onHandleCloseDialog={handleSetDialog} />;
        })}
        {!localStorage.getItem("myTasks") && (
          <div className="text-center text-xs text-amber-50 opacity-70">
            <p>This tasks are for the demo purposes only.</p>
            <p>You can edit or remove them.</p>
            <p>After adding your first task they will disappear.</p>
          </div>
        )}
      </div>
      <TaskStatistics />
    </section>
  );
}
