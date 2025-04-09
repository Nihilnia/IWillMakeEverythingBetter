import { useEffect, useRef, useState } from "react";
import DialogUI from "./UI/DialogUI";

export default function TaskCard({
  task,
  onHandleEditTask,
  onHandleRemoveTask,
}) {
  const { id, title, description, dueDate, isCompleted } = task;

  const [isHover, setIsHover] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const refDialog = useRef();
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  function handleSelectedOption(opt) {
    setSelectedOption(opt);
    refDialog.current.showDialog();
  }

  function handleEdit() {
    const newDetails = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      dueDate: refDueDate.current.value,
    };

    onHandleEditTask(id, newDetails);
    refDialog.current.closeDialog();
  }

  function handleRemove() {
    onHandleRemoveTask(id);
    refDialog.current.closeDialog();
  }

  function handleToggleCompleted() {
    const newDetails = {
      isCompleted: !isCompleted,
    };
    onHandleEditTask(id, newDetails);
  }

  const renderEdit = (
    <DialogUI ref={refDialog}>
      <h2>Editing..</h2>

      <div>
        <label>Title:</label>
        <input type="text" ref={refTitle} placeholder={title} />
      </div>
      <div>
        <label>description:</label>
        <input type="text" ref={refDescription} placeholder={description} />
      </div>
      <div>
        <label>dueDate:</label>
        <input type="date" ref={refDueDate} placeholder={dueDate} />
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => refDialog.current.closeDialog()}>Cancel</button>
      </div>
    </DialogUI>
  );

  const renderRemove = (
    <DialogUI ref={refDialog}>
      <h2>Do you want to remove this task?</h2>
      <button onClick={handleRemove}>Yes</button>
      <button onClick={() => refDialog.current.closeDialog()}>Cancel</button>
    </DialogUI>
  );

  const renderDialog = selectedOption === "edit" ? renderEdit : renderRemove;

  return (
    <div
      className="border"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h2>Task: {title}</h2>
      <h2>Description: {description}</h2>
      <h2>Due date: {dueDate}</h2>
      <h2>Completed: {isCompleted ? "yes" : "no"}</h2>
      {isHover && (
        <div>
          <button onClick={() => handleSelectedOption("edit")}>Edit</button>
          <button onClick={() => handleSelectedOption("remove")}>Remove</button>
          <button
            onClick={() => handleToggleCompleted("toggleCompleted")}
          >{`Set as ${isCompleted ? "not completed" : "completed"}`}</button>
        </div>
      )}
      {renderDialog}
    </div>
  );
}
