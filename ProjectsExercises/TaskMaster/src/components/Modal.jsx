import { useEffect, useImperativeHandle, useRef, useState } from "react";

export default function Modal({ ref, children }) {
	const refDialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			showDialog() {
				refDialog.current.showModal();
			},
			closeDialog() {
				refDialog.current.close();
			},
		};
	});
	return <dialog ref={refDialog}>{children}</dialog>;
}
