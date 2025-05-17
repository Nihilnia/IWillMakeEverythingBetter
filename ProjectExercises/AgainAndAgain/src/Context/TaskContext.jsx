import { createContext, useReducer } from "react";

export const TaskContext = createContext({
	allTasks: [],
	addTask: () => {},
	editTask: () => {},
	removeTask: () => {},
});

function taskReducer(state, action) {
	const { type, payload } = action;
	let updatedAllTasks = [...state];
	switch (type) {
		case "ADD_TASK": {
			const { newTask } = payload;
			updatedAllTasks.push({
				id: Math.random(),
				isCompleted: false,
				...newTask,
			});
			break;
		}

		case "EDIT_TASK": {
			const { taskID, newTaskDetails } = payload;
			updatedAllTasks = updatedAllTasks.map((task) => {
				return task.id === taskID ? { ...newTaskDetails } : task;
			});
			break;
		}

		case "REMOVE_TASK": {
			const { taskID } = payload;
			updatedAllTasks = updatedAllTasks.filter((task) => {
				return task.id !== taskID;
			});
		}
	}

	return updatedAllTasks;
}

export default function TaskContextProvider({ children }) {
	const [allTasks, dispatch] = useReducer(taskReducer, [
		{
			id: Math.random(),
			title: "Task_0",
			description: "Description_0",
			priority: 1,
			dueDate: "1111-11-11",
			isCompleted: false,
		},
		{
			id: Math.random(),
			title: "Task_1",
			description: "Description_1",
			priority: 2,
			dueDate: "2222-22-22",
			isCompleted: true,
		},
	]);

	function addTask(newTask) {
		dispatch({
			type: "ADD_TASK",
			payload: newTask,
		});
	}

	function editTask(taskID, newTaskDetails) {
		dispatch({
			type: "EDIT_TASK",
			payload: {
				taskID: taskID,
				newTaskDetails: newTaskDetails,
			},
		});
	}

	function removeTask(taskID) {
		dispatch({
			type: "REMOVE_TASK",
			payload: {
				taskID: taskID,
			},
		});
	}

	const ctxValues = {
		allTasks: allTasks,
		addTask: addTask,
		editTask: editTask,
		removeTask: removeTask,
	};

	return (
		<TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
	);
}
