import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./UI/TaskCard";
import Button from "./UI/Button";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const { allTasks, addTask } = useContext(TaskContext);
  const [isDialog, setIsDialog] = useState(false);

  function handleToggleDialog(e, task) {
    const op = e?.currentTarget.dataset.opName;

    //User want to make change on a task, not adding op
    if (task) {
      setIsDialog({
        op,
        task,
      });
    } else if (op) {
      setIsDialog({
        op,
      });
    } else {
      setIsDialog((prev) => {
        return !prev;
      });
    }
  }

  return (
    <div className="flex">
      {isDialog?.op === "ADD_TASK" && (
        <section className="flex flex-col items-center justify-center">
          <TaskForm onHandleCloseDialog={handleToggleDialog} />
        </section>
      )}
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-row">
          {allTasks.map((task) => {
            return <TaskCard key={task.id} task={task} onHandleCloseDialog={handleToggleDialog} />;
          })}
        </div>
        <div>
          <Button
            type={"button"}
            title={"add"}
            onClick={handleToggleDialog}
            data-op-name="ADD_TASK"
          />
        </div>
      </section>
      {isDialog?.op === "EDIT_TASK" && (
        <section className="flex flex-col items-center justify-center">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            taskToEdit={isDialog?.task}
            op={isDialog.op}
          />
        </section>
      )}
      {isDialog?.op === "REMOVE_TASK" && (
        <section className="flex flex-col items-center justify-center">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            taskToEdit={isDialog?.task}
            op={isDialog.op}
          />
        </section>
      )}
    </div>
  );
}
