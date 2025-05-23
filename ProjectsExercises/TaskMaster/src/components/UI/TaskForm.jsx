import { useContext, useEffect, useRef } from "react";
import { TaskContext } from "../../Context/TaskContext";

export default function TaskForm({ task, onComplete }) {
	const { addTask, editTask } = useContext(TaskContext);
	const isEditMode = !!task;

	const refTitle = useRef();
	const refDescription = useRef();
	const refPriority = useRef();
	const refCategory = useRef();
	const refDueDate = useRef();

	useEffect(() => {
		if (isEditMode) {
			refTitle.current.value = task.title || "";
			refDescription.current.value = task.description || "";
			refPriority.current.value = task.priority || "";
			refCategory.current.value = task.category || "";
			refDueDate.current.value = task.dueDate || "";
		} else {
			refTitle.current.value = "";
			refDescription.current.value = "";
			refPriority.current.value = "";
			refCategory.current.value = "";
			refDueDate.current.value = "";
		}
	}, [task, isEditMode]);

	function handleFormSubmit(e) {
		e.preventDefault();

		const newTaskDetails = {
			title: refTitle.current.value,
			description: refDescription.current.value,
			priority: refPriority.current.value,
			category: refCategory.current.value,
			dueDate: refDueDate.current.value,
		};

		if (isEditMode) {
			editTask(task.id, newTaskDetails);
			onComplete();
		} else {
			addTask(newTaskDetails);
			refTitle.current.value = "";
			refDescription.current.value = "";
			refPriority.current.value = "";
			refCategory.current.value = "";
			refDueDate.current.value = "";

			onComplete();
		}
	}

	return (
		<form onSubmit={handleFormSubmit}>
			<div>
				<label htmlFor="title">Task:</label>
				<input type="text" id="title" name="title" ref={refTitle} />
			</div>
			<div>
				<label htmlFor="description">Description:</label>
				<textarea name="description" id="description" ref={refDescription} />
			</div>
			<div>
				<label htmlFor="priority">Priority:</label>
				<select name="priority" ref={refPriority}>
					<option value="">Please choose an option</option>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div>
			<div>
				<label htmlFor="category">Category:</label>
				<select name="category" ref={refCategory}>
					<option value="">Please choose an option</option>
					<option value="programming">Programming</option>
					<option value="movie">Movie</option>
					<option value="gaming">Video Game</option>
				</select>
			</div>
			<div>
				<label htmlFor="dueDate">Due Date:</label>
				<input type="date" id="dueDate" name="dueDate" ref={refDueDate} />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
}
