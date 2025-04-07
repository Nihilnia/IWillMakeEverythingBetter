import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";
import NotificationUI from "./components/UI/NotificationUI";

export default function App() {
  const [allTasks, setAllTasks] = useState([
    {
      id: Math.random(),
      title: "Task_0",
      description: "Description_0",
      dueDate: "1/1/1111",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Task_1",
      description: "Description_1",
      dueDate: "2/2/2222",
      isCompleted: true,
    },
  ]);

  const [isTasksUpdated, setIsTasksUpdated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTasksUpdated(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isTasksUpdated]);

  function handleAddTask(task) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList.push({ id: Math.random(), isCompleted: false, ...task });

      return updatedTasksList;
    });

    setIsTasksUpdated("New task added.");
  }

  function handleEditTask(taskID, newDetails) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList = updatedTasksList.map((task) => {
        return taskID === task.id ? { ...task, ...newDetails } : task;
      });

      return updatedTasksList;
    });

    setIsTasksUpdated("Task edited.");
  }

  function handleRemoveTask(taskID) {
    setAllTasks((prev) => {
      let updatedTasksList = [...prev];

      updatedTasksList = updatedTasksList.filter((task) => {
        return taskID !== task.id;
      });

      return updatedTasksList;
    });

    setIsTasksUpdated("Task removed.");
  }

  return (
    <section id="sec-gloria">
      <NewTask onHandleNewTask={handleAddTask} />
      <TaskList
        allTasks={allTasks}
        onHandleEditTask={handleEditTask}
        onHandleRemoveTask={handleRemoveTask}
      />
      {isTasksUpdated && <NotificationUI message={isTasksUpdated} />}
    </section>
  );
}
