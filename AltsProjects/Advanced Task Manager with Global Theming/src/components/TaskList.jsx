import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";

export default function TaskList() {
  const { allTasks, allTasksCount } = useContext(TaskContext);

  const [isDialog, setIsDialog] = useState(false);

  function handleToggleDialog() {
    setIsDialog((prev) => {
      return !prev;
    });
  }

  return (
    <section>
      {allTasksCount === 0 && (
        <button type="button" onClick={handleToggleDialog}>
          Add New Task
        </button>
      )}
      {allTasksCount > 0 &&
        allTasks.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      {isDialog && (
        <Dialog onHandleCloseDialog={handleToggleDialog}>
          <TaskForm buttonTitle={"Add New Task"} onHandleCloseDialog={handleToggleDialog} />
        </Dialog>
      )}
    </section>
  );
}
