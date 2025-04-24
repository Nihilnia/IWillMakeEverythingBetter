export default function FilterTask({ condition, onSetStatus, onSetFilter }) {
	function handleSetStatus(val) {
		onSetStatus(val);
	}
	function handleSetFilter(val) {
		onSetFilter(val);
	}

	return (
		<details className="dropdown">
			<summary className="btn m-1">
				{condition === "completion" ? "Filter by: " : "Show:"}
			</summary>
			<ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
				{condition === "completion" && (
					<>
						<li onClick={() => handleSetFilter("default")}>
							<a>All</a>
						</li>
						<li onClick={() => handleSetFilter("completed")}>
							<a>Completed</a>
						</li>
						<li onClick={() => handleSetFilter("notCompleted")}>
							<a>Not-Completed</a>
						</li>
					</>
				)}
				{condition === "activity" && (
					<>
						<li onClick={() => handleSetStatus("default")}>
							<a>All</a>
						</li>
						<li onClick={() => handleSetStatus("active")}>
							<a>Active</a>
						</li>
						<li onClick={() => handleSetStatus("deActive")}>
							<a>Deactive</a>
						</li>
					</>
				)}
			</ul>
		</details>
	);
}
