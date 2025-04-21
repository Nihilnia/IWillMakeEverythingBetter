import { useRef } from "react";

export default function NewTask({ onAddTask }) {
	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	function handleNewTask(e) {
		e.preventDefault();

		onAddTask({
			title: refTitle.current.value,
			description: refDescription.current.value,
			dueDate: refDueDate.current.value,
		});
	}

	const render = (
		<form onSubmit={handleNewTask}>
			<div>
				<label htmlFor="newTaskTitle">Task:</label>
				<input type="text" id="newTaskTitle" ref={refTitle} />
			</div>
			<div>
				<label htmlFor="newTaskDescription">Description:</label>
				<input type="text" id="newTaskDescription" ref={refDescription} />
			</div>
			<div>
				<label htmlFor="newTaskDueDate">Due Date:</label>
				<input type="date" id="newTaskDueDate" ref={refDueDate} />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);

	return render;
}
