import { useRef, useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import DialogUI from "./DialogUI";

export default function TaskCardUI({ task }) {
	const { id, title, description, dueDate, isCompleted, isActive } = task;

	const { editTask, removeTask } = useContext(TaskContext);

	const [isHover, setIsHover] = useState(false);
	const [isDialog, setIsDialog] = useState(false);

	const refDialog = useRef();
	const refTitle = useRef();
	const refDesc = useRef();
	const refDueDate = useRef();

	let dialogContent = null;

	useEffect(() => {
		if (isDialog === "editDialog") {
			if (refTitle.current) {
				refTitle.current.value = title || "";
			}
			if (refDesc.current) {
				refDesc.current.value = description || "";
			}
			if (refDueDate.current) {
				//Fix this
				refDueDate.current.value = dueDate || "";
			}
		}
	}, [isDialog, task]);

	switch (isDialog) {
		case "editDialog":
			//Show current values of the task
			dialogContent = (
				<form onSubmit={confirmEditTask}>
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
						<button type="submit">Yes</button>
						<button
							type="button"
							onClick={() => {
								refDialog.current.closeDialog();
							}}
						>
							Cancel
						</button>
					</div>
				</form>
			);
			break;

		case "removeDialog":
			dialogContent = (
				<div>
					<h2>Are you sure?</h2>
					<div>
						<button type="button" onClick={confirmRemoveTask}>
							Yes
						</button>
						<button
							type="button"
							onClick={() => {
								refDialog.current.closeDialog();
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			);
	}

	function handleEditTask() {
		console.log("Edit task triggered");

		setIsDialog("editDialog");
		refDialog.current.openDialog();
	}

	function confirmEditTask(e) {
		e.preventDefault();

		const editedTask = {
			title: refTitle.current.value,
			description: refDesc.current.value,
			dueDate: refDueDate.current.value,
		};

		editTask(id, editedTask);
		refDialog.current.closeDialog();
	}

	function handleRemoveTask() {
		console.log("Remove task triggered");

		setIsDialog("removeDialog");
		refDialog.current.openDialog();
	}

	function confirmRemoveTask() {
		removeTask(id);
		refDialog.current.closeDialog();
	}

	return (
		<div
			className="border rounded-sm"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<div>
				<h2>ID: {id}</h2>
				<h2>title: {title}</h2>
				<h2>description: {description}</h2>
				<h2>dueDate: {dueDate}</h2>
				<h2>isCompleted: {isCompleted ? "Yes" : "No"}</h2>
				<h2>isActive: {isActive ? "Yes" : "No"}</h2>
			</div>
			{isHover && (
				<div>
					<button type="button" onClick={handleEditTask}>
						Edit
					</button>
					<button type="button" onClick={handleRemoveTask}>
						Remove
					</button>
				</div>
			)}
			{<DialogUI ref={refDialog}>{dialogContent}</DialogUI>}
		</div>
	);
}
