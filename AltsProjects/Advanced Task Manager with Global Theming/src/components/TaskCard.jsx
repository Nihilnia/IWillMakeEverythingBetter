export default function TaskCard({ task }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;
  console.log("task");
  console.log(task);

  return (
    <div>
      <h2>Title: {title}</h2>
      <h2>description: {description}</h2>
      <h2>dueDate: {dueDate}</h2>
      <h2>priority: {priority}</h2>
      <h2>isCompleted: {isCompleted ? "y" : "n"}</h2>
    </div>
  );
}
