import { useContext } from "react";
import CardUI from "./UI/CardUI";
import { TaskContext } from "../store/TaskContext";
import FilterTask from "./FilterTask";
import { useState } from "react";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	//Filtered results
	const [filteredTasks, setFilteredTasks] = useState([...allTasks]);

	function handleFilter(selectedFilter) {
		console.log("selectedFilter");
		console.log(selectedFilter);

		setFilteredTasks(() => {
			let updatedTaskList = [...allTasks];

			let currentFilter = "default";

			switch (selectedFilter) {
				case "notCompleted":
					currentFilter = false;
					break;
				case "completed":
					currentFilter = true;
					break;
				default:
					break;
			}

			updatedTaskList = updatedTaskList.filter((task) => {
				return task.isCompleted !== currentFilter;
			});

			return updatedTaskList;
		});
	}

	const render = filteredTasks.map((task) => {
		return <CardUI key={task.id} task={task} />;
	});

	return (
		<section id="sec-task-list" className="flex flex-col gap-4">
			<FilterTask onFilterTasks={handleFilter} />
			{render}
		</section>
	);
}
