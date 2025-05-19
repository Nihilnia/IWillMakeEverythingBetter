import { useState } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

export default function App() {
	const [allTasks, setAllTasks] = useState([
		{
			id: Math.random(),
			title: "Task_01",
			description: "Desc_01",
			dueDate: "2025-04-01",
			isCompleted: false,
		},
		{
			id: Math.random(),
			title: "Task_02",
			description: "Desc_02",
			dueDate: "2025-02-11",
			isCompleted: true,
		},
	]);

	function addTask(newTask) {
		setAllTasks((prev) => {
			const updatedTasks = [...prev];

			updatedTasks.push({ ...newTask, id: Math.random(), isCompleted: false });

			return updatedTasks;
		});
	}

	function removeTask(taskID) {
		setAllTasks((prev) => {
			let updatedTasks = [...prev];

			updatedTasks = updatedTasks.filter((task) => task.id !== taskID);

			return updatedTasks;
		});
	}

	function editTask(taskID, newIntel) {
		setAllTasks((prev) => {
			let updatedTasks = [...prev];

			updatedTasks = updatedTasks.map((task) => {
				return task.id === taskID ? { ...task, ...newIntel } : task;
			});

			return updatedTasks;
		});
	}

	return (
		<section className="grid grid-cols-2">
			<NewTask onAddTask={addTask} />
			<TaskList
				allTasks={allTasks}
				onRemoveTask={removeTask}
				onEditTask={editTask}
			/>
		</section>
	);
}
