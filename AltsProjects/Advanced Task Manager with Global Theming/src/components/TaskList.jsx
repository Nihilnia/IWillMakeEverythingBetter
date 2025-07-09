import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

export default function TaskList() {
  const { allTasks, allTasksCount, addTask } = useContext(TaskContext);

  function handleAddNewTask() {
    const newTask = {
      title: "Title_0",
      description: "Desc_0",
      priority: "Pri_0",
      dueDate: "date_0",
    };

    addTask(newTask);
  }

  return (
    <section>
      {allTasksCount === 0 && (
        <button type="button" onClick={handleAddNewTask}>
          Add New Task
        </button>
      )}
      {allTasksCount > 0 &&
        allTasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
    </section>
  );
}
