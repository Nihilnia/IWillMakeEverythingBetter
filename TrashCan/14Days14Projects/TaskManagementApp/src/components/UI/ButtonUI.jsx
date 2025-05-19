export default function ButtonUI({
	btnType = "button",
	btnLibType,
	btnColor,
	btnTitle,
	btnSize = "md",
	...props
}) {
	const classes = `btn btn-${btnLibType} btn-${btnColor} btn-${btnSize}`;

	return (
		<button type={btnType} className={classes} {...props}>
			{btnTitle}
		</button>
	);
}
