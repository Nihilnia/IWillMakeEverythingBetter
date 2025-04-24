import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
	return (
		<TaskContextProvider>
			<h2>Task Management</h2>
			<NewTask />
			<TaskList />
		</TaskContextProvider>
	);
}
