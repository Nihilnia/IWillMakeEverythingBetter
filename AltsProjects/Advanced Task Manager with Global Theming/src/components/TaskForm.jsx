import { useActionState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Datepicker from "./UI/Datepicker";

export default function TaskForm({ operation, task, buttonTitle = "Add", onHandleClose }) {
  const { addTask, editTask, removeTask } = useContext(TaskContext);

  function handleFormAction(prevFormState, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const errors = [];
    if (title.length < 3) {
      errors.push("Title must contain at least three characters");
    }
    if (description.length < 6) {
      errors.push("Description must contain at least six characters");
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          title,
          description,
          dueDate,
          priority,
        },
      };
    }

    const newTask = {
      title,
      description,
      dueDate,
      priority,
    };

    switch (operation) {
      case "ADD_TASK": {
        console.log("worked");
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
    return { errors: null };
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
          <Datepicker
            defValue={task ? task.dueDate : formState.enteredValues?.dueDate}
            isDisabled={operation === "REMOVE_TASK"}
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
        <div className="flex flex-row justify-end mb-4">
          <button type="submit">{buttonTitle}</button>
        </div>
      </form>
      {formState.errors && (
        <div className="text-amber-600">
          <ul>
            {formState.errors.map((err) => {
              return <li key={err}>{err}</li>;
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
