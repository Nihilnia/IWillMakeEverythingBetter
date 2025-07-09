import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./UI/TaskForm";
import Button from "./UI/Button";

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center gap-3">
            <h2>You do not have any task yet.</h2>
            <Button type="button" onClick={handleToggleDialog}>
              Start with adding one!
            </Button>
          </div>
        </div>
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
