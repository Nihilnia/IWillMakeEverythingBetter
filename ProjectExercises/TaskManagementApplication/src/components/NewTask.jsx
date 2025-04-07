import { useEffect, useRef, useState } from "react";
import NotificationUI from "./UI/NotificationUI";

export default function NewTask({ onHandleNewTask }) {
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  function handleNewTask(e) {
    e.preventDefault();

    const newTask = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      dueDate: refDueDate.current.value,
    };

    onHandleNewTask(newTask);
  }

  return (
    <section id="sec-new-task">
      <form onSubmit={handleNewTask}>
        <div>
          <label>Title:</label>
          <input type="text" ref={refTitle} />
        </div>
        <div>
          <label>description:</label>
          <input type="text" ref={refDescription} />
        </div>
        <div>
          <label>dueDate:</label>
          <input type="date" ref={refDueDate} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
}
