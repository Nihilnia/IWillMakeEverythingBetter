import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function TaskList() {
  const { allTasks } = useContext(TaskContext);

  console.log(allTasks);

  return (
    <section className="flex flex-row gap-4">
      {allTasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}

      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
              <TaskForm operation="ADD_TASK" buttonTitle="Add New Task" />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
