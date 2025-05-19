import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./store/TaskContext";

export default function App() {
	return (
		<TaskContextProvider>
			<NewTask />
			<TaskList />
		</TaskContextProvider>
	);
}
