import { useState, useRef } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [allProjects, setAllProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState();

  function handleCurrentPage(page) {
    setCurrentPage(page);
  }

  function handleNewProject(newProject) {
    setAllProjects((prev) => [...prev, newProject]);
  }

  function handleNewTodo(prjTitle, newTodo) {
    setAllProjects((prev) => {
      const updated = prev.map((f) =>
        f.title === prjTitle
          ? { ...f, todo: [...f.todo, { id: Math.random(), name: newTodo }] }
          : f
      );

      setCurrentProject(updated.find((f) => f.title === prjTitle));

      return updated;
    });
  }

  function handleRemoveTodo(prjTitle, todoId) {
    setAllProjects((prev) => {
      const updated = prev.map((f) => {
        if (f.title === prjTitle) {
          return { ...f, todo: f.todo.splice(todoId, 1) };
        } else {
          return f;
        }
      });

      setCurrentProject(updated.find((f) => f.title === prjTitle));

      return updated;
    });
  }

  function handleCurrentProject(prj) {
    console.log("Incoming project");
    console.log(prj);

    setCurrentProject(prj);
    setCurrentPage("ProjectDetails");
  }

  console.log(allProjects);

  return (
    <>
      <Navbar />
      <section id="container-main">
        <div className="left-side">
          <Sidebar
            allProjects={allProjects}
            handleCurrentPage={handleCurrentPage}
            handleCurrentProject={handleCurrentProject}
          />
        </div>
        <div className="right-side">
          <MainContent
            currentPage={currentPage}
            currentProject={currentProject}
            handleCurrentPage={handleCurrentPage}
            handleNewProject={handleNewProject}
            handleNewTodo={handleNewTodo}
            handleRemoveTodo={handleRemoveTodo}
          />
        </div>
      </section>
    </>
  );
}
