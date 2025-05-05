import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoCardUI from "./UI/TodoCardUI";

export default function TodoList() {
	const { allTodos } = useContext(TodoContext);

	return (
		<section>
			<h1>All todos:</h1>
			{allTodos.map((todo) => {
				return <TodoCardUI key={todo.id} todo={todo} />;
			})}
		</section>
	);
}
