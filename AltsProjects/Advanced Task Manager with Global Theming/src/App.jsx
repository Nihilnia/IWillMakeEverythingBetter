import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskContextProvider>
      <TaskList />
    </TaskContextProvider>
  );
}
