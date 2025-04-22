import { useState, useRef, useContext } from "react";
import DialogUI from "./DialogUI";
import { TaskContext } from "../../store/TaskContext";

export default function CardUI({ task }) {
	const [isHover, setIsHover] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);

	const { handleRemoveTask } = useContext(TaskContext);

	const refDialog = useRef();
	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	let dialogContent = null;

	switch (selectedOption) {
		case "EDIT":
			dialogContent = (
				<form>
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
						<button
							type="button"
							onClick={() => {
								refDialog.current.closeDialog();
								setSelectedOption(null);
							}}
						>
							Cancel
						</button>
					</div>
				</form>
			);
			refDialog.current.showDialog();
			break;

		case "REMOVE":
			dialogContent = (
				<div>
					<h2>Are you sure?</h2>
					<div>
						<button type="button" onClick={handleConfirmRemove}>
							Yes
						</button>
						<button
							type="button"
							onClick={() => {
								refDialog.current.closeDialog();
								setSelectedOption(null);
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			);
			refDialog.current.showDialog();
			break;
	}

	function handleConfirmRemove() {
		handleRemoveTask(task.id);
	}

	const render = (
		<div
			className="p-4 border rounded-sm"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
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
			{<DialogUI ref={refDialog}>{dialogContent}</DialogUI>}
		</div>
	);

	return render;
}
