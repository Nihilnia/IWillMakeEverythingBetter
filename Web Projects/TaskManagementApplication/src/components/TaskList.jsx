import TaskCard from "./TaskCard";

export default function TaskList({ userTasks, onEditTask }) {
  return (
    <section id="sec-task-list">
      <h1>Added tasks:</h1>
      <div>
        {userTasks.map((task) => {
          return <TaskCard key={task.id} task={task} onEditTask={onEditTask} />;
        })}
      </div>
    </section>
  );
}
