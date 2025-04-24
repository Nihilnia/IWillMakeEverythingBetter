export default function BadgeUI({ badgeType, title }) {
	const classes =
		badgeType === "success"
			? "text-green-700 ring-green-600/20"
			: "text-red-700 ring-red-600/10";

	return (
		<span
			className={`inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium ring-1 ring-inset ${classes}`}
		>
			{title}
		</span>
	);
}
