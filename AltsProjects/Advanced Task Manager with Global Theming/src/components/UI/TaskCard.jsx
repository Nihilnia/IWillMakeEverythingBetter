import Button from "./Button";

export default function TaskCard({ task, onHandleCloseDialog }) {
  const { id, title, description, dueDate, priority, isCompleted } = task;

  function handleClick(e) {
    onHandleCloseDialog(e, task);
  }

  return (
    <div className="border border-amber-500 bg-amber-500 hover:bg-amber-300">
      <p>ID: {id}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>dueDate: {dueDate}</p>
      <p>priority: {priority}</p>
      <p>isCompleted: {isCompleted}</p>
      <div>
        <Button title={"Edit"} type={"button"} data-op-name="EDIT_TASK" onClick={handleClick} />
        <Button title={"Remove"} type={"button"} data-op-name="REMOVE_TASK" onClick={handleClick} />
      </div>
    </div>
  );
}
