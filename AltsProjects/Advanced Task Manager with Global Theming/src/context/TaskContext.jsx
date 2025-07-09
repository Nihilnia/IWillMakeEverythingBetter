import { createContext, useReducer } from "react";

export const TaskContext = createContext({
  allTasks: [],
  addTask: () => {},
  editTask: () => {},
  removeTask: () => {},
  allTasksCount: 0,
});

function TaskCRUDReducer(state, action) {
  const { type, payload } = action;
  const { taskID, newTask, newDetails } = payload;

  switch (type) {
    case "ADD_TASK": {
      const newTaskToAdd = {
        id: Math.random(),
        isCompleted: false,
        ...newTask,
      };

      return [...state, newTaskToAdd];
    }

    case "EDIT_TASK": {
      return state.map((task) => {
        return task.id === taskID ? { id: taskID, ...newDetails } : task;
      });
    }

    case "REMOVE_TASK": {
      return state.filter((task) => {
        task.id !== taskID;
      });
    }
  }
}

export default function TaskContextProvider({ children }) {
  const [allTasks, dispatch] = useReducer(TaskCRUDReducer, []);

  function addTask(newTask) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        newTask,
      },
    });
  }

  function editTask(taskID, newDetails) {
    dispatch({
      type: "ADD_TASK",
      payload: {
        taskID,
        newDetails,
      },
    });
  }

  function removeTask(taskID) {
    dispatch({
      type: "ADD_TASK",
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
  };

  return <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>;
}
