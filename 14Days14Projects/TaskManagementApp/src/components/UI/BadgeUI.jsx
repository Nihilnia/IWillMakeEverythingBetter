export default function BadgeUI({
	badgeType,
	badgeColor = "accent",
	badgeTitle,
	...props
}) {
	//badgeType- badge-soft - badge-accent
	const classes = `badge ${badgeType === "soft" ? "badge-soft" : ""}  badge-${badgeColor} h-auto cursor-pointer`;

	return (
		<div className={classes} {...props}>
			{badgeTitle}
		</div>
	);
}
