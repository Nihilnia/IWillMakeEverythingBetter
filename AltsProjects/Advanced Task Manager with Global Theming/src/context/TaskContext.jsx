import { createContext, useReducer } from "react";

export const TaskContext = createContext({
    allTasks: [],
    addTask: () => {},
    editTask: () => {},
    removeTask: () => {},
    allTasksCount: 0,
    completedTasksCount: 0,
    waitingTasksCount: 0
})


export default function TaskContextProvider({children}){
    const [allTasks, dispatch] = useReducer(TaskCRUDReducer, []);

    function addTask(newTaskDetails){
        dispatch({
            type: 'ADD_TASK',
            payload: {
                newTaskDetails
            }
        })
    }

    function editTask(taskID, newTaskDetails){
        dispatch({
            type: 'EDIT_TASK',
            payload: {
                taskID,
                newTaskDetails
            }
        })
    }

    function removeTask(taskID){
        dispatch({
            type: 'REMOVE_TASK',
            payload:{
                taskID
            }
        })
    }


    const ctxValues = {
        allTasks,
        addTask,
        editTask,
        removeTask,
        allTasksCount: allTasks.length,
        completedTasksCount: allTasks.reduce((accumulator, currentItem) => {
            return currentItem.isCompleted
            ? accumulator + 1
            : accumulator
        }, 0),
        waitingTasksCount: allTasks.reduce((accumulator, currentItem) => {
            return !currentItem.isCompleted
            ? accumulator + 1
            : accumulator
        }, 0)
    }

    return <TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
}