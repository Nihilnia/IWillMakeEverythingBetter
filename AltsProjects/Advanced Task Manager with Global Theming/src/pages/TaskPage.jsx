import { useContext, useEffect, useState } from "react";

import { TaskContext } from "../context/TaskContext";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import DynamicBGImage from "../components/utilities/DynamicBGImage";
import DynamicGradient from "../components/utilities/DynamicGradient";

export default function TaskPage() {
  const { allTasks, dialog } = useContext(TaskContext);

  const [isMount, setIsMount] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const [isGradientBackground, setIsGradientBackground] = useState(true);
  const [gradientColors, setGradientColors] = useState(
    JSON.parse(localStorage.getItem("selectedGradient")) || ["a78bfa", "ec4899", "ef4444"]
  );
  const [userImage, setUserImage] = useState(null);

  function handleNewColors(newColors) {
    setGradientColors(newColors);
    setIsGradientBackground(true);
  }

  const gradientBackground = {
    backgroundImage: `linear-gradient(to bottom right, #${gradientColors[0]}, #${gradientColors[1]}, #${gradientColors[2]})`,
  };

  function HandleUploadedImage(image) {
    if (image) {
      setUserImage(image);
      setIsGradientBackground(false);
    } else {
      setUserImage(null);
      setIsGradientBackground(true);
    }
  }

  const backgroundImage = {
    backgroundImage: `url(${userImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const gradientOrImage = isGradientBackground ? gradientBackground : backgroundImage;

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
    <section
      id="app"
      className="min-h-screen relative flex items-center justify-center"
      style={gradientOrImage}
    >
      <div
        className={`flex max-w-[90%] flex-col items-center justify-center gap-x-8 gap-y-4 lg:flex-row ${isMount ? "pump-effect" : ""}`}
      >
        {dialog?.op === "EDIT_TASK" && <TaskForm taskToEdit={dialog?.task} op={dialog.op} />}
        {!isLargeScreen && !dialog ? <TaskList /> : null}
        {isLargeScreen && <TaskList />}
        {dialog?.op === "REMOVE_TASK" && <TaskForm taskToEdit={dialog?.task} op={dialog.op} />}
      </div>

      <div className="flex flex-col gap-y-1 absolute bottom-2 right-2">
        <DynamicGradient onHandleNewColors={handleNewColors} />
        <DynamicBGImage onHandleUploadedImage={HandleUploadedImage} />
      </div>
    </section>
  );
}
