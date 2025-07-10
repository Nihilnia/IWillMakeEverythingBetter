import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./UI/TaskCard";
import Button from "./UI/Button";

export default function TaskList() {
  const { allTasks, addTask } = useContext(TaskContext);

  function handleAddTask() {
    addTask({
      title: `task${Math.random()}`,
      description: "Lorem ipsum dolar si amet",
      dueDate: "44-55-6666",
      priority: 2,
    });
  }

  return (
    <section>
      <div className="flex flex-row">
        {allTasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
      <div>
        <Button type={"button"} title={"add"} onClick={handleAddTask} />
      </div>
    </section>
  );
}
