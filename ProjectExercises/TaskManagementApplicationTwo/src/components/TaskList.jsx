import { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const ctxValues = useContext(TaskContext);
  const { allTasks } = ctxValues;

  return (
    <section className="grid">
      {allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </section>
  );
}
