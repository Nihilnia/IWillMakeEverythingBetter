import { useContext, useRef } from "react";
import { TodoContext } from "../context/TodoContext";

export default function NewTodo() {
	const { addTodo } = useContext(TodoContext);

	const refTitle = useRef();
	const refDescription = useRef();

	function handleNewTodo() {
		const newTodo = {
			title: refTitle.current.value,
			description: refDescription.current.value,
		};
		addTodo(newTodo);
	}

	return (
		<section>
			<div>
				<input type="text" ref={refTitle} placeholder="Title" />
				<input type="text" ref={refDescription} placeholder="Description" />
			</div>
			<div>
				<button type="button" onClick={handleNewTodo}>
					Add
				</button>
			</div>
		</section>
	);
}
