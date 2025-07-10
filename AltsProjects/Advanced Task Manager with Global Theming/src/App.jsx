import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
  return (
    <>
      <h2 className="border border-amber-300">ASDASD</h2>
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </>
  );
}
