import { useRef, useState } from "react";
import DialogEditUI from "./DialogEditUI";
import DialogConfirmUI from "./DialogConfirmUI";

export default function TaskCardUI({ task, onRemoveTask, onEditTask }) {
	const [isHover, setIsHover] = useState(false);

	const refDialog = useRef();
	const refDialogConfirmation = useRef();

	function handleRemove() {
		refDialogConfirmation.current.showDialog();
	}

	function handleEdit() {
		refDialog.current.showDialog();
	}

	function handleToggleCompleted() {
		onEditTask(task.id, { isCompleted: !task.isCompleted });
	}

	const render = (
		<div
			className="border-amber-300 rounded-sm bg-amber-700"
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={handleToggleCompleted}
			onKeyUp={(e) => {
				if (e.key === "Enter") {
					handleToggleCompleted;
				}
			}}
		>
			<h2>{task.title}</h2>
			<h2>{task.description}</h2>
			<h2>{task.dueDate}</h2>
			<h2>{task.isCompleted ? "yes" : "no"}</h2>
			{isHover && (
				<div>
					<button type="button" onClick={handleEdit}>
						Edit
					</button>
					<button type="button" onClick={handleRemove}>
						Remove
					</button>
				</div>
			)}
			{<DialogEditUI ref={refDialog} task={task} onEditTask={onEditTask} />}
			{
				<DialogConfirmUI
					ref={refDialogConfirmation}
					task={task}
					onRemoveTask={onRemoveTask}
				/>
			}
		</div>
	);

	return render;
}
