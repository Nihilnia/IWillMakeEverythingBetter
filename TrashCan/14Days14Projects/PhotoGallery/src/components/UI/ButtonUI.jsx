export default function ButtonUI({ title, ...props }) {
	return (
		<button
			type="button"
			{...props}
			className="bg-amber-400 py-1 px-1 rounded-sm text-black mb-4 hover:bg-amber-50"
		>
			{title}
		</button>
	);
}
