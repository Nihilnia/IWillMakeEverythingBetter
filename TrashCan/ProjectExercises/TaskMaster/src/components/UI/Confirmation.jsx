export default function Confirmation({ onConfirm }) {
	return (
		<div>
			<h2>Are you sure?</h2>
			<button type="button" onClick={onConfirm}>
				Yes
			</button>
			<button type="button">Cancel</button>
		</div>
	);
}
