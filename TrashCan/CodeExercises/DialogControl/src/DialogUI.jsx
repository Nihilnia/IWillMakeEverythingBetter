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

	function handleClose() {
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
		if (isOpen && ref.current) {
			refDialog.current.showModal();
		} else if (!isOpen && ref.current) {
			refDialog.current.close();
		}
	}, [isOpen]);

	return (
		<dialog ref={refDialog} onClose={handleClose}>
			{children}
		</dialog>
	);
}
