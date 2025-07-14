import { useActionState, useContext, useEffect, useState } from "react";
import Button from "./UI/Button";
import { TaskContext } from "../context/TaskContext";
import Input from "./UI/Input";
import FormItemsWrapper from "./UI/FormItemsWrapper";

import "./TaskForm.css";

export default function TaskForm({ onHandleCloseDialog, taskToEdit, op }) {
  const { addTask, editTask, removeTask } = useContext(TaskContext);
  const [showForm, setShowForm] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (taskToEdit) setCurrentTask(taskToEdit);
  }, [taskToEdit]);

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

  function handleCancelClick() {
    setIsExiting(true);
  }

  function handleTransitionEnd() {
    if (isExiting) {
      onHandleCloseDialog();
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
      className={`fade-in-element flex flex-col gap-4 rounded-2xl border border-white/30 bg-white/10 p-6 text-red-50 
        shadow-2xl backdrop-blur-xl ${showForm && !isExiting ? "is-visible" : ""} ${isExiting ? "fade-out-element" : ""}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <h1 className="mb-2 font-bold text-white text-xl">{headline}</h1>
      <FormItemsWrapper>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="title"
          defaultValue={currentTask ? currentTask.title : formState.enteredValues?.title}
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          className="w-full rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-2 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter"
          defaultValue={
            currentTask ? currentTask.description : formState.enteredValues?.description
          }
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="dueDate">Due Date: </label>
        <Input
          type="date"
          name="dueDate"
          defaultValue={currentTask ? currentTask.dueDate : formState.enteredValues?.dueDate}
        />
      </FormItemsWrapper>
      <FormItemsWrapper>
        <label htmlFor="priority">Priority</label>
        <select
          name="priority"
          value={currentTask ? currentTask.priority : formState.enteredValues?.priority}
          onChange={(e) => {
            setCurrentTask((prev) => {
              return { ...(prev || {}), priority: e.target.value };
            });
          }}
          className="w-full rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-2 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </FormItemsWrapper>
      <div>
        <Button type={"button"} onClick={handleCancelClick}>
          Cancel
        </Button>
        <Button type={"submit"}>Yes</Button>
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
