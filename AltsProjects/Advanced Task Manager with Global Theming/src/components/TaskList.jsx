import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./UI/TaskCard";
import TaskForm from "./TaskForm";
import Input from "./UI/Input";

import { Plus } from "lucide-react";

import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import loading from "react-useanimations/lib/loading";
import arrowUp from "react-useanimations/lib/arrowUp";

import checkCheckIcon from "/icons/check-check.svg";
import AnimatedSvg from "./animations/AnimatedSvg";

export default function TaskList() {
  const { allTasks, allTasksCount, completedTasksCount, waitingTasksCount } =
    useContext(TaskContext);
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
    <div className="flex items-center justify-center h-screen gap-x-8">
      {isDialog?.op === "EDIT_TASK" && (
        <section className="flex flex-col items-center justify-center">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            taskToEdit={isDialog?.task}
            op={isDialog.op}
          />
        </section>
      )}
      <section className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-2xl shadow-2xl p-6">
        <div className="flex flex-col gap-4 p-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">My Tasks</h1>
            <p className="text-white/70 text-sm">Stay organized and productive</p>
            <div className="flex items-center gap-x-5 mt-4">
              <Input />
              <div
                className="bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-2 text-amber-50"
              >
                <Plus />
              </div>
            </div>
          </div>
          {allTasks.map((task) => {
            return <TaskCard key={task.id} task={task} onHandleCloseDialog={handleToggleDialog} />;
          })}
        </div>
        <div className="text-amber-50">
          <div className="flex flex-col justify-center items-center">
            <UseAnimations animation={activity} size={30} strokeColor="white" />
            <p>{allTasksCount} tasks total</p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <AnimatedSvg src={checkCheckIcon} alt="Check Icon" className="pulse-sway" />
              <p>Completed: {completedTasksCount}</p>
            </div>
            <div className="flex flex-col items-center">
              <UseAnimations animation={loading} size={24} strokeColor="white" />
              <p>Waiting: {waitingTasksCount}</p>
            </div>
          </div>
        </div>
      </section>
      {isDialog?.op === "REMOVE_TASK" && (
        <section className="">
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
