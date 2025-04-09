import TaskContextProvider from "./context/TaskContext";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

export default function App() {
  return (
    <TaskContextProvider>
      <NewTask />
      <TaskList />
    </TaskContextProvider>
  );
}
