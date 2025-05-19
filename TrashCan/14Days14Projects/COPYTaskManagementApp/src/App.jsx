import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
	return (
		<TaskContextProvider>
			<section id="sec-app" className="max-w-[70%] m-auto grid gap-4">
				<h2>Task Management</h2>
				<NewTask />
				<TaskList />
			</section>
		</TaskContextProvider>
	);
}
