import { useState } from "react";

export default function TaskCardUI({ task, taskOps }) {
	const { id, title, description, isCompleted } = task;

	const [isHover, setIsHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<h2>{title}</h2>
			<h4>{description}</h4>
			<span>Completed?: {isCompleted ? "Yes" : "No"}</span>
			{isHover && (
				<div>
					<button
						type="button"
						onClick={() => {
							taskOps("TOGGLE_COMPLETED", id, undefined);
						}}
					>
						Mark as {isCompleted ? "not-completed" : "completed"}
					</button>
					<button
						type="button"
						onClick={() => {
							taskOps("REMOVE_TASK", id, undefined);
						}}
					>
						Remove
					</button>
				</div>
			)}
		</div>
	);
}
