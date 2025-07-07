import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./TaskForm";

import { Plus } from "lucide-react";

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
      <button
        type="button"
        onClick={handleDialog}
        className="flex flex-row items-center bg-blue-600 rounded-sm px-3 py-1 hover:bg-blue-00"
      >
        <Plus className="w-4 h-4 mr-2" />
        Create Task
      </button>
      {isDialog && (
        <Dialog onHandleClose={handleDialog}>
          <TaskForm onHandleClose={handleDialog} operation="ADD_TASK" buttonTitle="Add New Task" />
        </Dialog>
      )}
    </section>
  );
}
