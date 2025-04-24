import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskFormUI from "./UI/TaskFormUI";

export default function NewTask() {
	const { addNewTask } = useContext(TaskContext);

	function handleNewTask(incominTask) {
		addNewTask(incominTask);
	}

	return <TaskFormUI onGetFormData={handleNewTask} />;
}
