export default function ButtonUI({
	btnType = "button",
	btnLibType,
	btnColor,
	btnTitle,
	btnSize = "md",
}) {
	const classes = `btn btn-${btnLibType === "soft" ? "soft" : ""} btn-${btnColor} btn-${btnSize}`;

	return (
		<button type={btnType} className={classes}>
			{btnTitle}
		</button>
	);
}
