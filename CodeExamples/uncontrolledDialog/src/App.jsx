import { useRef } from "react";
import Modal from "./components/Modal";

export default function App() {
	const refDialog = useRef();

	function handleOpenDialog() {
		refDialog.current.showYourself();
	}

	return (
		<section>
			<button type="button" onClick={handleOpenDialog}>
				Open Dialog
			</button>
			<Modal ref={refDialog} title="Hello World">
				<div>
					<span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
						eveniet architecto animi, blanditiis quaerat in excepturi nostrum id
						odit, rerum tempore odio est! Dolor, sunt minima. Officia, eaque!
						Dolorum, impedit.
					</span>
				</div>
			</Modal>
		</section>
	);
}
