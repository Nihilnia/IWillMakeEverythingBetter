import TaskList from "./components/TaskList";
import { TaskContextProvider } from "./context/TasksContext";

export default function App() {
  return (
    <TaskContextProvider>
      <h2>asdas</h2>
      <TaskList />
    </TaskContextProvider>
  );
}
