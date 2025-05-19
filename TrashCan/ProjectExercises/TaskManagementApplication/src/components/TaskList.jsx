import { useEffect, useState } from "react";
import TaskCardUI from "./UI/TaskCardUI";
import FilterTasks from "./FilterTasks";

export default function TaskList({ allTasks, onRemoveTask, onEditTask }) {
	const [filteredTasks, setFilteredTasks] = useState([...allTasks]);

	const [selectedFilter, setSelectedFilter] = useState("default");

	useEffect(() => {
		setFilteredTasks(() => {
			let updatedList = [...allTasks];

			let criteria = null;

			if (selectedFilter !== "default") {
				criteria = selectedFilter === "completed";
				updatedList = updatedList.filter(
					(task) => task.isCompleted === criteria,
				);
			}

			return updatedList;
		});
	}, [selectedFilter, allTasks]);

	const render = (
		<div>
			<FilterTasks onSelectFilter={setSelectedFilter} />
			{filteredTasks.map((task) => {
				return (
					<TaskCardUI
						key={task.id}
						task={task}
						onRemoveTask={onRemoveTask}
						onEditTask={onEditTask}
					/>
				);
			})}
		</div>
	);

	return <section className="flex flex-col gap-3">{render}</section>;
}
