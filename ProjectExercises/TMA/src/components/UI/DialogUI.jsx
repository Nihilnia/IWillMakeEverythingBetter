import { useEffect, useImperativeHandle, useRef, useState } from "react";

export default function DialogUI({ ref, children, onOpen, onClose }) {
	const [isOpen, setIsOpen] = useState(false);

	const refDialog = useRef();

	function showDialog() {
		setIsOpen(true);

		if (onOpen) {
			onOpen();
		}
	}

	function closeDialog() {
		setIsOpen(false);

		if (onClose) {
			onClose();
		}
	}

	useImperativeHandle(ref, () => {
		return {
			showDialog: showDialog,
			closeDialog: closeDialog,
			isDialogOpen: isOpen,
		};
	});

	useEffect(() => {
		if (isOpen && refDialog.current) {
			refDialog.current.showModal();
		} else if (!isOpen && refDialog.current && refDialog.current.open) {
			refDialog.current.close();
		}
	}, [isOpen]);

	console.log("Current state of the dialog");
	console.log(isOpen);

	return <dialog ref={refDialog}>{children}</dialog>;
}
