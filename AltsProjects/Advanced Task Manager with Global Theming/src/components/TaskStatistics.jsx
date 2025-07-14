import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

import UseAnimations from "react-useanimations";
import activity from "react-useanimations/lib/activity";
import loading from "react-useanimations/lib/loading";
import checkCheckIcon from "/icons/check-check.svg";
import AnimatedSvg from "./animations/AnimatedSvg";

export default function TaskStatistics() {
  const { allTasksCount, completedTasksCount, waitingTasksCount } = useContext(TaskContext);

  return (
    <div className="text-amber-50 m-4">
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
  );
}
