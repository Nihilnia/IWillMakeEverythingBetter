import { useRef } from "react";
import TaskDetailsModal from "./TaskDetailsModal";
import InfoModal from "./InfoModal";

export default function TaskCard({ task, onEditTask }) {
  const refDetails = useRef();
  const refInfo = useRef();

  function handleOpenDetails() {
    refDetails.current.openDetails();
  }

  function handleRemove() {
    onEditTask("REMOVE_TASK", task);
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
          <button
            onClick={() => refInfo.current.openDialog()}
            className="bg-red-700 p-2 rounded-md text-[#000]"
          >
            Remove
          </button>
        </div>
      </div>

      <TaskDetailsModal task={task} ref={refDetails} onEditTask={onEditTask} />
      <InfoModal ref={refInfo}>
        <h4>Do you want to remove?</h4>
        <button onClick={handleRemove}>Yes</button>
        <form method="dialog">
          <button type="submit">Cancel</button>
        </form>
      </InfoModal>
    </section>
  );
}
