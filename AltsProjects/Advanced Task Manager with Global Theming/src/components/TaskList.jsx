import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { allTasks } = useContext(TaskContext);

  return (
    <section className="flex flex-row gap-4">
      {allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </section>
  );
}
