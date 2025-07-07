import { useActionState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm({ operation, task, buttonTitle, onHandleClose }) {
  const { addTask, editTask, removeTask } = useContext(TaskContext);

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

    switch (operation) {
      case "ADD_TASK": {
        addTask(newTask);
        break;
      }
      case "EDIT_TASK": {
        editTask(task.id, newTask);
        break;
      }
      case "REMOVE_TASK": {
        removeTask(task.id);
      }
    }

    onHandleClose();
  }

  const [formState, formAction, pending] = useActionState(handleFormAction, { errors: null });

  return (
    <section className="p-4">
      <form action={formAction}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            defaultValue={task ? task.title : formState.enteredValues?.title}
            disabled={operation === "REMOVE_TASK"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            defaultValue={task ? task.description : formState.enteredValues?.description}
            disabled={operation === "REMOVE_TASK"}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            defaultValue={task ? task.dueDate : formState.enteredValues?.dueDate}
            disabled={operation === "REMOVE_TASK"}
          />
        </div>
        <div className="form-group">
          <select
            name="priority"
            defaultValue={task ? task.priority : formState.enteredValues?.priority}
            disabled={operation === "REMOVE_TASK"}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <button type="submit">{buttonTitle}</button>
        </div>
      </form>
    </section>
  );
}
