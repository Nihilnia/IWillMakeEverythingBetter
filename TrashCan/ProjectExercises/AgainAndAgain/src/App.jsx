import TaskList from "./components/TaskList";
import TaskContextProvider from "./Context/TaskContext";

export default function App() {
	return (
		<>
			<TaskContextProvider>
				<TaskList />
			</TaskContextProvider>
		</>
	);
}
