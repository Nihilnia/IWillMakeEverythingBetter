import { useImperativeHandle, useRef, useState } from "react";

export default function TaskDetailsModal({ task, ref, onEditTask }) {
  const [currentTask, setCurrentTask] = useState(task);

  const { title, category, dueDate } = currentTask;

  const refDialog = useRef();

  const refTitle = useRef();
  const refCategory = useRef();
  const refDueDate = useRef();

  useImperativeHandle(ref, () => {
    return {
      openDetails() {
        refDialog.current.showModal();
      },
    };
  });

  function handleEditDetails(param, e) {
    setCurrentTask((prev) => {
      return { ...prev, [param]: e.target.value };
    });
  }

  function handleApplyChanges() {
    onEditTask("EDIT_TASK", task, currentTask);
    refDialog.current.close();
  }

  return (
    <dialog ref={refDialog}>
      <div>
        <label>New Task:</label>
        <input
          type="text"
          className="bg-amber-400"
          ref={refTitle}
          value={title}
          onChange={(e) => handleEditDetails("title", e)}
        />
      </div>
      <h4>Optional:</h4>
      <div>
        <label>Category:</label>
        <input
          type="text"
          className="bg-amber-400"
          ref={refCategory}
          value={category}
          onChange={(e) => handleEditDetails("category", e)}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          className="bg-amber-400"
          ref={refDueDate}
          value={dueDate}
          onChange={(e) => handleEditDetails("dueDate", e)}
        />
      </div>
      <div>
        <button
          className="bg-amber-950 text-amber-100"
          onClick={handleApplyChanges}
        >
          Apply
        </button>
      </div>
    </dialog>
  );
}
