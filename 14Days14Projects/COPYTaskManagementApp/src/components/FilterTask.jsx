export default function FilterTask({ onSetFilter }) {
	function handleSetFilter(e) {
		onSetFilter(e.target.value);
	}

	return (
		<div className="relative inline-flex">
			<span className="inline-flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">
				<button
					type="button"
					className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					Filter by
				</button>

				<button
					type="button"
					className="px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
					aria-label="Menu"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="size-4"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m19.5 8.25-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</button>
			</span>

			<div
				role="menu"
				className="absolute end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm dark:border-gray-600 dark:bg-gray-800"
			>
				<a
					href="#"
					className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
					role="menuitem"
					onClick={() => handleSetFilter("default")}
				>
					All of them
				</a>

				<a
					href="#"
					className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
					role="menuitem"
					onClick={() => handleSetFilter("completed")}
				>
					Completed
				</a>

				<a
					href="#"
					className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white"
					role="menuitem"
					onClick={() => handleSetFilter("notCompleted")}
				>
					Not-completed
				</a>
			</div>
		</div>
	);
}
