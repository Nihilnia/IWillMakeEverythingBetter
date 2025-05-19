export default function TaskCard({ task }) {
	const {
		title,
		description,
		priority,
		dueDate,
		isCompleted,
		category,
		createdAt,
	} = task;

	let formattedPriority = null;

	switch (priority) {
		case 0: {
			formattedPriority = "Low";
			break;
		}
		case 1: {
			formattedPriority = "Medium";
			break;
		}
		case 2: {
			formattedPriority = "High";
			break;
		}
	}

	return (
		<div
			className="bg-gray-600 max-w-[100%] py-2 px-4 rounded flex flex-col gap-3
        hover:bg-gray-800"
		>
			<div className="flex justify-between">
				<h2>{title}</h2>
				<span className="border rounded border-red-400 px-4 bg-red-400 text-sm">
					{formattedPriority}
				</span>
			</div>
			<div>
				<h4>{description}</h4>
			</div>
			<div className="flex flex-row justify-between">
				<span>{createdAt}</span>
				<span>{dueDate}</span>
			</div>
		</div>
	);
}
