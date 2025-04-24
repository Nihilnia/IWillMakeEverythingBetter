import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

export default function NewTask() {
	const { addNewTask } = useContext(TaskContext);

	const refTitle = useRef();
	const refDesc = useRef();
	const refDueDate = useRef();

	function handleNewTask(e) {
		e.preventDefault();

		const newTask = {
			title: refTitle.current.value,
			description: refDesc.current.value,
			dueDate: refDueDate.current.value,
		};

		addNewTask(newTask);
	}

	//Create a form component later
	return (
		<form onSubmit={handleNewTask}>
			<div>
				<label htmlFor="newTaskTitle">Title:</label>
				<input
					type="text"
					id="newTaskTitle"
					name="newTaskTitle"
					ref={refTitle}
				/>
			</div>
			<div>
				<label htmlFor="newTaskDescription">Description:</label>
				<input
					type="text"
					id="newTaskDescription"
					name="newTaskDescription"
					ref={refDesc}
				/>
			</div>
			<div>
				<label htmlFor="newTaskDueDate">Due Date:</label>
				<input
					type="date"
					id="newTaskDueDate"
					name="newTaskDueDate"
					ref={refDueDate}
				/>
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
}
