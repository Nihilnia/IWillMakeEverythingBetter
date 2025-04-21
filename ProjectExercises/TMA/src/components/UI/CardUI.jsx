export default function CardUI({ task }) {
	const render = (
		<div className="p-4 border rounded-sm">
			<h2>Title: {task.title}</h2>
			<h2>Description: {task.description}</h2>
			<h2>Due date: {task.dueDate}</h2>
			<h2>Completed: {task.isCompleted ? "Yes" : "No"}</h2>
		</div>
	);

	return render;
}
