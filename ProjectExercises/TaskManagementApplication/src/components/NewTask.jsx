import { useRef } from "react";

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
    <section id="sec-new-task" className="max-w-[50%] m-auto">
      <form onSubmit={handleNewTask}>
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
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
}
