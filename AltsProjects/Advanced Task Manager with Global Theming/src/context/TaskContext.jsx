import { createContext, useReducer } from "react";

export const TaskContext = createContext({
  allTasks: [],
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
  allTasksCount: 0,
  completedTasksCount: 0,
  waitingTasksCount: 0,
});

function TaskCRUDReducer(state, action) {
  const { type, payload } = action;
  const { taskID, newTaskDetails } = payload;

  switch (type) {
    case "ADD_TASK": {
      return [...state, { id: Math.random(), isCompleted: false, ...newTaskDetails }];
    }

    case "EDIT_TASK": {
      return state.map((task) => {
        return task.id === taskID ? { id: taskID, ...newTaskDetails } : task;
      });
    }

    case "REMOVE_TASK": {
      return state.filter((task) => {
        return task.id !== taskID;
      });
    }

    default: {
      return state;
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [allTasks, dispatch] = useReducer(TaskCRUDReducer, [
    {
      id: Math.random(),
      title: "taskZero",
      description: "Lorem ipsum dolar si amet",
      dueDate: "11-22-3333",
      priority: 1,
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "taskOne",
      description: "Lorem ipsum dolar si amet",
      dueDate: "22-33-4444",
      priority: 2,
      isCompleted: true,
    },
    {
      id: Math.random(),
      title: "taskTwo",
      description: "Lorem ipsum dolar si amet",
      dueDate: "33-44-5555",
      priority: 3,
      isCompleted: false,
    },
  ]);

  function addTask(newTaskDetails) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        newTaskDetails,
      },
    });
  }

  function editTask(taskID, newTaskDetails) {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        taskID,
        newTaskDetails,
      },
    });
  }

  function removeTask(taskID) {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        taskID,
      },
    });
  }

  const ctxValues = {
    allTasks,
    addTask,
    editTask,
    removeTask,
    allTasksCount: allTasks.length,
    completedTasksCount: allTasks.reduce((accumulator, currentItem) => {
      return currentItem.isCompleted ? accumulator + 1 : accumulator;
    }, 0),
    waitingTasksCount: allTasks.reduce((accumulator, currentItem) => {
      return !currentItem.isCompleted ? accumulator + 1 : accumulator;
    }, 0),
  };

  return <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>;
}
