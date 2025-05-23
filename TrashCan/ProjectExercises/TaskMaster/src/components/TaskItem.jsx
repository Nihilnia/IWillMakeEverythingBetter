import { useContext, useRef, useState } from "react";
import Modal from "./Modal";
import TaskForm from "./UI/TaskForm";
import Confirmation from "./UI/Confirmation";
import { TaskContext } from "../Context/TaskContext";

export default function TaskItem({ task }) {
	const [selectedOption, setSelectedOption] = useState(null);

	const { removeTask } = useContext(TaskContext);

	const refDialog = useRef();

	const {
		id,
		title,
		description,
		priority,
		category,
		isCompleted,
		createdAt,
		dueDate,
	} = task;

	function handleRemoveTask() {
		removeTask(id);
	}

	function handleCloseDialog() {
		refDialog.current.closeDialog();
	}

	return (
		<div className="border-amber-300 border-2 rounded-sm ">
			<h2>{title}</h2>
			<div>
				<h4>{description}</h4>
				<span>Status: {isCompleted ? "Yes" : "No"}</span>
			</div>
			<div>
				<button
					type="button"
					onClick={() => {
						setSelectedOption("EDIT_TASK");
						refDialog.current.showDialog();
					}}
				>
					Edit
				</button>
				<button
					type="button"
					onClick={() => {
						setSelectedOption("REMOVE_TASK");
						refDialog.current.showDialog();
					}}
				>
					Remove
				</button>
			</div>
			<div>
				<Modal ref={refDialog} onClose={() => refDialog.current.closeDialog()}>
					{selectedOption === "EDIT_TASK" ? (
						<TaskForm task={task} onComplete={handleCloseDialog} />
					) : (
						<Confirmation onConfirm={handleRemoveTask} />
					)}
				</Modal>
			</div>
		</div>
	);
}
