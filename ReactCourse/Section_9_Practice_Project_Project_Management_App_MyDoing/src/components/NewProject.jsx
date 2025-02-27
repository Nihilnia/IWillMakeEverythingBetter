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
    <section className="form-new-project">
      <form onSubmit={sendNewProject}>
        <div className="form-actions">
          <button type="button" className="btn-generic">
            Cancel
          </button>
          <button type="submit" className="btn-generic">
            Add
          </button>
        </div>
        <div>
          <label>Title:</label>
          <input
            className="form-item"
            type="text"
            required
            onChange={(e) => handleProjectDetails("title", e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            className="form-item"
            required
            onChange={(e) =>
              handleProjectDetails("description", e.target.value)
            }
          ></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input
            className="form-item"
            type="date"
            required
            onChange={(e) => handleProjectDetails("date", e.target.value)}
          />
        </div>
      </form>
    </section>
  );
}
