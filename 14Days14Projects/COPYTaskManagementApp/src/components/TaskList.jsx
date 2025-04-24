import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCardUI from "./UI/TaskCardUI";
import FilterTask from "./FilterTask";

export default function TaskList() {
	const { allTasks } = useContext(TaskContext);

	const [filteredTasks, setFilteredTasks] = useState([...allTasks]);
	const [selectedFilter, setSelectedFilter] = useState("default");

	function handleSetFilter(e) {
		setSelectedFilter(e.target.value);
	}

	useEffect(() => {
		setFilteredTasks((prev) => {
			let updatedFilteredTasks = [...allTasks];

			let currentFilter = "default";

			switch (selectedFilter) {
				case "completed":
					currentFilter = true;
					break;

				case "notCompleted":
					currentFilter = false;
					break;

				default:
					currentFilter = "default";
			}

			console.log("currentFilter");
			console.log(currentFilter);

			updatedFilteredTasks = updatedFilteredTasks.filter((task) => {
				return task.isCompleted !== currentFilter;
			});

			return updatedFilteredTasks;
		});
	}, [selectedFilter, allTasks]);

	console.log("selectedFilter");
	console.log(selectedFilter);

	return (
		<>
			<section id="sec-filter">
				<FilterTask onSetFilter={handleSetFilter} />
				<button className="btn btn-secondary">Secondary</button>
			</section>
			<section id="sec-active-list" className="grid grid-cols-4 gap-4">
				{filteredTasks.map((task) => {
					return <TaskCardUI key={task.id} task={task} />;
				})}
			</section>
		</>
	);
}
