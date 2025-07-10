import TaskList from "./components/TaskList";
import TaskContextProvider from "./context/TaskContext";

import "./app.css";

export default function App() {
  return (
    <>
      <TaskContextProvider>
        <TaskList />
      </TaskContextProvider>
    </>
  );
}
