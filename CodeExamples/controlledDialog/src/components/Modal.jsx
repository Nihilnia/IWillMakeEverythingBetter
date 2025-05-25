export default function Modal({ title, children, isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<dialog open>
			<h2>{title}</h2>
			<div>{children}</div>
			<button type="button" onClick={onClose}>
				Okay
			</button>
		</dialog>
	);
}
