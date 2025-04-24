export default function FilterTask({ onSetFilter }) {
	function handleSetFilter(val) {
		onSetFilter(val);
	}

	return (
		<details className="dropdown">
			<summary className="btn m-1">Filter by</summary>
			<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
				<li onClick={() => handleSetFilter("default")}>
					<a>All</a>
				</li>
				<li onClick={() => handleSetFilter("completed")}>
					<a>Completed</a>
				</li>
				<li onClick={() => handleSetFilter("notCompleted")}>
					<a>Not-Completed</a>
				</li>
			</ul>
		</details>
	);
}
