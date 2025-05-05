import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

export default function App() {
	const [allTasks, setAllTasks] = useState([]);

	function taskOps(op, taskID, newTask) {
		setAllTasks((prev) => {
			let updatedAllTasks = [...prev];

			switch (op) {
				case "NEW_TASK":
					const newTaskToAdd = {
						id: Math.random(),
						isCompleted: false,
						...newTask,
					};
					updatedAllTasks.push(newTaskToAdd);
					break;

				case "TOGGLE_COMPLETED":
					updatedAllTasks = updatedAllTasks.map((task) => {
						return task.id === taskID
							? { ...task, isCompleted: !task.isCompleted }
							: task;
					});
					break;

				case "REMOVE_TASK":
					updatedAllTasks = updatedAllTasks.filter((task) => {
						return task.id !== taskID;
					});
					break;
			}

			return updatedAllTasks;
		});
	}

	return (
		<section>
			<h2>Basic Todo App</h2>
			<NewTask taskOps={taskOps} />
			<TaskList allTasks={allTasks} taskOps={taskOps} />
		</section>
	);
}
