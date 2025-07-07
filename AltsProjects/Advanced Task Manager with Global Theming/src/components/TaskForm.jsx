import { useActionState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm({ onHandleClose }) {
  const { addTask } = useContext(TaskContext);

  function handleFormAction(prevFormState, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };

    addTask(newTask);
    onHandleClose();

    console.log("newData");
    console.log(newData);
  }

  const [formState, formAction, pending] = useActionState(handleFormAction, { errors: null });

  return (
    <section className="p-4">
      <form action={formAction}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea name="description" />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" name="dueDate" />
        </div>
        <div className="form-group">
          <select name="priority">
            <option value="low">Low</option>
            <option value="low">Medium</option>
            <option value="low">High</option>
          </select>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
}
