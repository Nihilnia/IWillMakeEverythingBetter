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
        return task.id === taskID ? { ...task, ...newTaskDetails } : task;
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
      title: "Water the plants",
      description: "Remember to water all indoor and outdoor plants, especially the basil.",
      dueDate: "2025-07-10",
      priority: "low",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Prepare dinner",
      description: "Plan for a quick and healthy meal, perhaps pasta with vegetables.",
      dueDate: "2025-07-10",
      priority: "medium",
      isCompleted: false,
    },
    {
      id: Math.random(),
      title: "Check emails",
      description: "Go through work and personal emails. Respond to urgent ones.",
      dueDate: "2025-07-10",
      priority: "high",
      isCompleted: true,
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

  console.log("allTasks");
  console.log(allTasks);

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
