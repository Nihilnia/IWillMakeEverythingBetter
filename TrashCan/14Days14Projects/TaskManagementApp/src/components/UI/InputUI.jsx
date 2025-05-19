export default function InputUI({ placeholder, type = "text", ...props }) {
	return (
		<input type={type} placeholder={placeholder} className="input" {...props} />
	);
}
