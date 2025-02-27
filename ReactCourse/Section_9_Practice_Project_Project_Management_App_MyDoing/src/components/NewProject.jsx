import { useState, useRef } from "react";

import Dialog from "./Dialog";

export default function NewProject({ handleNewProject }) {
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    date: "",
    todo: [],
  });

  const userMesssage = useRef();

  function handleProjectDetails(key, val) {
    setNewProject((prev) => ({ ...prev, [key]: val }));
  }

  function sendNewProject(e) {
    e.preventDefault();

    if (
      newProject.title.length === 0 ||
      newProject.description.length === 0 ||
      newProject.title.length === 0
    ) {
      userMesssage.current.openDialog();
    } else {
      handleNewProject(newProject);
    }
  }

  return (
    <>
      {<Dialog ref={userMesssage} />}
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
              onChange={(e) => handleProjectDetails("title", e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              className="form-item"
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
              onChange={(e) => handleProjectDetails("date", e.target.value)}
            />
          </div>
        </form>
      </section>
    </>
  );
}
