import InputUI from "./UI/InputUI";
import LabelUI from "./UI/LabelUI";
import ButtonUI from "./UI/ButtonUI";

import { TaskContext } from "../context/TasksContext";
import { useContext, useRef } from "react";

export default function NewTask() {
  const { handleNewTask } = useContext(TaskContext);

  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();
  const refCategory = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();

    const newTask = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      dueDate: refDueDate.current.value,
      category: refCategory.current.value,
    };

    handleNewTask(newTask);
  }

  return (
    <section id="sec-new-task">
      <form onSubmit={handleFormSubmit}>
        <div>
          <LabelUI title="title" />
          <InputUI type="text" ref={refTitle} />
        </div>
        <div>
          <LabelUI title="description" />
          <InputUI type="text" ref={refDescription} />
        </div>
        <div>
          <LabelUI title="Date" />
          <InputUI type="date" ref={refDueDate} />
        </div>
        <div>
          <LabelUI title="Category" />
          <InputUI type="text" ref={refCategory} />
        </div>
        <div>
          <ButtonUI type="submit" title="Add" />
        </div>
      </form>
    </section>
  );
}
