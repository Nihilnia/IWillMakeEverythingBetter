import { useState, useContext, useRef, useEffect } from "react";

import { TaskContext } from "../../context/TasksContext";

import DialogUI from "./DialogUI";
import InputUI from "./InputUI";
import ButtonUI from "./ButtonUI";
import GeneralMessageUI from "./GeneralMessageUI";

export default function TaskCardUI({ task }) {
  const [isHover, setIsHover] = useState(false);
  const { handleEditTask, handleRemoveTask } = useContext(TaskContext);
  const [taskOp, setTaskOp] = useState(null);

  const [userMessage, setUserMessage] = useState(null);

  const refDialog = useRef();

  //New values
  const refNewTitle = useRef();
  const refNewDescription = useRef();
  const refNewDueDate = useRef();
  const refNewCategory = useRef();

  useEffect(() => {
    if (taskOp) {
      refDialog.current.openDialog();
      if (taskOp === "edit") {
        // Set initial values
        refNewTitle.current.value = task.title;
        refNewDescription.current.value = task.description;
        refNewDueDate.current.value = task.dueDate;
        refNewCategory.current.value = task.category;
      }
    } else {
      refDialog.current.closeDialog();
    }
  }, [taskOp]);

  function onHandleOpenDialog(op) {
    setTaskOp(op);
  }

  function onHandleEditTask() {
    const newDetails = {
      title: refNewTitle.current.value || task.title,
      description: refNewDescription.current.value || task.description,
      dueDate: refNewDueDate.current.value || task.dueDate,
      category: refNewCategory.current.value || task.category,
    };

    handleEditTask(task.id, newDetails);
    setUserMessage("Task successfuly edited.");
  }

  function onHandleRemoveTask() {
    handleRemoveTask(task.id);
    setUserMessage("Task successfuly removed.");
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
          <>
            <div onClick={() => onHandleOpenDialog("edit")}>
              <ButtonUI title="Edit" />
            </div>
            <div onClick={() => onHandleOpenDialog("remove")}>
              <ButtonUI title="Remove" />
            </div>
          </>
        )}
        <DialogUI
          ref={refDialog}
          btnTitle={taskOp === "edit" ? "Apply changes" : "Yes"}
          btnEvent={taskOp === "edit" ? onHandleEditTask : onHandleRemoveTask}
        >
          {taskOp === "edit" && (
            <div className="flex flex-col">
              <div>
                Title:
                <InputUI
                  type="text"
                  ref={refNewTitle}
                  placeholder={task.title}
                />
              </div>
              <div>
                Description:
                <InputUI
                  type="text"
                  ref={refNewDescription}
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
          )}
          {taskOp === "remove" && <div>Are you sure?</div>}
        </DialogUI>
        {userMessage && (
          <GeneralMessageUI
            message={userMessage}
            time={2000}
            onHandleUserMessage={setUserMessage}
          />
        )}
      </div>
    </div>
  );
}
