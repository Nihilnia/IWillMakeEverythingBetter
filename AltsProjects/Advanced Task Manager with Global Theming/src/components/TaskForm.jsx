import { useActionState, useContext } from "react";
import Button from "./UI/Button";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm({ onHandleCloseDialog, taskToEdit, op }) {
  const { addTask, editTask, removeTask } = useContext(TaskContext);

  function handleForm(prevFormState, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const errors = [];
    if (title.length < 3) errors.push("Title must contain at least three characters");
    if (description.length < 6) errors.push("Description must contain at least three characters");

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

    //Whats the choice; remove or edit?
    switch (op) {
      case "EDIT_TASK": {
        editTask(taskToEdit.id, taskObj);
        break;
      }
      case "REMOVE_TASK": {
        removeTask(taskToEdit.id);
        break;
      }

      default: {
        addTask(taskObj);
      }
    }

    onHandleCloseDialog();
    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          defaultValue={taskToEdit ? taskToEdit.title : formState.enteredValues?.title}
        />
      </div>
      <div>
        <label htmlFor="description">Title</label>
        <textarea
          name="description"
          defaultValue={taskToEdit ? taskToEdit.description : formState.enteredValues?.description}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Title</label>
        <input
          type="date"
          name="dueDate"
          defaultValue={taskToEdit ? taskToEdit.dueDate : formState.enteredValues?.dueDate}
        />
      </div>
      <div>
        <label htmlFor="priority">priority</label>
        <select
          name="priority"
          defaultValue={taskToEdit ? taskToEdit.priority : formState.enteredValues?.priority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <Button title={"Cancel"} type={"button"} onClick={onHandleCloseDialog} />
        <Button title={"Yes"} type={"submit"} />
      </div>
      {formState.errors && (
        <ul>
          {formState.errors.map((err) => {
            <li key={err}>{err}</li>;
          })}
        </ul>
      )}
    </form>
  );
}
