import { useActionState, useContext, useEffect, useState } from "react";
import Button from "./UI/Button";
import { TaskContext } from "../context/TaskContext";
import Input from "./UI/Input";
import FormItemsWrapper from "./UI/FormItemsWrapper";

import "./TaskForm.css";

export default function TaskForm({ onHandleCloseDialog, taskToEdit, op }) {
  const { addTask, editTask, removeTask } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  let headline = null;

  switch (op) {
    case "EDIT_TASK": {
      headline = "Edit Your Task";
      break;
    }
    case "REMOVE_TASK": {
      headline = "Remove Your Task";
      break;
    }
    default: {
      headline = "Add New Task";
      break;
    }
  }

  function handleForm(prevFormState, formData) {
    const title = formData.get("title");
    const description = formData.get("description");
    const dueDate = formData.get("dueDate");
    const priority = formData.get("priority");

    const errors = [];
    if (title.length < 1) errors.push("Title is missing.");

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
    <form
      action={formAction}
      className={`flex flex-col gap-4 backdrop-blur-xl bg-white/10 border
       border-white/30 rounded-2xl shadow-2xl p-6 text-red-50
       fade-in-element ${showForm ? "is-visible" : ""}`}
    >
      <h1 className="text-xl font-bold text-white mb-2">{headline}</h1>
      <FormItemsWrapper>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="title"
          defaultValue={taskToEdit ? taskToEdit.title : formState.enteredValues?.title}
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="description">Title</label>
        <textarea
          name="description"
          className="bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-2 text-amber-50 w-full"
          defaultValue={taskToEdit ? taskToEdit.description : formState.enteredValues?.description}
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="dueDate">Due Date: </label>
        <Input
          type="date"
          name="dueDate"
          defaultValue={taskToEdit ? taskToEdit.dueDate : formState.enteredValues?.dueDate}
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          defaultValue={taskToEdit ? taskToEdit.priority : formState.enteredValues?.priority}
          className="bg-white/10 bg-clip-padding backdrop-filter 
    backdrop-blur-md bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100
    rounded-lg
    p-2 text-amber-50 w-full"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </FormItemsWrapper>
      <div>
        <Button title={"Cancel"} type={"button"} onClick={onHandleCloseDialog} />
        <Button title={"Yes"} type={"submit"} />
      </div>
      {formState.errors && (
        <ul className="flex justify-end text-rose-600">
          {formState.errors.map((err) => {
            return <li key={err}>{err}</li>;
          })}
        </ul>
      )}
    </form>
  );
}
