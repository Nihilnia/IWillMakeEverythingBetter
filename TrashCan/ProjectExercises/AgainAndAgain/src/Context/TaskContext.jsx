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
				createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
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
			id: Math.random().toString(),
			title: "Title_0",
			description: "Description_0",
			priority: 0,
			//0 "low" |1 "medium" |2 "high",
			category: "programming",
			isCompleted: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "1111-11-11",
		},
		{
			id: Math.random().toString(),
			title: "Title_1",
			description: "Description_1",
			priority: 1,
			category: "programming",
			isCompleted: true,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "2222-22-22",
		},
		{
			id: Math.random().toString(),
			title: "Title_2",
			description: "Description_2",
			priority: 2,
			category: "programming",
			isCompleted: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "3333-33-33",
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
