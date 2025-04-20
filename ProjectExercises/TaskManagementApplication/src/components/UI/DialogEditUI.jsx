import { useImperativeHandle, useRef } from "react";

export default function DialogEditUI({ task, onEditTask, ref }) {
	const refDialog = useRef();
	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	function handleEdit() {
		onEditTask(task.id, {
			title: refTitle.current.value,
			description: refDescription.current.value,
			refDueDate: refDueDate.current.value,
		});

		refDialog.current.close();
	}

	useImperativeHandle(ref, () => {
		return {
			showDialog() {
				refTitle.current.value = task.title || "";
				refDescription.current.value = task.description || "";
				refDueDate.current.value = task.dueDate || "";
				refDialog.current.showModal();
			},
		};
	});

	const render = (
		<dialog ref={refDialog}>
			<div>
				<label htmlFor="taskTitle">Task:</label>
				<input type="text" id="taskTitle" ref={refTitle} />
			</div>
			<div>
				<label htmlFor="taskDescription">Description:</label>
				<input type="text" id="taskDescription" ref={refDescription} />
			</div>
			<div>
				<label htmlFor="taskDueDate">Due Date:</label>
				<input type="date" id="taskDueDate" ref={refDueDate} />
			</div>
			<div>
				<button type="button" onClick={handleEdit}>
					Edit
				</button>
			</div>
		</dialog>
	);

	return render;
}
