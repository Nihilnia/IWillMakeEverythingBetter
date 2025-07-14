import { useContext, useEffect, useState } from "react";

import { TaskContext } from "../context/TaskContext";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function TaskPage() {
  const { allTasks, dialog } = useContext(TaskContext);

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
  }, [dialog]);

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

  return (
    <div
      className={`flex max-w-[90%] flex-col items-center justify-center gap-x-8 gap-y-4 lg:flex-row ${isMount ? "pump-effect" : ""}`}
    >
      {dialog?.op === "EDIT_TASK" && <TaskForm taskToEdit={dialog?.task} op={dialog.op} />}
      {!isLargeScreen && !dialog ? <TaskList /> : null}
      {isLargeScreen && <TaskList />}
      {dialog?.op === "REMOVE_TASK" && <TaskForm taskToEdit={dialog?.task} op={dialog.op} />}
    </div>
  );
}
