import TaskPage from "./pages/TaskPage";

import "./app.css";
import TaskContextProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskContextProvider>
      <TaskPage />
    </TaskContextProvider>
  );
}
