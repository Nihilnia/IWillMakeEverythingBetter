import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskContextProvider>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-screen w-full flex items-center justify-center rounded-lg shadow-lg">
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
