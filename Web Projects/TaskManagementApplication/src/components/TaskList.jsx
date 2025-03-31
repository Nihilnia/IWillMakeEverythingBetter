import { useContext } from "react";
import { TaskContext } from "../context/TasksContext";

export default function TaskList() {
  const allTasks = useContext(TaskContext);

  const render = allTasks.userTasks.map((task) => {
    return (
      <div key={task.id}>
        ID: {task.id}
        Ttitle: {task.title}
        Description: {task.description}
        dueDate: {task.dueDate}
        Category: {task.category}
      </div>
    );
  });

  return <>{render}</>;
}
