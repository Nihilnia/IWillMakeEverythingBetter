import Input from "./Input";

export default function NewProject() {
  return (
    <div>
      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" />
        <Input label="Description" isTextarea />
        <Input label="Due Date" type="date" />
      </div>
    </div>
  );
}
