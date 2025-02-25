import { useState } from "react";

export default function NewProject({ handleProjects }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
    date: "",
    todo: [],
  });

  function handleProject(key, val) {
    setProject((prev) => {
      return { ...prev, [key]: val };
    });
  }

  function sendProject(e) {
    e.preventDefault();
    handleProjects(project.title, project.description, project.date);
  }

  return (
    <section id="new-project">
      <form onSubmit={sendProject}>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={(e) => handleProject("title", e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e) => handleProject("description", e.target.value)}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            onChange={(e) => handleProject("date", e.target.value)}
          />
        </div>
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </form>
    </section>
  );
}
