import { useState } from "react";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [projects, setProjects] = useState([
    {
      title: "aa",
      description: "aaa",
      date: "",
      todo: [],
    },
    {
      title: "bb",
      description: "bbb",
      date: "",
      todo: [],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState("");

  function handleCurrentPage(page, project) {
    setCurrentPage(page);

    if (page === "ProjectDetails") {
      setSelectedProject(project);
    }
  }

  function handleProjects(title, description, date) {
    setProjects((prev) => {
      return [
        ...prev,
        { title: title, description: description, date: date, todo: [] },
      ];
    });
  }

  function handleTodos(title, todo) {
    setProjects((prev) => {
      const updatedProjects = prev.map((project) => {
        if (project.title === title) {
          return {
            ...project,
            todo: [...project.todo, todo],
          };
        } else {
          return project;
        }
      });

      // Update selectedProject if it's the one being modified
      if (selectedProject && selectedProject.title === title) {
        const updatedProject = updatedProjects.find((p) => p.title === title);
        setSelectedProject(updatedProject);
      }

      return updatedProjects;
    });
  }

  return (
    <section id="container-main">
      <div className="left-side">
        <Sidebar handleCurrentPage={handleCurrentPage} projects={projects} />
      </div>
      <div className="right-side">
        <MainContent
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
          handleProjects={handleProjects}
          selectedProject={selectedProject}
          handleTodos={handleTodos}
        />
      </div>
    </section>
  );
}
