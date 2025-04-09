import { useContext, useState, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import DialogUI from "./UI/DialogUI";

export default function TaskCard({ task }) {
  const ctxValues = useContext(TaskContext);
  const { handleEditTask, handleRemoveTask } = ctxValues;

  const [isHover, setIsHover] = useState(null);
  const [selectedOp, setSelectedOp] = useState(null);

  const { id, title, description, dueDate, isCompleted } = task;

  const refDialog = useRef();
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();

  function handleSelectedOp(op) {
    setSelectedOp(op);

    refDialog.current.showDialog();
  }

  function handleEdit() {
    const editedTask = {
      title: refTitle.current.value,
      description: refDescription.current.value,
      dueDate: refDueDate.current.value,
    };

    handleEditTask(id, editedTask);
  }
  function handleRemove() {
    handleRemoveTask(id);
  }

  const dialogEdit = (
    <DialogUI ref={refDialog}>
      <div>
        <label>Title:</label>
        <input type="text" ref={refTitle} placeholder={title} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" ref={refDescription} placeholder={description} />
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" ref={refDueDate} />
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </DialogUI>
  );

  const dialogRemove = (
    <DialogUI ref={refDialog}>
      <h2>Are you sure?</h2>
      <button onClick={handleRemove}>Yes</button>
      <button>Cancel</button>
    </DialogUI>
  );

  const renderDialog = selectedOp === "EDIT" ? dialogEdit : dialogRemove;
  return (
    <div
      className="border"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h2>{dueDate}</h2>
      <h2>Completed?: {isCompleted ? "yes" : "no"}</h2>
      <h2>{title}</h2>
      {isHover && (
        <div>
          {/* Both opens a dialog */}
          <button onClick={() => handleSelectedOp("EDIT")}>Edit</button>
          <button onClick={() => handleSelectedOp("REMOVE")}>Remove</button>
        </div>
      )}
      {renderDialog}
    </div>
  );
}
