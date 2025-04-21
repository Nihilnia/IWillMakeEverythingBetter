import { useContext, useReducer } from "react";

export const TaskContext = useContext({
	allTasks: [],
	handleNewTask: () => {},
	handleEditTask: () => {},
	handleRemoveTask: () => {},
});

function taskReducer(state, action) {
	const { type, payload } = action;

	let updatedTaskList = [...state];

	switch (type) {
		case "ADD_TASKS":
			const { id, newTaskData } = payload;
			updatedTaskList.push({
				id: id,
				isCompleted: false,
				isActive: true,
				...newTaskData,
			});
			break;

		case "EDIT_TASK":
			const { id, editedTaskData } = payload;
			updatedTaskList = updatedTaskList.map((task) => {
				return task.id === id ? { id: id, ...editedTaskData } : task;
			});
			break;

		case "REMOVE_TASK":
			const { id } = payload;
			updatedTaskList = updatedTaskList.filter((task) => task.id !== id);
			break;

		default:
			return updatedTaskList;
	}
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
			isCompleted: false,
			isActive: true,
		},
	]);

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
