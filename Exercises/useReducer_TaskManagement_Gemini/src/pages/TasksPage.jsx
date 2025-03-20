import { useReducer } from "react";

import TasksList from "../components/TasksList";
import NewTask from "../components/NewTask";

function tasksReducer(state, action) {
  const { type, payload } = action;
  const { id, name } = payload;
  switch (type) {
    case "ADD_TASK":
      return [...state, { id: id, name: name, completed: false }];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== id);

    default:
      return state;
  }
}

export default function TasksPage() {
  const [allTasks, dispatch] = useReducer(tasksReducer, []);

  function handleNewTask(title) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Math.random(),
        name: title,
      },
    });
  }

  function handleRemoveTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: { id: id },
    });
  }

  function handleToggle(id) {
    dispatch({
      type: "TOGGLE_TASK",
      payload: { id: id },
    });
  }

  return (
    <section className="flex flex-col items-center">
      <NewTask onAddTask={handleNewTask} />
      {allTasks.length > 0 && (
        <TasksList
          tasks={allTasks}
          onRemoveTask={handleRemoveTask}
          onToggleTask={handleToggle}
        />
      )}
    </section>
  );
}
