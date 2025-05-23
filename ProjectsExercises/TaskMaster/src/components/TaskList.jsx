import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	console.log(allTasks);

	return (
		<section>
			{allTasks.map((task) => {
				return <TaskItem key={task.id} task={task} />;
			})}
		</section>
	);
}
