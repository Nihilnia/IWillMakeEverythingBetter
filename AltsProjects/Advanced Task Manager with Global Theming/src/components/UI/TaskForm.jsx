import { useActionState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import Input from "./Input";
import Textarea from "./Textarea";
import Label from "./Label";
import Button from "./Button";

export default function TaskForm({ buttonTitle, onHandleCloseDialog, incomingTask }) {
  const { addTask, editTask } = useContext(TaskContext);

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

    if (incomingTask) {
      editTask(incomingTask.id, taskObj);
    } else {
      addTask(taskObj);
    }

    onHandleCloseDialog();
  }

  const [formState, formAction, pending] = useActionState(handleForm, { errors: null });

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <div className="grid grid-cols-2">
        <Label htmlFor="title">Title:</Label>
        <Input
          type="text"
          name="title"
          defaultValue={incomingTask ? incomingTask.title : formState.enteredValues?.title}
        />
      </div>
      <div className="grid grid-cols-2">
        <Label htmlFor="description">Description:</Label>
        <Textarea
          type="text"
          name="description"
          defaultValue={
            incomingTask ? incomingTask.description : formState.enteredValues?.description
          }
        />
      </div>
      <div className="grid grid-cols-2">
        <Label htmlFor="dueDate">Due Date:</Label>
        <Input
          type="date"
          name="dueDate"
          defaultValue={incomingTask ? incomingTask.dueDate : formState.enteredValues?.dueDate}
        />
      </div>
      <div className="grid grid-cols-2">
        <Label htmlFor="priority">Priority:</Label>
        <select
          name="priority"
          defaultValue={incomingTask ? incomingTask.priority : formState.enteredValues?.priority}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variation={"cancel"}>
          Cancel
        </Button>
        <Button type="submit">{buttonTitle}</Button>
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
