import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import Dialog from "./UI/Dialog";

export default function TaskList() {
  const { allTasks } = useContext(TaskContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleDialog() {
    setIsOpen((prev) => {
      return !prev;
    });
  }

  return (
    <section className="flex flex-row gap-4">
      {allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
      <button type="button" onClick={handleToggleDialog}>
        Add new task
      </button>
      {isOpen && (
        <Dialog onHandleClose={handleToggleDialog}>
          <TaskForm operation="ADD_TASK" onHandleClose={handleToggleDialog} />
        </Dialog>
      )}
    </section>
  );
}
