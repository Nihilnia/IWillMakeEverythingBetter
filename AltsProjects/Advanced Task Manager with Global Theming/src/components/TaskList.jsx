import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./UI/TaskCard";
import TaskForm from "./TaskForm";
import Input from "./UI/Input";

import { Plus } from "lucide-react";

import "./TaskList.css";

import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import loading from "react-useanimations/lib/loading";

import checkCheckIcon from "/icons/check-check.svg";
import AnimatedSvg from "./animations/AnimatedSvg";

export default function TaskList() {
  const { allTasks, addTask, allTasksCount, completedTasksCount, waitingTasksCount } =
    useContext(TaskContext);
  const [isDialog, setIsDialog] = useState(false);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMount(true);
    }, 200);

    return () => {
      clearTimeout(timer);
      setIsMount(false);
    };
  }, [isDialog]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMount(true);
    }, 200);

    return () => {
      clearTimeout(timer);
      setIsMount(false);
    };
  }, [allTasks]);

  function handleToggleDialog(e, task) {
    const op = e?.currentTarget.dataset.opName;

    //If same task selected do not update the dialog; but if different op selected then update
    setIsDialog(() => {
      if (task === isDialog.task) {
        if (op !== isDialog.op) {
          return {
            op,
            task,
          };
        }
        return isDialog;
      }
      return {
        op,
        task,
      };
    });
  }

  function handleAddTask(e) {
    if (e.key === "Enter") {
      addTask({
        title: e.target.value,
      });
    }
  }

  return (
    <div
      className={`flex h-screen items-center justify-center gap-x-8 ${isMount ? "pump-effect" : ""}`}
    >
      {isDialog?.op === "EDIT_TASK" && (
        <section className="flex flex-col items-center justify-center">
          <TaskForm
            onHandleCloseDialog={handleToggleDialog}
            taskToEdit={isDialog?.task}
            op={isDialog.op}
          />
        </section>
      )}
      <section className="rounded-2xl border border-white/30 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col gap-4 p-4">
          <div>
            <h1 className="mb-2 font-bold text-2xl text-white">My Tasks</h1>
            <p className="text-sm text-white/70">Stay organized and productive</p>
            <div className="mt-4 flex items-center gap-x-5">
              <Input onKeyDown={handleAddTask} placeholder={"Add a new note.."} />
              <div className="rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-2 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
                <Plus />
              </div>
            </div>
          </div>
          {allTasks.map((task) => {
            return <TaskCard key={task.id} task={task} onHandleCloseDialog={handleToggleDialog} />;
          })}
        </div>
        <div className="text-amber-50">
          <div className="flex flex-col items-center justify-center">
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
