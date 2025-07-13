import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

import "./app.css";
import Utilities from "./components/Utilities";

export default function App() {
  return (
    <section
      id="app"
      className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 relative flex items-center justify-center"
    >
      <TaskContextProvider>
        <TaskList />
        <Utilities />
      </TaskContextProvider>
    </section>
  );
}
