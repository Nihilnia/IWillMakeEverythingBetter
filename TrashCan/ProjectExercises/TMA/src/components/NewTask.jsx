import { useContext, useRef } from "react";
import { TaskContext } from "../store/TaskContext";

export default function NewTask() {
	const { handleNewTask } = useContext(TaskContext);

	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	function handleForm(e) {
		e.preventDefault();

		const newTask = {
			title: refTitle.current.value,
			description: refDescription.current.value,
			dueDate: refDueDate.current.value,
		};

		handleNewTask(newTask);
	}

	const render = (
		<form onSubmit={handleForm}>
			<div>
				<label htmlFor="newTaskTitle">Title:</label>
				<input
					type="text"
					id="newTaskTitle"
					name="newTaskTitle"
					ref={refTitle}
					required
				/>
			</div>
			<div>
				<label htmlFor="newTaskDescription">Description:</label>
				<input
					type="text"
					id="newTaskDescription"
					name="newTaskDescription"
					ref={refDescription}
					required
				/>
			</div>
			<div>
				<label htmlFor="newTaskDueDate">Due Date:</label>
				<input
					type="date"
					id="newTaskDueDate"
					name="newTaskDueDate"
					ref={refDueDate}
					required
				/>
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);

	return render;
}
