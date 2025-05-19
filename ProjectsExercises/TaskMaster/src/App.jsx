import TaskList from "./components/TaskList";
import TaskContextProvider from "./Context/TaskContext";

export default function App() {
	return (
		<>
			<h2>Hello world</h2>
			<TaskContextProvider>
				<TaskList />
			</TaskContextProvider>
		</>
	);
}
