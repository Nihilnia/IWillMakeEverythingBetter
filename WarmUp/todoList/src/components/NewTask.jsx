import { useRef } from "react";

export default function NewTask({ taskOps }) {
	const refTitle = useRef();
	const refDescription = useRef();

	return (
		<section>
			<div>
				<input type="text" placeholder="New todo" ref={refTitle} />
				<input type="text" placeholder="Description" ref={refDescription} />
			</div>
			<div>
				<button
					type="button"
					onClick={() => {
						taskOps("NEW_TASK", undefined, {
							title: refTitle.current.value,
							description: refDescription.current.value,
						});
					}}
				>
					Add
				</button>
			</div>
		</section>
	);
}
