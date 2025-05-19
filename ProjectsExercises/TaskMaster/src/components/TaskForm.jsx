import { useRef } from "react";

export default function TaskForm() {
	const refTitle = useRef();
	const refDescription = useRef();
	const refPriority = useRef();
	const refCategory = useRef();
	const refDueDate = useRef();

	function handleForm(e) {
		e.preventDefault();

		const newTask = {
			title: refTitle.current.value,
			description: refDescription.current.value,
			priority: refPriority.current.value,
			category: refCategory.current.value,
			dueDate: refDueDate.current.value,
		};

		console.log(newTask);
	}

	return (
		<form onSubmit={handleForm}>
			<div>
				<label htmlFor="title">Task:</label>
				<input type="text" id="title" name="title" ref={refTitle} />
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<textarea name="description" id="description" ref={refDescription} />
			</div>
			<div>
				<label htmlFor="priority">Description:</label>
				<select name="priority" ref={refPriority}>
					<option value="">Please choose an option</option>
					<option value="1">Low</option>
					<option value="2">Medium</option>
					<option value="3">High</option>
				</select>
			</div>
			<div>
				<label htmlFor="category">Category:</label>
				<select name="category" ref={refCategory}>
					<option value="">Please choose an option</option>
					<option value="1">Programming</option>
					<option value="2">Movie</option>
					<option value="3">Video Game</option>
				</select>
			</div>
			<div>
				<label htmlFor="dueDate">Category:</label>
				<input type="date" id="dueDate" ref={refDueDate} />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
}
