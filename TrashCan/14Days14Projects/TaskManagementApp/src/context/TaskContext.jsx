import { act, createContext, useEffect, useReducer, useState } from "react";

export const TaskContext = createContext({
	allTasks: [],
	activeTasks: [],
	deActiveTasks: [],
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
				thumbnail: "https://picsum.photos/400/200",
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
	const [allTasks, dispatch] = useReducer(
		taskReducer,
		localStorage.getItem("allTasks")
			? JSON.parse(localStorage.getItem("allTasks"))
			: [
					{
						id: Math.random(),
						title: "Grocery Shopping",
						description:
							"Buy milk, eggs, bread, and vegetables from the supermarket.",
						dueDate: "2025-05-01",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: false,
						isActive: false,
					},
					{
						id: Math.random(),
						title: "Book Doctor Appointment",
						description: "Schedule a check-up appointment with Dr. Smith.",
						dueDate: "2025-04-28",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: true,
						isActive: true,
					},
					{
						id: Math.random(),
						title: "Write Blog Post",
						description: "Draft a new blog post about React Hooks.",
						dueDate: "2025-05-05",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: false,
						isActive: false,
					},
					{
						id: Math.random(),
						title: "Pay Bills",
						description: "Pay the electricity and internet bills.",
						dueDate: "2025-04-26",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: true,
						isActive: true,
					},
					{
						id: Math.random(),
						title: "Study React Components",
						description:
							"Go through the documentation for different types of React components.",
						dueDate: "2025-04-30",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: false,
						isActive: false,
					},
					{
						id: Math.random(),
						title: "Plan Weekend Trip",
						description:
							"Research and plan a short trip for the upcoming weekend.",
						dueDate: "2025-05-03",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: false,
						isActive: true,
					},
					{
						id: Math.random(),
						title: "Walk the Dog",
						description: "Take the dog for a walk in the park.",
						dueDate: "2025-04-25",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: true,
						isActive: false,
					},
					{
						id: Math.random(),
						title: "Learn about State Management",
						description:
							"Explore different state management solutions in React.",
						dueDate: "2025-05-07",
						thumbnail: "https://picsum.photos/400/200",
						isCompleted: false,
						isActive: true,
					},
				],
	);

	const [activeTasks, setActiveTasks] = useState([]);
	const [deActiveTasks, setDeActiveTasks] = useState([]);

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
		activeTasks: activeTasks,
		deActiveTasks: deActiveTasks,
		addNewTask: addNewTask,
		editTask: editTask,
		removeTask: removeTask,
	};

	useEffect(() => {
		const currentAllTaskList = [...allTasks];

		setActiveTasks((prev) => {
			let currentActiveTasks = [...prev];
			currentActiveTasks = currentAllTaskList.filter(
				(task) => task.isActive === true,
			);
			return currentActiveTasks;
		});

		setDeActiveTasks((prev) => {
			let currentDeActiveTasks = [...prev];
			currentDeActiveTasks = currentAllTaskList.filter(
				(task) => task.isActive === false,
			);
			return currentDeActiveTasks;
		});

		localStorage.setItem("allTasks", JSON.stringify(allTasks));
	}, [allTasks]);

	return (
		<TaskContext.Provider value={ctxValues}>{children}</TaskContext.Provider>
	);
}
