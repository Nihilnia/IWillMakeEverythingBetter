import { createContext, useReducer, useState } from "react";

export const TaskContext = createContext({
  allTasks: [],
  handleNewTask: () => {},
  handleEditTask: () => {},
  handleRemoveTask: () => {},
});

function taskReducer(state, action) {
  const { type, payload } = action;

  let updatedAllTasks = [...state];

  switch (type) {
    case "NEW_TASK":
      updatedAllTasks.push(payload.newTask);
      break;

    case "EDIT_TASK":
      updatedAllTasks = updatedAllTasks.map((task) => {
        return task.id === payload.id ? { ...payload.editedTask } : task;
      });
      break;

    case "REMOVE_TASK":
      updatedAllTasks = updatedAllTasks.filter((task) => {
        return task.id !== payload.id;
      });
      break;
  }

  return updatedAllTasks;
}

export default function TaskContextProvider({ children }) {
  const [allTasks, dispatch] = useReducer(taskReducer, [
    {
      id: Math.random(),
      title: "Task_01",
      description: "Description_01",
      dueDate: "1-1-1111",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Task_02",
      description: "Description_02",
      dueDate: "2-2-2222",
      isCompleted: true,
    },
  ]);

  function handleNewTask(newTask) {
    dispatch({
      type: "NEW_TASK",
      payload: {
        newTask: newTask,
      },
    });
  }

  function handleEditTask(id, editedTask) {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: id,
        editedTask: editedTask,
      },
    });
  }

  function handleRemoveTask(id) {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        id: id,
      },
    });
  }

  const ctxValues = {
    allTasks: allTasks,
    handleNewTask: handleNewTask,
    handleEditTask: handleEditTask,
    handleRemoveTask: handleRemoveTask,
  };

  return (
    <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
  );
}
