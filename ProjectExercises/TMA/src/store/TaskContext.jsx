import { createContext, useReducer } from "react";

export const TaskContext = createContext({
	allTasks: [],
	handleNewTask: () => {},
	handleEditTask: () => {},
	handleRemoveTask: () => {},
});

function taskReducer(state, action) {
	const { type, payload } = action;
	const { id, newTaskData, editedTaskData } = payload;

	let updatedTaskList = [...state];

	switch (type) {
		case "ADD_TASK":
			console.log("asdasd");
			updatedTaskList.push({
				id: id,
				isCompleted: false,
				isActive: true,
				...newTaskData,
			});
			break;

		case "EDIT_TASK":
			updatedTaskList = updatedTaskList.map((task) => {
				return task.id === id ? { id: id, ...editedTaskData } : task;
			});
			break;

		case "REMOVE_TASK":
			updatedTaskList = updatedTaskList.filter((task) => task.id !== id);
			break;

		default:
			return updatedTaskList;
	}

	return updatedTaskList;
}

export default function TaskContextProvider({ children }) {
	const [allTasks, dispatch] = useReducer(taskReducer, [
		{
			id: Math.random(),
			title: "Task_01",
			description: "Description_01",
			dueDate: "1111-1-1",
			isCompleted: false,
			isActive: true,
		},
		{
			id: Math.random(),
			title: "Task_02",
			description: "Description_02",
			dueDate: "2222-2-2",
			isCompleted: true,
			isActive: true,
		},
	]);

	console.log("allTasks");
	console.log(allTasks);

	function handleNewTask(task) {
		dispatch({
			type: "ADD_TASK",
			payload: {
				id: Math.random(),
				newTaskData: task,
			},
		});
	}

	function handleEditTask(taskID, newTaskData) {
		dispatch({
			type: "EDIT_TASK",
			payload: {
				id: taskID,
				editedTaskData: newTaskData,
			},
		});
	}

	function handleRemoveTask(taskID) {
		dispatch({
			type: "REMOVE_TASK",
			payload: {
				id: taskID,
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
