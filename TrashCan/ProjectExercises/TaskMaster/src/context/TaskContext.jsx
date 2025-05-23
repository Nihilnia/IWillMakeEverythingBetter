import { createContext, useReducer } from "react";

export const TaskContext = createContext({
	allTasks: [],
	addTask: () => {},
	editTask: () => {},
	removeTask: () => {},
});

function TaskReducer(state, action) {
	const { type, payload } = action;

	let updatedState = [...state];

	switch (type) {
		case "ADD_TASK": {
			const { newTask } = payload;
			updatedState.push({
				id: Math.random().toString(),
				isCompleted: false,
				createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
				...newTask,
			});
			break;
		}

		case "EDIT_TASK": {
			const { taskID, newTaskDetails } = payload;
			updatedState = updatedState.map((task) => {
				return task.id === taskID ? { id: taskID, ...newTaskDetails } : task;
			});
			break;
		}

		case "REMOVE_TASK": {
			const { taskID } = payload;
			updatedState = updatedState.filter((task) => {
				return task.id !== taskID;
			});
		}
	}

	return updatedState;
}

export default function TaskContextProvider({ children }) {
	const [allTasks, dispatch] = useReducer(TaskReducer, [
		{
			id: Math.random().toString(),
			title: "Task_0",
			description: "Description_0",
			priority: "low",
			category: "programming",
			isCompleted: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "1111-11-11",
		},
		{
			id: Math.random().toString(),
			title: "Task_1",
			description: "Description_1",
			priority: "medium",
			category: "movie",
			isCompleted: true,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "1111-11-11",
		},
		{
			id: Math.random().toString(),
			title: "Task_2",
			description: "Description_1",
			priority: "high",
			category: "gaming",
			isCompleted: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "1111-11-11",
		},
	]);

	function addTask(newTask) {
		dispatch({
			type: "ADD_TASK",
			payload: {
				newTask: newTask,
			},
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
