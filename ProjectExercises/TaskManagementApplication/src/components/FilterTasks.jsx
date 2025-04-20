export default function FilterTasks({ onSelectFilter }) {
	function handleSelectedFilter(e) {
		onSelectFilter(e.target.value);
	}

	const render = (
		<div>
			<select onChange={handleSelectedFilter}>
				<option value="default">Default</option>
				<option value="completed">Completed</option>
				<option value="notCompleted">Not Completed</option>
			</select>
		</div>
	);

	return render;
}
