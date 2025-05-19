import { useEffect } from "react";
import { useRef } from "react";
import { useImperativeHandle } from "react";
import { useState } from "react";

export default function DialogUI({
	ref,
	children,
	onDialogShow,
	onDialogClose,
}) {
	//Setting state to control Dialog,
	const [isOpen, setIsOpen] = useState(false);

	const refDialog = useRef();

	//Setting functions to expose to it' s parents
	function showDialog() {
		setIsOpen(true);
		//Giving a change to it' s parents to know what is the current state
		if (onDialogShow) {
			onDialogShow();
		}
	}

	function closeDialog() {
		setIsOpen(false);

		if (onDialogClose) {
			onDialogClose();
		}
	}

	function handleModalClose() {
		setIsOpen(false);

		if (onDialogClose) {
			onDialogClose();
		}
	}

	useImperativeHandle(ref, () => {
		return {
			showDialog: showDialog,
			closeDialog: closeDialog,
		};
	});

	useEffect(() => {
		//checking if the state is truthy and ref.current is defined
		if (isOpen && refDialog.current) {
			refDialog.current.showModal();
		} else if (!isOpen && refDialog.current) {
			refDialog.current.close();
		}
	}, [isOpen]);

	return (
		<dialog ref={refDialog} onClose={handleModalClose}>
			{children}
		</dialog>
	);
}
