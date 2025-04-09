import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskList({
  allTasks,
  onHandleEditTask,
  onHandleRemoveTask,
}) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered((prev) => {
      let updatedFiltered = [...allTasks];

      return updatedFiltered;
    });
  }, [allTasks]);

  function handleSelectedOption(e) {
    setFiltered((prev) => {
      let updatedFiltered = [...allTasks];

      updatedFiltered = updatedFiltered.filter((task) => {
        switch (e.target.value) {
          case "all":
            return task;

          case "completed":
            return task.isCompleted;

          case "not-completed":
            return !task.isCompleted;
        }
      });

      return updatedFiltered;
    });
  }

  const renderTasks = filtered.map((task) => {
    return (
      <TaskCard
        key={task.id}
        task={task}
        onHandleEditTask={onHandleEditTask}
        onHandleRemoveTask={onHandleRemoveTask}
      />
    );
  });

  const renderFilter = (
    <>
      <label>Choose an option to filter:</label>
      <select onChange={handleSelectedOption}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not-Completed</option>
      </select>
    </>
  );

  return (
    <section id="sec-task-list">
      <div>{renderFilter}</div>
      <div>{renderTasks}</div>
    </section>
  );
}
