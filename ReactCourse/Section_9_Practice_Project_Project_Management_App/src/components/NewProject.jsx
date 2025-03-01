import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onAddNewProject }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function handleFormData() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    onAddNewProject({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
}
