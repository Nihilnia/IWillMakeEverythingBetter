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
    <section className="project-details">
      <div className="project-title">Project: {currentProject.title}</div>
      <div className="project-date">
        <strong>Due:</strong>
        {currentProject.date}
      </div>
      <div className="project-description">
        <strong>Description:</strong> {currentProject.description}
      </div>

      <div className="project-todos">
        <h3>Current todos:</h3>
        {currentProject.todo?.map((f, idx) => (
          <div key={idx}>
            <span>{f.name}</span>
            <button onClick={() => removeTodo(f.title)}>Remove</button>
          </div>
        ))}

        <div>
          <div>
            <label>New todo: </label>
          </div>
          <input type="text" onChange={handleTodoDetails} />
          <button onClick={() => sendNewTodo(currentProject.title)}>Add</button>
        </div>
      </div>
    </section>
  );
}
