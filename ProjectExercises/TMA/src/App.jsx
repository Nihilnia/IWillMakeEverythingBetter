import TaskList from "./components/TaskList";
import TaskContextProvider from "./store/TaskContext";

export default function App() {
	return (
		<TaskContextProvider>
			<TaskList />
		</TaskContextProvider>
	);
}
