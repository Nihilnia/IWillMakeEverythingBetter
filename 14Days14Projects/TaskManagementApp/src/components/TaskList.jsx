import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCardUI from "./UI/TaskCardUI";
import FilterTask from "./FilterTask";

export default function TaskList() {
	const { allTasks, activeTasks, deActiveTasks } = useContext(TaskContext);

	const [filteredTasks, setFilteredTasks] = useState([...activeTasks]);
	const [selectedStatus, setSelectedStatus] = useState("default");
	const [selectedFilter, setSelectedFilter] = useState("default");

	console.log("selectedStatus");
	console.log(selectedStatus);
	console.log("selectedFilter");
	console.log(selectedFilter);

	function handleSetStatus(val) {
		setSelectedStatus(val);
	}
	function handleSetFilter(val) {
		setSelectedFilter(val);
	}

	useEffect(() => {
		//This depends to the status
		setFilteredTasks(() => {
			//default as all
			let listedByStatus = [...allTasks];

			if (selectedStatus === "active") {
				listedByStatus = [...activeTasks];
			} else if (selectedStatus === "deActive") {
				listedByStatus = [...deActiveTasks];
			}

			let updatedFilteredTasks = [...listedByStatus];

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

			updatedFilteredTasks = updatedFilteredTasks.filter((task) => {
				if (currentFilter !== "default") {
					return task.isCompleted === currentFilter;
				} else {
					return [...listedByStatus];
				}
			});

			return updatedFilteredTasks;
		});
	}, [selectedStatus, selectedFilter, activeTasks]);

	return (
		<>
			<section id="sec-filter" className="flex justify-end">
				<FilterTask condition="completion" onSetFilter={handleSetFilter} />
				<FilterTask condition="activity" onSetStatus={handleSetStatus} />
			</section>
			<section id="sec-active-list" className="grid grid-cols-4 gap-4">
				{filteredTasks.map((task) => {
					return <TaskCardUI key={task.id} task={task} />;
				})}
			</section>
		</>
	);
}
