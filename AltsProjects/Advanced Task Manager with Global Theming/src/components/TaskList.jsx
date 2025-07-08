import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import Dialog from "./UI/Dialog";
import TaskForm from "./TaskForm";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

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
      <Button onClick={handleDialog} variant="outline">
        Button
      </Button>
      {isDialog && (
        <Dialog onHandleClose={handleDialog}>
          <TaskForm onHandleClose={handleDialog} operation="ADD_TASK" buttonTitle="Add New Task" />
        </Dialog>
      )}
    </section>
  );
}
