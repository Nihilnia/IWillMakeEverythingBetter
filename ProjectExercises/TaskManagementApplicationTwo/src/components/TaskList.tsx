import { useContext, useEffect, useState } from 'react';
import TaskCard from './TaskCard';
import { type Task, TaskContext } from '../context/TaskContext';
import React from 'react';

export default function TaskList() {
  const ctxValues = useContext(TaskContext);
  const { allTasks } = ctxValues;

  const [filtered, setFiltered] = useState([] as Task[]);
  const [selectedFilter, setSelectedFilter] = useState(0);

  useEffect(() => {
    setFiltered((): Task[] => {
      let updatedFiltered = [...allTasks];

      if (selectedFilter) {
        const opt = selectedFilter === 1;
        updatedFiltered = updatedFiltered.filter((task: Task) => {
          return task.isCompleted === opt;
        });
      }

      return updatedFiltered;
    });
  }, [allTasks, selectedFilter]);

  return (
    <div>
      <section>
        <label htmlFor='select'>Filter by:</label>
        <select id='select' onChange={(e) => setSelectedFilter(Number.parseInt(e.target.value))}>
          {/* everything is string.. */}
          <option value={0}>Default</option>
          <option value={1}>Completed</option>
          <option value={2}>Uncompleted</option>
        </select>
      </section>
      <section className='grid grid-cols-2'>
        {filtered.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </section>
    </div>
  );
}
