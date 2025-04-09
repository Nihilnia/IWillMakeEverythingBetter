import { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const ctxValues = useContext(TaskContext);
  const { allTasks } = ctxValues;

  const [filtered, setFiltered] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);

  useEffect(() => {
    setFiltered(() => {
      let updatedFiltered = [...allTasks];

      if (Number.parseInt(selectedFilter)) {
        const opt = Number.parseInt(selectedFilter) === 1 ? true : false;
        updatedFiltered = updatedFiltered.filter((task) => {
          return task.isCompleted === opt;
        });
      }

      return updatedFiltered;
    });
  }, [selectedFilter]);

  return (
    <div>
      <section>
        <label>Filter by:</label>
        <select onChange={(e) => setSelectedFilter(e.target.value)}>
          {/* everything is string.. */}
          <option value={0}>Default</option>
          <option value={1}>Completed</option>
          <option value={2}>Uncompleted</option>
        </select>
      </section>
      <section className="grid grid-cols-2">
        {filtered.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </section>
    </div>
  );
}
