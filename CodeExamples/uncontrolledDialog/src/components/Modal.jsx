import { useImperativeHandle, useRef } from "react";

export default function Modal({ title, children, ref }) {
	const refDialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			showYourself() {
				refDialog.current.showModal();
			},
			hideYourself() {
				refDialog.current.close();
			},
		};
	});

	function handleCloseDialog() {
		refDialog.current.close();
	}

	return (
		<dialog ref={refDialog} onClose={handleCloseDialog}>
			<h2>{title}</h2>
			<div>{children}</div>
			<button type="button" onClick={handleCloseDialog}>
				Close
			</button>
		</dialog>
	);
}
