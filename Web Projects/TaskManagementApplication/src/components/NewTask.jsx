import { useRef } from "react";

export default function NewTask({ onAddTask }) {
  const refTitle = useRef();
  const refCategory = useRef();
  const refDueDate = useRef();

  function handleSendNewTask(e) {
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      title: refTitle.current.value,
      category: refCategory.current.value,
      dueDate: refDueDate.current.value,
    };

    onAddTask("NEW_TASK", newTask);
  }

  return (
    <section id="sec-new-task">
      <form onSubmit={handleSendNewTask}>
        <div>
          <label>New Task:</label>
          <input type="text" className="bg-amber-400" ref={refTitle} />
        </div>
        <h4>Optional:</h4>
        <div>
          <label>Category:</label>
          <input type="text" className="bg-amber-400" ref={refCategory} />
        </div>
        <div>
          <label>Due Date:</label>
          <input type="date" className="bg-amber-400" ref={refDueDate} />
        </div>
        <div>
          <button type="submit" className="bg-amber-950 text-amber-100">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
