import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

export default function NewTask() {
  const ctxValues = useContext(TaskContext);
  const { handleNewTask } = ctxValues;

  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  function handleAddNewTask() {
    const newTask = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      dueDate: refDueDate.current.value,
    };

    handleNewTask(newTask);
  }

  return (
    <section>
      <div>
        <label>Title:</label>
        <input type="text" ref={refTitle} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" ref={refDescription} />
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" ref={refDueDate} />
      </div>
      <div>
        <button onClick={handleAddNewTask}>Add</button>
      </div>
    </section>
  );
}
