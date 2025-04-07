import { useState } from "react";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

export default function App() {
  const [allTasks, setAllTasks] = useState([
    {
      id: Math.random(),
      title: "Task_0",
      description: "Description_0",
      dueDate: "1/1/1111",
      isCompleted: false,
    },
  ]);

  function handleAddTask(task) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList.push({ id: Math.random(), isCompleted: false, ...task });

      return updatedTasksList;
    });
  }

  function handleEditTask(taskID, newDetails) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList = updatedTasksList.map((task) => {
        return taskID === task.id ? { ...task, ...newDetails } : task;
      });

      return updatedTasksList;
    });
  }

  function handleRemoveTask(taskID) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList = updatedTasksList.filter((task) => {
        return taskID !== task.id;
      });

      return updatedTasksList;
    });
  }

  return (
    <section id="sec-gloria">
      <h2>Task app</h2>
      <NewTask onHandleNewTask={handleAddTask} />
      <TaskList
        allTasks={allTasks}
        onHandleEditTask={handleEditTask}
        onHandleRemoveTask={handleRemoveTask}
      />
    </section>
  );
}
