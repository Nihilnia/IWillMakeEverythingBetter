import { useActionState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

export default function TaskForm({ buttonTitle, onHandleCloseDialog }) {
  const { addTask } = useContext(TaskContext);

  function handleForm(prevFormSate, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const errors = [];

    if (title.length < 3) {
      errors.push("Title must contain at least three characters.");
    }

    if (description.length < 6) {
      errors.push("Description must contain at least six characters.");
    }

    const taskObj = {
      title,
      description,
      dueDate,
      priority,
    };

    if (errors.length > 0) {
      return {
        enteredValues: taskObj,
        errors,
      };
    }

    addTask(taskObj);
    onHandleCloseDialog();
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" defaultValue={formState.enteredValues?.title} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          defaultValue={formState.enteredValues?.description}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" name="dueDate" defaultValue={formState.enteredValues?.dueDate} />
      </div>
      <div>
        <label htmlFor="priority">Priority:</label>
        <select name="priority" defaultValue={formState.enteredValues?.priority}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <button type="submit">{buttonTitle}</button>
      </div>
      {formState.errors && (
        <ul>
          {formState.errors.map((err) => {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}
    </form>
  );
}
