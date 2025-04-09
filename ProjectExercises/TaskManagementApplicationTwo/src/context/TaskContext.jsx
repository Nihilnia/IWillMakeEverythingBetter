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
    {
      id: Math.random(),
      title: "Task_03",
      description: "Description_03",
      dueDate: "3-3-3333",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Task_04",
      description: "Description_04",
      dueDate: "4-4-4444",
      isCompleted: true,
    },
    {
      id: Math.random(),
      title: "Task_05",
      description: "Description_05",
      dueDate: "5-5-5555",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Task_06",
      description: "Description_06",
      dueDate: "6-6-6666",
      isCompleted: true,
    },
    {
      id: Math.random(),
      title: "Task_07",
      description: "Description_07",
      dueDate: "7-7-7777",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Task_08",
      description: "Description_08",
      dueDate: "8-8-8888",
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
