import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskCard from "./UI/TaskCard";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	return (
		<section className="grid grid-cols-3 gap-2">
			{allTasks.map((task) => {
				return <TaskCard key={task.id} task={task} />;
			})}
		</section>
	);
}
