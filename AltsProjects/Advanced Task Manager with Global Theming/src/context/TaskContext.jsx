import { createContext, useReducer } from "react";

export const TaskContext = createContext({
  allTasks: [],
  addTask: () => {},
  removeTask: () => {},
  editTask: () => {},
});

function TaskCRUDReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK": {
      const newTask = { ...payload.newTask, id: Math.random, isCompleted: false };
      return [...state, newTask];
    }

    case "REMOVE_TASK": {
      const { id } = payload;
      const shallowCopy = state.filter((task) => {
        return task.id !== id;
      });
      return shallowCopy;
    }

    case "EDIT_TASK": {
      const { id, newDetails } = payload;

      const foundTask = state.filter((task) => {
        return task.id === id;
      });

      const taskWithNewDetails = {
        ...foundTask,
        ...newDetails,
      };

      const shallowCopy = state.map((task) => {
        return task.id === id ? taskWithNewDetails : task;
      });

      return shallowCopy;
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [allTasks, dispatch] = useReducer(TaskCRUDReducer, [
    {
      id: Math.random(),
      title: "titleZero",
      description: "descZero",
      dueDate: "00/00/0000",
      priority: 0,
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "titleOne",
      description: "descOne",
      dueDate: "12/25/2024",
      priority: 1,
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "titleTwo",
      description: "descTwo",
      dueDate: "01/15/2025",
      priority: 2,
      isCompleted: true,
    },
    {
      id: Math.random(),
      title: "titleThree",
      description: "descThree",
      dueDate: "03/01/2025",
      priority: 3,
      isCompleted: false,
    },
  ]);

  function addTask(newTask) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        newTask,
      },
    });
  }

  function editTask(id, newDetails) {
    dispatch({
      type: "EDIT_TASK",
      payload: {
        id,
        newDetails,
      },
    });
  }

  function removeTask(id) {
    dispatch({
      type: "REMOVE_TASK",
      payload: {
        id,
      },
    });
  }

  const ctxValues = {
    allTasks,
    addTask,
    editTask,
    removeTask,
  };

  return <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>;
}
