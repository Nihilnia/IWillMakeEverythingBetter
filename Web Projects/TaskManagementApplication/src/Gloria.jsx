import { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);

  console.log("allTasks");
  console.log(allTasks);

  function handleTaskOps(op, task, editedTask) {
    switch (op) {
      case "NEW_TASK":
        setAllTasks((prev) => {
          let updatedAllTasks = [...prev];

          updatedAllTasks.push(task);

          return updatedAllTasks;
        });
        break;

      case "EDIT_TASK":
        setAllTasks((prev) => {
          let updatedAllTasks = [...prev];

          updatedAllTasks = updatedAllTasks.map((f) => {
            if (f.id === task.id) {
              return {
                ...f,
                title: editedTask.title,
                category: editedTask.category,
                dueDate: editedTask.dueDate,
              };
            } else {
              return f;
            }
          });

          return updatedAllTasks;
        });
    }
  }

  return (
    <section id="sec-app">
      <NewTask onAddTask={handleTaskOps} />
      <TaskList userTasks={allTasks} onEditTask={handleTaskOps} />
    </section>
  );
}
