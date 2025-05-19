import { useRef } from "react";
import DialogUI from "./DialogUI";

export default function App() {
	const refDialog = useRef();

	function handleOpenDialog() {
		refDialog.current.showDialog();
	}
	function handleCloseDialog() {
		refDialog.current.closeDialog();
	}

	return (
		<section>
			<div>
				<button type="button" onClick={handleOpenDialog}>
					Open Dialog
				</button>
				<button type="button" onClick={handleCloseDialog}>
					Close Dialog
				</button>
			</div>
			{
				<DialogUI
					ref={refDialog}
					onOpen={() => {
						console.log("Dialog opened.");
					}}
					onClose={() => {
						console.log("Dialog closed.");
					}}
				>
					<h2>Okay, dialog is on.</h2>
					<button type="button" onClick={handleCloseDialog}>
						Close Dialog
					</button>
				</DialogUI>
			}
		</section>
	);
}
