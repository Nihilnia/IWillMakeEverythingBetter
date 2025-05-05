import { useContext, useState } from "react";
import { TodoContext } from "../../context/TodoContext";

export default function TodoCardUI({ todo }) {
	const { id, title, description, isCompleted } = todo;
	const { editTodo, removeTodo } = useContext(TodoContext);

	const [isHover, setIsHover] = useState(false);

	function handleToggleCompleted() {
		editTodo(id);
	}
	function handleRemoveTodo() {
		removeTodo(id);
	}

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<h2>Title: {title}</h2>
			<h2>Description: {description}</h2>
			<h4>Completed: {isCompleted ? "Yes" : "No"}</h4>
			{isHover && (
				<div>
					<button type="button" onClick={handleToggleCompleted}>
						Mark as {isCompleted ? "uncompleted" : "completed"}
					</button>
					<button type="button" onClick={handleRemoveTodo}>
						Remove
					</button>
				</div>
			)}
		</div>
	);
}
