import { createContext, useReducer } from "react";

export const TaskContext = createContext({
	allTasks: [],
	addNewTask: () => {},
	editTask: () => {},
	removeTask: () => {},
});

function taskReducer(state, action) {
	const { type, payload } = action;

	let updatedTaskList = [...state];

	const { taskID, newTaskDetails, editedTaskDetails } = payload;

	switch (type) {
		case "ADD_TASK":
			updatedTaskList.push({
				id: Math.random(),
				isCompleted: false,
				isActive: true,
				...newTaskDetails,
			});
			break;

		case "EDIT_TASK":
			console.log("asdas");
			updatedTaskList = updatedTaskList.map((task) => {
				return task.id === taskID
					? { id: taskID, ...task, ...editedTaskDetails }
					: task;
			});
			break;

		//Change this as isActive false
		case "REMOVE_TASK":
			// updatedTaskList = updatedTaskList.filter((task) => task.id !== taskID);
			updatedTaskList = updatedTaskList.map((task) => {
				return task.id === taskID ? { ...task, isActive: false } : task;
			});
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
			title: "Task_0",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illo sed perspiciatis aliquam consequatur odio vero blanditiis exercitationem distinctio fuga saepe nulla rem qui quas modi nesciunt nobis provident vitae?",
			dueDate: "0000-0-0",
			isCompleted: false,
			isActive: true,
		},
		{
			id: Math.random(),
			title: "Task_1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illo sed perspiciatis aliquam consequatur odio vero blanditiis exercitationem distinctio fuga saepe nulla rem qui quas modi nesciunt nobis provident vitae?",
			dueDate: "1111-1-1",
			isCompleted: true,
			isActive: true,
		},
	]);

	function addNewTask(newTaskDetails) {
		dispatch({
			type: "ADD_TASK",
			payload: {
				newTaskDetails: newTaskDetails,
			},
		});
	}

	function editTask(taskID, editedTaskDetails) {
		dispatch({
			type: "EDIT_TASK",
			payload: {
				taskID: taskID,
				editedTaskDetails: editedTaskDetails,
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
		addNewTask: addNewTask,
		editTask: editTask,
		removeTask: removeTask,
	};

	console.log("allTasks");
	console.log(allTasks);

	return (
		<TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
	);
}
