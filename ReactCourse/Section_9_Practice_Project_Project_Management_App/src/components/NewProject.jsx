import { useRef } from "react";
import Input from "./Input";
import Dialog from "./Dialog";

export default function NewProject({ onAddNewProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  const dialog = useRef();

  function handleFormData() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      dialog.current.openIt();
      return;
    }

    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Dialog ref={dialog} buttonCaption="Okkay!">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops.. looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Dialog>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-s tone-950"
              onClick={handleFormData}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input label="Title" type="text" ref={title} />
          <Input label="Description" isTextarea ref={description} />
          <Input label="Due Date" type="date" ref={date} />
        </div>
      </div>
    </>
  );
}
