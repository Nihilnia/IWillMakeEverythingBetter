export default function ButtonUI({ title, color, ...props }) {
	const cssClasses = {
		red: {
			border: "border-red-300",
			bg: "bg-red-800",
		},
		blue: {
			border: "border-blue-300",
			bg: "bg-blue-800",
		},
		yellow: {
			border: "border-yellow-300",
			bg: "bg-yellow-300",
		},
	};

	const borderClass = cssClasses[color]?.border || "border-slate-300";
	const bgClass = cssClasses[color]?.bg || "bg-slate-800";

	return (
		<button
			className={`px-3 py-1 bg-white text-slate-800 rounded-lg font-medium border-2 ${borderClass} hover:border-slate-800 transition-all duration-300 relative group`}
			{...props}
		>
			<span className="group-hover:text-slate-900">{title}</span>
			<span
				className={`absolute bottom-0 left-0 w-0 h-1 ${bgClass} transition-all duration-300 group-hover:w-full`}
			></span>
		</button>
	);
}
