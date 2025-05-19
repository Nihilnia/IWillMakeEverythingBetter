import { useImperativeHandle, useRef } from "react";

export default function DialogConfirmUI({ task, onRemoveTask, ref }) {
	const refDialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			showDialog() {
				refDialog.current.showModal();
			},
		};
	});

	function handleUserConfirmend() {
		onRemoveTask(task.id);
		refDialog.current.close();
	}
	function handleUserCancelled() {
		refDialog.current.close();
	}

	const render = (
		<dialog ref={refDialog}>
			<h2>Are you sure?</h2>
			<div>
				<button type="button" onClick={handleUserConfirmend}>
					Yes
				</button>
				<button type="button" onClick={handleUserCancelled}>
					No
				</button>
			</div>
		</dialog>
	);

	return render;
}
