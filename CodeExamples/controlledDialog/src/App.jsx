import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function handleShowModal() {
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	return (
		<section>
			<button type="button" onClick={handleShowModal}>
				Open Modal
			</button>
			<Modal
				title="Hello World"
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sunt
						dignissimos accusantium ipsa, placeat iure ratione porro nulla
						voluptatum iste asperiores ad harum? Quam sit adipisci expedita
						ipsam numquam ab.
					</p>
				</div>
			</Modal>
		</section>
	);
}
