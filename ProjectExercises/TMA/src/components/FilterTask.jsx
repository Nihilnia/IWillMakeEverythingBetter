export default function FilterTask({ onFilterTasks }) {
	function handleFilterTasks(e) {
		const selectedFilter = e.target.value;

		onFilterTasks(selectedFilter);
	}

	return (
		<select name="taskFilter" id="taskFilter" onChange={handleFilterTasks}>
			<option value="default">Default</option>
			<option value="completed">Completed</option>
			<option value="notCompleted">Not Completed</option>
		</select>
	);
}
