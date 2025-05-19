import { useRef, useContext, useState, useEffect } from "react";
import { TaskContext } from "../../context/TaskContext";
import DialogUI from "./DialogUI";
import BadgeUI from "./BadgeUI";
import ButtonUI from "./ButtonUI";
import TaskFormUI from "./TaskFormUI";

export default function TaskCardUI({ task }) {
	const { id, title, description, dueDate, isCompleted, isActive, thumbnail } =
		task;

	const { editTask, removeTask } = useContext(TaskContext);

	const [isHover, setIsHover] = useState(false);
	const [isDialog, setIsDialog] = useState(false);

	const refDialog = useRef();
	const refTitle = useRef();
	const refDesc = useRef();
	const refDueDate = useRef();

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
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="card bg-base-100 shadow-sm max-w-[100%] w-[100%]"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<figure>
				<img src={thumbnail} alt={title} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>

				<p>{description}</p>
				<div className="flex justify-between">
					<BadgeUI
						badgeType="soft"
						badgeColor={isCompleted ? "accent" : "error"}
						badgeTitle={isCompleted ? "Completed" : "Not-Completed"}
						onClick={hangleToggleCompleted}
					/>
					<BadgeUI
						badgeType="soft"
						badgeColor={isActive ? "accent" : "error"}
						badgeTitle={isActive ? "Active" : "Not-Active"}
					/>
				</div>
			</div>

			{isHover && (
				<div className="card-actions justify-end pb-4 mr-4">
					<ButtonUI
						btnType="button"
						btnLibType="soft"
						btnColor="accent"
						btnTitle="Edit"
						btnSize="sm"
						onClick={handleEditTask}
					/>
					<ButtonUI
						btnType="button"
						btnLibType="soft"
						btnColor="warning"
						btnTitle="Remove"
						btnSize="sm"
						onClick={handleRemoveTask}
					/>
				</div>
			)}

			<DialogUI ref={refDialog}>
				{isDialog === "editDialog" && <TaskFormUI btnTitle="Edit" />}
				{isDialog === "removeDialog" && (
					<div>
						<h2>Are you sure?</h2>
						<ButtonUI
							btnType="button"
							btnLibType="soft"
							btnColor="warning"
							btnTitle="Yes"
							btnSize="sm"
							onClick={confirmRemoveTask}
						/>
						<ButtonUI
							btnType="button"
							btnLibType="soft"
							btnColor="warning"
							btnTitle="Cancel"
							btnSize="sm"
							onClick={() => refDialog.current.closeDialog()}
						/>
					</div>
				)}
			</DialogUI>
		</div>
	);
}
