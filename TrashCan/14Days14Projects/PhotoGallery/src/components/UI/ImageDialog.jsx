import { useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ImageDialog({ ref, imgSrc, imgAlt }) {
	const [isOpen, setIsOpen] = useState(false);

	const refDialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			openDialog() {
				setIsOpen(true);
				refDialog.current?.showModal();
			},
			closeDialog() {
				setIsOpen(false);
				refDialog.current?.close();
			},
		};
	});

	function handleClose() {
		setIsOpen(false);
	}

	return createPortal(
		isOpen && (
			<dialog
				ref={refDialog}
				onClose={handleClose}
				className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
			>
				<div className="p-4 ">
					<img src={imgSrc} alt={imgAlt} />
				</div>
			</dialog>
		),
		document.getElementById("modal"),
	);
}
