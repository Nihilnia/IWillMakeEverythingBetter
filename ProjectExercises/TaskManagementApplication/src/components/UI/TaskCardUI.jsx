import { useState, useContext, useRef } from "react";

import { TaskContext } from "../../context/TasksContext";

import DialogUI from "./DialogUI";
import InputUI from "./InputUI";
import ButtonUI from "./ButtonUI";

export default function TaskCardUI({ task }) {
  const [isHover, setIsHover] = useState(false);
  const { handleEditTask } = useContext(TaskContext);

  const refDialog = useRef();

  //New values
  const refNewTitle = useRef();
  const reNewDescription = useRef();
  const refNewDueDate = useRef();
  const refNewCategory = useRef();

  function onHandleEditDialog() {
    refDialog.current.openDialog();
    // Set initial values
    refNewTitle.current.value = task.title;
    reNewDescription.current.value = task.description;
    refNewDueDate.current.value = task.dueDate;
    refNewCategory.current.value = task.category;
  }

  function onHandleEditTask() {
    const newDetails = {
      title: refNewTitle.current.value || task.title,
      description: reNewDescription.current.value || task.description,
      dueDate: refNewDueDate.current.value || task.dueDate,
      category: refNewCategory.current.value || task.category,
    };

    console.log("refNewDueDate.current.value");
    console.log(refNewDueDate.current.value);

    handleEditTask(task.id, newDetails);
  }

  return (
    <div className="task-card border border-amber-200">
      <div
        key={task.id}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex flex-col">
          <div>Title: {task.title}</div>
          <div>Description: {task.description}</div>
          <div>dueDate: {task.dueDate}</div>
          <div>Category: {task.category}</div>
        </div>
        {isHover && (
          <div onClick={onHandleEditDialog}>
            <ButtonUI title="Edit" />
          </div>
        )}
        <DialogUI
          ref={refDialog}
          btnTitle="Apply changes"
          btnEvent={onHandleEditTask}
        >
          <div className="flex flex-col">
            <div>
              Title:
              <InputUI type="text" ref={refNewTitle} placeholder={task.title} />
            </div>
            <div>
              Description:
              <InputUI
                type="text"
                ref={reNewDescription}
                placeholder={task.description}
              />
            </div>
            <div>
              dueDate:
              <InputUI
                type="date"
                ref={refNewDueDate}
                placeholder={task.dueDate}
              />
            </div>
            <div>
              Category:
              <InputUI
                type="text"
                ref={refNewCategory}
                placeholder={task.category}
              />
            </div>
          </div>
        </DialogUI>
      </div>
    </div>
  );
}
