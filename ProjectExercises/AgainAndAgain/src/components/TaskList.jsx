import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import TaskCard from "./UI/TaskCard";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	console.log("allTasks");
	console.log(allTasks);

	return (
		<>
			{allTasks.map((task) => {
				return <TaskCard key={task.id} task={task} />;
			})}
		</>
	);
}
