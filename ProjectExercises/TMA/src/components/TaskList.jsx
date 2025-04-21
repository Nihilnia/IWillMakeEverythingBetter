import { useContext } from "react";
import CardUI from "./UI/CardUI";
import { TaskContext } from "../store/TaskContext";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	const render = allTasks.map((task) => {
		return <CardUI key={task.id} task={task} />;
	});

	return (
		<section id="sec-task-list" className="flex flex-col gap-4">
			{render}
		</section>
	);
}
