import { useState } from "react";

export default function NewProject({ handleNewProject }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    date: "",
    todo: [],
  });

  function handleProjectDetails(key, val) {
    setNewProject((prev) => ({ ...prev, [key]: val }));
  }

  function sendNewProject(e) {
    e.preventDefault();

    handleNewProject(newProject);
  }

  return (
    <section>
      <form onSubmit={sendNewProject}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => handleProjectDetails("title", e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            onChange={(e) =>
              handleProjectDetails("description", e.target.value)
            }
          ></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            onChange={(e) => handleProjectDetails("date", e.target.value)}
          />
        </div>
        <div>
          <button>Cancel</button>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
}
