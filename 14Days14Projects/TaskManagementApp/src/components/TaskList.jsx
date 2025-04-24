import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCardUI from "./UI/TaskCardUI";
import FilterTask from "./FilterTask";
import BadgeUI from "./UI/BadgeUI";
import ButtonUI from "./UI/ButtonUI";

export default function TaskList() {
	const { allTasks, activeTasks, deActiveTasks } = useContext(TaskContext);

	const [filteredTasks, setFilteredTasks] = useState([...activeTasks]);
	const [selectedStatus, setSelectedStatus] = useState("default");
	const [selectedFilter, setSelectedFilter] = useState("default");

	function handleSetStatus(val) {
		setSelectedStatus(val);
	}
	function handleSetFilter(val) {
		setSelectedFilter(val);
	}

	console.log("selectedStatus");
	console.log(selectedStatus);
	console.log("selectedFilter");
	console.log(selectedFilter);

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

	let filterMessage = (
		<div>
			Showing all tasks
			<div>
				Status:
				{<BadgeUI badgeType="soft" badgeColor="accent" badgeTitle="Active" />}{" "}
				and
				{
					<BadgeUI
						badgeType="soft"
						badgeColor="warning"
						badgeTitle="Not-Active"
					/>
				}
			</div>
			<div>
				Activity:
				{
					<BadgeUI
						badgeType="soft"
						badgeColor="accent"
						badgeTitle="Completed"
					/>
				}{" "}
				and
				{
					<BadgeUI
						badgeType="soft"
						badgeColor="warning"
						badgeTitle="Not-Completed"
					/>
				}
			</div>
		</div>
	);
	if (selectedStatus !== "default" || selectedFilter !== "default") {
		filterMessage = `Showing tasks with status: ${selectedStatus === "default" ? "All" : selectedStatus}, activity: ${selectedFilter}`;
	}

	return (
		<section id="sec-task-list" className="col-span-full">
			<h2>{filterMessage}</h2>
			<div id="sec-filter" className="flex justify-end items-center">
				<FilterTask condition="completion" onSetFilter={handleSetFilter} />
				<FilterTask condition="activity" onSetStatus={handleSetStatus} />
				{(selectedStatus !== "default" || selectedFilter !== "default") && (
					<ButtonUI
						btnType="button"
						btnLibType="soft"
						btnColor="accent"
						btnTitle="Reset"
						btnSize="sm"
						onClick={() => {
							handleSetFilter("default");
							handleSetStatus("default");
						}}
					/>
				)}
			</div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{filteredTasks.map((task) => {
					return <TaskCardUI key={task.id} task={task} />;
				})}
			</div>
		</section>
	);
}
