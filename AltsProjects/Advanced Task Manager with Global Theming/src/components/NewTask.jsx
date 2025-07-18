import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import Input from "./UI/Input";
import { Plus } from "lucide-react";
export default function NewTask() {
  const { addTask } = useContext(TaskContext);

  const [newNote, setNewNote] = useState("");

  function handleAddTask(e) {
    const enteredValue = e.target.value;

    if (enteredValue) {
      setNewNote(enteredValue);

      if (e.key === "Enter" && enteredValue.length > 0) {
        addTask({
          title: enteredValue,
        });
        setNewNote("");
      }
    } else if (newNote.length > 0) {
      addTask({
        title: newNote,
      });
      setNewNote("");
    }
  }

  return (
    <div className="mt-4 flex items-center gap-x-5">
      <Input
        onKeyDown={handleAddTask}
        placeholder={"Add a new note.."}
        className="min-w-0 flex-1"
        value={newNote}
        onChange={handleAddTask}
      />
      <div className="rounded-lg bg-white/10 bg-opacity-10 bg-clip-padding p-2 text-amber-50 backdrop-blur-md backdrop-contrast-100 backdrop-saturate-100 backdrop-filter">
        <Plus className="cursor-pointer" onClick={handleAddTask} data-op-name="ADD_TASK" />
      </div>
    </div>
  );
}
