import { createContext, useReducer } from "react";

export const TaskContext = createContext({
  userTasks: [],
  handleNewTask: () => {},
  handleEditTask: () => {},
  handleRemoveTask: () => {},
});

function tasksReducer(state, action) {
  const { type, payload } = action;

  let updatedState = [...state];

  switch (type) {
    case "ADD_TASK":
      const { title, description, dueDate, category } = payload;
      updatedState.push({
        id: Math.random(),
        title: title,
        description: description,
        dueDate: dueDate,
        category: category,
      });
      return updatedState;

    case "EDIT_TASK":
      updatedState = updatedState.map((f) => {
        return f.id === payload.id ? [...payload] : f;
      });
      return updatedState;

    case "REMOVE_TASK":
      updatedState = updatedState.filter((f) => f.id !== payload.id);
      return updatedState;

    default:
      return updatedState;
  }
}

export function TaskContextProvider({ children }) {
  const [allTasks, dispatch] = useReducer(tasksReducer, [
    {
      id: 345345345,
      title: "ABC",
      description: "DEF",
      dueDate: "FSDGF",
      Category: "category",
    },
  ]);

  function handleNewTask(task) {
    const { title, description, dueDate, category } = task;

    dispatch({
      type: "ADD_TASK",
      payload: {
        title: title,
        description: description,
        dueDate: dueDate,
        category: category,
      },
    });
  }

  function handleEditTask(id, newDetails) {
    const { title, description, dueData, category } = newDetails;

    dispatch({
      type: "EDIT_TASK",
      payload: {
        id: id,
        title: title,
        description: description,
        dueData: dueData,
        category: category,
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
    userTasks: allTasks,
    handleNewTask: handleNewTask,
    handleEditTask: handleEditTask,
    handleRemoveTask: handleRemoveTask,
  };

  return (
    <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
  );
}
