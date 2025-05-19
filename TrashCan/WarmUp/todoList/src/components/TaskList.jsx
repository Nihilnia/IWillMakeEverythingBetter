import TaskCardUI from "./UI/TaskCardUI";

export default function TaskList({ allTasks, taskOps }) {
	return (
		<section>
			<h2>All todos:</h2>
			{allTasks.map((task) => {
				return <TaskCardUI key={task.id} task={task} taskOps={taskOps} />;
			})}
		</section>
	);
}
