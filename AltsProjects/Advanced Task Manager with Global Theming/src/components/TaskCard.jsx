import { useState } from "react";

import Dialog from "./UI/Dialog";
import TaskForm from "./TaskForm";

export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;
  const [operationChoice, setOperationChoice] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function handleUserChoice(e) {
    setOperationChoice(e.target.name);
  }

  function handleDialogToggle() {
    setIsDialogOpen((prev) => {
      return !prev;
    });
  }

  console.log("operationChoice");
  console.log(operationChoice);

  return (
    <div className="bg-amber-600 rounded-lg p-4 hover:bg-amber-200">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{dueDate}</h2>
      <h2>{priority}</h2>
      <h2>{isCompleted}</h2>
      <button
        type="button"
        name="REMOVE_TASK"
        onClick={(e) => {
          handleUserChoice(e);
          handleDialogToggle();
        }}
      >
        Remove
      </button>
      <button
        type="button"
        name="EDIT_TASK"
        onClick={(e) => {
          handleUserChoice(e);
          handleDialogToggle();
        }}
      >
        Edit
      </button>
      {isDialogOpen && (
        <Dialog onHandleClose={handleDialogToggle}>
          <TaskForm
            operation={operationChoice}
            task={task}
            onHandleClose={handleDialogToggle}
            buttonTitle={(operationChoice === "EDIT_TASK" ? "Edit" : "Remove") + " Task"}
          />
        </Dialog>
      )}
    </div>
  );
}
