import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context/TodoContext";

export default function App() {
	return (
		<TodoContextProvider>
			<h2>Hello world.</h2>
			<NewTodo />
			<TodoList />
		</TodoContextProvider>
	);
}
