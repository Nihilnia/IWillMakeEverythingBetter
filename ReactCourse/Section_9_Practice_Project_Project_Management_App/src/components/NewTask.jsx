import { useRef } from "react";

export default function newTask({ onAddNewTask }) {
  const newTask = useRef();

  function handleNewTask() {
    onAddNewTask(newTask.current.value);
  }

  return (
    <div>
      <input type="text" ref={newTask} />
      <button onClick={handleNewTask}>Add Task</button>
    </div>
  );
}
