import { useState } from "react";

export default function ProjectDetails({
  currentProject,
  handleNewTodo,
  handleRemoveTodo,
}) {
  const [newTodo, setNewTodo] = useState();

  function handleTodoDetails(e) {
    setNewTodo(e.target.value);
  }

  function sendNewTodo(prjTitle) {
    handleNewTodo(prjTitle, newTodo);
  }

  function removeTodo(todoId) {
    handleRemoveTodo(currentProject.title, todoId);
  }

  return (
    <section>
      <h2>{currentProject.title}</h2>
      <h2>{currentProject.description}</h2>
      <h2>{currentProject.date}</h2>
      <div>
        <h3>Current todos:</h3>
        {currentProject.todo?.map((f, idx) => (
          <div key={idx}>
            <span>{f.name}</span>
            <button onClick={() => removeTodo(f.title)}>Remove</button>
          </div>
        ))}
        <div>
          <label>New todo: </label>
          <input type="text" onChange={handleTodoDetails} />
          <button onClick={() => sendNewTodo(currentProject.title)}>Add</button>
        </div>
      </div>
    </section>
  );
}
