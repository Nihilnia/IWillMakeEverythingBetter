import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCardUI from "./UI/TaskCardUI";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	return (
		<section id="sec-active-list" className="flex flex-col gap-4">
			{allTasks.map((task) => {
				return <TaskCardUI key={task.id} task={task} />;
			})}
		</section>
	);
}
