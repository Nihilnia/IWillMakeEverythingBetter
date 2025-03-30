import { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import FilterBy from "./components/FilterBy";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);

  function handleTaskOps(op, task, editedTask, selectedCategory) {
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
        break;

      case "REMOVE_TASK":
        setAllTasks((prev) => {
          let updatedAllTasks = [...prev];

          updatedAllTasks = updatedAllTasks.filter((f) => f.id !== task.id);

          return updatedAllTasks;
        });
        break;
    }
  }

  function handleFilterTasks(selectedCategory) {
    setFilteredResult((prev) => {
      let updatedFilteredResult = [...prev];

      updatedFilteredResult = allTasks.filter(
        (f) => f.category === selectedCategory
      );

      return updatedFilteredResult;
    });
  }

  return (
    <section id="sec-app">
      <FilterBy
        categories={allTasks.map((f) => f.category)}
        onFilterTasks={handleFilterTasks}
      />
      <NewTask onAddTask={handleTaskOps} />
      <TaskList
        userTasks={filteredResult.length !== 0 ? filteredResult : allTasks}
        onEditTask={handleTaskOps}
      />
    </section>
  );
}
