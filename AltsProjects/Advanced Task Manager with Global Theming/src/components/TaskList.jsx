import "./TaskList.css";

import NewTask from "./NewTask";
import TaskCard from "./UI/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskStatistics from "./TaskStatistics";

export default function TaskList({ onHandleToggleDialog }) {
  const { allTasks } = useContext(TaskContext);

  return (
    <section className="max-w-[100%] rounded-2xl border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-4 p-4">
        <div>
          <h1 className="mb-2 font-bold text-2xl text-white">My Tasks</h1>
          <p className="text-sm text-white/70">Stay organized and productive</p>
          <NewTask />
        </div>
        {allTasks.map((task) => {
          return <TaskCard key={task.id} task={task} onHandleCloseDialog={onHandleToggleDialog} />;
        })}
      </div>
      <TaskStatistics />
    </section>
  );
}
