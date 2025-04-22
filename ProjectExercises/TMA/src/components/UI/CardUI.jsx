import { useState, useRef, useContext } from "react";

import { TaskContext } from "../../store/TaskContext";
import DialogUI from "./DialogUI";

export default function CardUI({ task }) {
	const [isHover, setIsHover] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const { handleEditTask, handleRemoveTask } = useContext(TaskContext);

	const refDialog = useRef();
	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	let dialogContent = null;

	switch (selectedOption) {
		case "EDIT":
			dialogContent = (
				<form onSubmit={handleConfirmEdit}>
					<div>
						<label htmlFor="editTaskTitle">Title:</label>
						<input
							type="text"
							id="editTaskTitle"
							name="editTaskTitle"
							ref={refTitle}
							required
						/>
					</div>
					<div>
						<label htmlFor="editTaskDescription">Description:</label>
						<input
							type="text"
							id="editTaskDescription"
							name="editTaskDescription"
							ref={refDescription}
							required
						/>
					</div>
					<div>
						<label htmlFor="editTaskDueDate">Due Date:</label>
						<input
							type="date"
							id="editTaskDueDate"
							name="editTaskDueDate"
							ref={refDueDate}
							required
						/>
					</div>
					<div>
						<button type="submit">Edit</button>
						<button type="button" onClick={handleCloseDialog}>
							Cancel
						</button>
					</div>
				</form>
			);
			handleOpenDialog();
			break;

		case "REMOVE":
			dialogContent = (
				<div>
					<h2>Are you sure?</h2>
					<div>
						<button type="button" onClick={handleConfirmRemove}>
							Yes
						</button>
						<button type="button" onClick={handleCloseDialog}>
							Cancel
						</button>
					</div>
				</div>
			);
			handleOpenDialog();
			break;
	}

	function handleOpenDialog() {
		refDialog.current.showDialog();
	}
	function handleCloseDialog() {
		refDialog.current.closeDialog();
	}

	function handleConfirmRemove() {
		handleRemoveTask(task.id);
	}

	function handleConfirmEdit(e) {
		e.preventDefault();

		const newData = {
			title: refTitle.current.value,
			description: refDescription.current.value,
			dueDate: refDueDate.current.value,
		};
		handleEditTask(task.id, newData);

		handleCloseDialog();
	}

	const render = (
		<div
			className="p-4 border rounded-sm"
			onMouseEnter={() => {
				setIsHover(true);
			}}
			onMouseLeave={() => {
				setIsHover(false);
			}}
		>
			<h2>Title: {task.title}</h2>
			<h2>Description: {task.description}</h2>
			<h2>Due date: {task.dueDate}</h2>
			<h2>Completed: {task.isCompleted ? "Yes" : "No"}</h2>
			{isHover && (
				<div>
					<button type="button" onClick={() => setSelectedOption("EDIT")}>
						Edit
					</button>
					<button type="button" onClick={() => setSelectedOption("REMOVE")}>
						Remove
					</button>
				</div>
			)}
			{
				<DialogUI
					ref={refDialog}
					onDialogShow={() => {
						console.log("Dialog active");
					}}
					onDialogClose={() => {
						console.log("Dialog inactive");
						setSelectedOption(null);
					}}
				>
					{dialogContent}
				</DialogUI>
			}
		</div>
	);

	return render;
}
