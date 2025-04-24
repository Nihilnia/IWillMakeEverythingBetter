import { useEffect, useImperativeHandle, useRef, useState } from "react";

export default function DialogUI({
	ref,
	children,
	onShowDialog,
	onCloseDialog,
}) {
	const [isDialogOn, setIsDialogOn] = useState(false);

	const refDialog = useRef();

	function showDialog() {
		setIsDialogOn(true);

		if (onShowDialog) {
			onShowDialog();
		}
	}
	function closeDialog() {
		setIsDialogOn(false);

		if (onCloseDialog) {
			onCloseDialog();
		}
	}

	function handleCloseDialog() {
		setIsDialogOn(false);

		if (onCloseDialog) {
			onCloseDialog();
		}
	}

	useImperativeHandle(ref, () => {
		return {
			openDialog: showDialog,
			closeDialog: closeDialog,
		};
	});

	useEffect(() => {
		if (isDialogOn && refDialog.current) {
			refDialog.current.showModal();
		} else if (!isDialogOn && refDialog.current) {
			refDialog.current.close();
		}
	}, [isDialogOn]);

	return (
		<dialog ref={refDialog} onClose={handleCloseDialog}>
			{children}
		</dialog>
	);
}
