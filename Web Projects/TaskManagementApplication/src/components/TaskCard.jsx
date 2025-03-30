import { useRef } from "react";
import TaskDetailsModal from "./TaskDetailsModal";

export default function TaskCard({ task, onEditTask }) {
  const refDetails = useRef();

  function handleOpenDetails() {
    refDetails.current.openDetails();
  }

  return (
    <section className="sec-task-card">
      <div key={task.id} className="border-amber-300 border-2">
        <h2>Title: {task.title}</h2>
        <h2>Category: {task.category}</h2>
        <h2>Due Date: {task.dueDate}</h2>
        <div>
          <button
            onClick={handleOpenDetails}
            className="bg-cyan-400 p-2 rounded-md text-[#000]"
          >
            Edit/ Show Details
          </button>
        </div>
      </div>

      <TaskDetailsModal task={task} ref={refDetails} onEditTask={onEditTask} />
    </section>
  );
}
