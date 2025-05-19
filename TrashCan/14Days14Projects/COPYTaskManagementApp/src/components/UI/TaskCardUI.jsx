import { useRef, useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import DialogUI from "./DialogUI";
import BadgeUI from "./BadgeUI";

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

	function hangleToggleCompleted() {
		const newTaskDetails = {
			isCompleted: !isCompleted,
		};
		editTask(id, newTaskDetails);
	}

	return (
		<article
			className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg dark:shadow-gray-700/25"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={hangleToggleCompleted}
		>
			<img
				alt=""
				src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
				className="h-56 w-full object-cover"
			/>

			<time
				datetime="2022-10-10"
				className="block text-xs text-gray-500 dark:text-gray-400"
			>
				Due Date: {dueDate}
			</time>

			<div className="bg-white p-4 sm:p-6 dark:bg-gray-900">
				<a>
					<h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
						{title}
					</h3>
				</a>

				<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
					{description}
				</p>
				<div className="mt-3">
					<div>
						<span>Active: </span>
						{isActive ? (
							<BadgeUI badgeType="success" title="Yes" />
						) : (
							<BadgeUI badgeType="failed" title="No" />
						)}
					</div>
					<div>
						<span>Completed: </span>
						{isCompleted ? (
							<BadgeUI type="success" title="Yes" />
						) : (
							<BadgeUI type="failed" title="No" />
						)}
					</div>
				</div>
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
		</article>
	);
}
