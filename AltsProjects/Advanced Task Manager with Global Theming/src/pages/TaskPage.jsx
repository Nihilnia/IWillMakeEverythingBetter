import { useContext, useEffect, useState } from "react";

import { TaskContext } from "../context/TaskContext";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TaskPage() {
  const { allTasks } = useContext(TaskContext);

  const [isDialog, setIsDialog] = useState(false);
  const [isMount, setIsMount] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 64rem)"); // 1024px

    const handleScreenChange = (e) => {
      setIsLargeScreen(e.matches);
    };

    // Set initial state
    setIsLargeScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleScreenChange);

    // Clean up event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

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
      } else if (task) {
        return {
          op,
          task,
        };
      } else {
        return false;
      }
    });
  }

  return (
    <div
      className={`flex max-w-[90%] flex-col items-center justify-center gap-x-8 gap-y-4 lg:flex-row ${isMount ? "pump-effect" : ""}`}
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
      {!isLargeScreen && !isDialog ? <TaskList onHandleToggleDialog={handleToggleDialog} /> : null}
      {isLargeScreen && <TaskList onHandleToggleDialog={handleToggleDialog} />}
      {isDialog?.op === "REMOVE_TASK" && (
        <section>
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
