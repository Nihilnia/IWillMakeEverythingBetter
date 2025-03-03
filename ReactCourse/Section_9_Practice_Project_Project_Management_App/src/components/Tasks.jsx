import { useRef } from "react";
import ButtonAdd from "./ButtonAdd";
import Input from "./Input";

export default function Tasks({ project, onAddNewTask }) {
  const newTask = useRef();

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <Input type="text" label="New Task:" ref={newTask} />
      <ButtonAdd onClick={() => onAddNewTask(newTask.current.value)}>
        Add
      </ButtonAdd>
      <p className="text-stone-800 mb-4">
        This project does not have any tasks yet.
      </p>
      <ul>
        {project.tasks.map((f) => (
          <li key={f.id}>{f.title}</li>
        ))}
      </ul>
    </section>
  );
}
