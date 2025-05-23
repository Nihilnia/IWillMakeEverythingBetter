import { useRef } from "react";
import Modal from "./Modal";
import TaskForm from "./UI/TaskForm";

export default function NewTask() {
	const refNewTaskForm = useRef();

	function handleClick() {
		refNewTaskForm.current.showDialog();
	}

	function handleCloseDialog() {
		refNewTaskForm.current.closeDialog();
	}

	return (
		<section>
			<button type="button" onClick={handleClick}>
				Add New Task
			</button>
			<Modal ref={refNewTaskForm}>
				<TaskForm onComplete={handleCloseDialog} />
			</Modal>
		</section>
	);
}
