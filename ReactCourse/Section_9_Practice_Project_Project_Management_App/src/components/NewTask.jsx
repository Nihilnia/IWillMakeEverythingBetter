import { useRef, useState } from "react";

export default function newTask({ onAddNewTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  //! Just.. tried : D
  // function handleEvents(eventName, e) {
  //   if (eventName === "change") {
  //     setEnteredTask(e.target.value);
  //   } else if (eventName === "click") {
  //     onAddNewTask(enteredTask);
  //     setEnteredTask("");
  //   }
  // }

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }
  function handleClick() {
    onAddNewTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
