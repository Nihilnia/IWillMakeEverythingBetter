import { useRef } from "react";
import ButtonUI from "./ButtonUI";

export default function TaskFormUI({ onGetFormData, btnTitle = "Add" }) {
	const refTitle = useRef();
	const refDescription = useRef();
	const refDueDate = useRef();

	function handleForm(e) {
		e.preventDefault();

		const formData = {
			title: refTitle.current.value,
			description: refDescription.current.value,
			dueDate: refDueDate.current.value,
		};

		onGetFormData(formData);
	}

	return (
		<form onSubmit={handleForm} className="flex flex-col gap-2">
			<div>
				<label className="input">
					<span className="label">Task:</span>
					<input type="text" placeholder="Title" ref={refTitle} />
				</label>
			</div>
			<div>
				<label className="input">
					<span className="label">Description:</span>
					<input type="text" placeholder="Description" ref={refDescription} />
				</label>
			</div>
			<div>
				<label className="input">
					<span className="label">Due Date:</span>
					<input type="date" ref={refDueDate} />
				</label>
			</div>
			<div>
				<ButtonUI
					btnType="submit"
					btnLibType="soft"
					btnColor="accent"
					btnTitle={btnTitle}
					btnSize="sm"
				/>
			</div>
		</form>
	);
}
