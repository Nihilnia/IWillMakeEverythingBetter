import { useRef } from "react";
import ButtonUI from "./ButtonUI";

export default function TaskFormUI({ onGetFormData, btnTitle = "Add" }) {
	const refTitle = useRef();
	const refDesc = useRef();
	const refDueDate = useRef();

	function handleForm() {
		const formData = {
			title: refTitle.current.value,
			description: refDesc.current.value,
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
					<input type="text" placeholder="Description" ref={refTitle} />
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
					btnTitle="Add"
					btnSize="sm"
				/>
			</div>
		</form>
	);
}
