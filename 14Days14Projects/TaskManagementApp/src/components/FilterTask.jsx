export default function FilterTask({ onSetFilter }) {
	return (
		<select
			name="filterDropdown"
			id="filterDropdown"
			onChange={onSetFilter}
			className="text-[#000]"
		>
			<option value="default">Default</option>
			<option value="completed">Completed</option>
			<option value="notCompleted">Not completed</option>
		</select>
	);
}
