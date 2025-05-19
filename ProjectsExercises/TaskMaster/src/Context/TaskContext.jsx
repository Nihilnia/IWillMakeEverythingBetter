import { useContext, useReducer } from "react";

export const TaskContext = useContext({
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
				completed: false,
				createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
				...newTask,
			});
			break;
		}

		case "EDIT_TASK": {
			const { taskID, newTaskDetails } = payload;
			updatedState = updatedState.map((task) => {
				return task.id === taskID ? { ...newTaskDetails } : task;
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
			priority: 0,
			//0 'low' |1 'medium' |2 'high'
			category: "programming",
			completed: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "1111-11-11",
		},
		{
			id: Math.random().toString(),
			title: "Task_1",
			description: "Description_1",
			priority: 2,
			//0 'low' |1 'medium' |2 'high'
			category: "programming",
			completed: true,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "2222-22-22",
		},
		{
			id: Math.random().toString(),
			title: "Task_2",
			description: "Description_1",
			priority: 3,
			//0 'low' |1 'medium' |2 'high'
			category: "programming",
			completed: false,
			createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
			dueDate: "3333-33-33",
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
