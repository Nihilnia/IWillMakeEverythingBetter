import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskContextProvider>
      <h2>asd</h2>
      <TaskList />
    </TaskContextProvider>
  );
}
