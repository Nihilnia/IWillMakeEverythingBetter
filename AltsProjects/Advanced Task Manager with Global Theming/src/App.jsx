import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

import "./app.css";

export default function App() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </section>
  );
}
