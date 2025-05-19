export default function TaskItem({ task }) {
	const {
		title,
		description,
		priority,
		category,
		isCompleted,
		createdAt,
		dueDate,
	} = task;

	return (
		<div>
			<h2>{title}</h2>
			<div>
				<h4>{description}</h4>
				<span>Status: {isCompleted ? "Yes" : "No"}</span>
			</div>
		</div>
	);
}
