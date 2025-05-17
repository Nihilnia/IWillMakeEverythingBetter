export default function TaskCard({ task }) {
	const { title, description, priority, dueDate, isCompleted } = task;

	let formattedPriority = null;
	const priorityClasses = {
		0: {
			bg: "bg-gray-50",
			text: "text-gray-700",
			border: "border-gray-100",
			dot: "bg-gray-500",
		},
		1: {
			bg: "bg-yellow-50",
			text: "text-yellow-700",
			border: "border-yellow-100",
			dot: "bg-yellow-500",
		},
		2: {
			bg: "bg-red-50",
			text: "text-red-700",
			border: "border-red-100",
			dot: "bg-red-500",
		},
	};

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
		<div className="max-w-md bg-white rounded-xl border-l-4 border-indigo-500 border-t border-r border-b border-gray-200 shadow-sm overflow-hidden hover:shadow-md hover:shadow-indigo-100 transition-all duration-300 transform hover:-translate-y-1 hover:border-indigo-300">
			<div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

			<div className="flex items-center justify-between p-5 border-b border-gray-100">
				<h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-200">
					{title}
				</h3>
				<div className="flex items-center group">
					<div className="relative">
						<input
							type="checkbox"
							id="isCompleted"
							className="peer sr-only"
							checked={isCompleted}
						/>
						<label
							for="isCompleted"
							className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white transition-all hover:border-indigo-500 hover:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:bg-indigo-500"
						>
							<svg
								className="h-3 w-3 text-white"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</label>
					</div>
					<span className="ml-2 text-sm text-gray-500 group-hover:text-indigo-500 transition-colors duration-200">
						Completed
					</span>
				</div>
			</div>

			<div className="p-5 bg-gradient-to-b from-white to-gray-50">
				<p className="text-gray-600 text-sm mb-4 leading-relaxed">
					{description}
				</p>

				<div className="flex flex-wrap gap-2 mt-3">
					<span
						className={`px-3 py-1 text-xs font-medium ${priorityClasses[priority].bg} ${priorityClasses[priority].text} rounded-full border ${priorityClasses[priority].border} hover:bg-red-100 hover:border-red-200 hover:text-red-800 hover:shadow-sm transition-all duration-200 cursor-pointer`}
					>
						<span
							className={`inline-block w-1.5 h-1.5 rounded-full ${priorityClasses[priority].dot} mr-1.5 align-middle`}
						></span>
						{formattedPriority} Priority
					</span>

					<div className="flex items-center text-xs text-gray-500 px-3 py-1 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 hover:border-gray-200 hover:text-gray-700 transition-all duration-200 cursor-pointer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-3.5 w-3.5 mr-1.5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>Due: May 25, 2025</span>
					</div>
				</div>
			</div>

			<div className="flex justify-end px-5 py-3 bg-gray-50 border-t border-gray-100">
				<button className="text-xs text-gray-500 hover:text-indigo-600 hover:underline transition-colors duration-200 mr-4">
					Edit
				</button>
				<button className="text-xs text-gray-500 hover:text-red-600 hover:underline transition-colors duration-200">
					Delete
				</button>
			</div>
		</div>
	);
}
