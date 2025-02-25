import { useState } from "react";

export default function ProjectDetails({ selectedProject, handleTodos }) {
  const [newTodo, setNewTodo] = useState("");

  function sendNewTodo() {
    handleTodos(selectedProject.title, newTodo);
  }

  return (
    <>
      <div>
        <h2>Name: {selectedProject.title}</h2>
        <h2>Name: {selectedProject.description}</h2>
        <h2>Name: {selectedProject.date}</h2>
      </div>
      <div>
        <h2>Tasks:</h2>
        {selectedProject.todo.map((f, index) => {
          return <h4 key={index}>{f}</h4>;
        })}
        <div>
          <label>Add task</label>
          <input type="text" onChange={(e) => setNewTodo(e.target.value)} />
          <button onClick={sendNewTodo}>Add</button>
        </div>
        {selectedProject.tasks?.map((task) => {
          return <p>{task.name}</p>;
        })}
      </div>
    </>
  );
}
