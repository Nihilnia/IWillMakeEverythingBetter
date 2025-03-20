import { useRef } from "react";

export default function NewTask({ onAddTask }) {
  const refTitle = useRef(null);

  function handleNewTask(e) {
    e.preventDefault();

    onAddTask(refTitle.current.value);
  }

  return (
    <section>
      <form onSubmit={handleNewTask}>
        <div>
          <div>
            <label>Title:</label>
            <input
              type="text"
              ref={refTitle}
              className="bg-[#fff] text-[#000]"
            />
          </div>
          <button type="submit" className="bg-[orange] px-2 rounded-sm">
            Add
          </button>
        </div>
      </form>
    </section>
  );
}
