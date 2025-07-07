import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const { allTasks } = useContext(TaskContext);
  const [isDialog, setIsDialog] = useState(false);

  function handleDialog() {
    setIsDialog((prev) => {
      return !prev;
    });
  }

  console.log(allTasks);

  return (
    <section className="flex flex-row gap-4">
      {allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
      <button type="button" onClick={handleDialog}>
        Add New Task
      </button>
      {isDialog && (
        <Dialog onHandleClose={handleDialog}>
          <TaskForm onHandleClose={handleDialog} />
        </Dialog>
      )}
    </section>
  );
}
