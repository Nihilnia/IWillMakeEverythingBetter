import { useContext, useRef } from "react";
import { TaskContext } from "../context/TasksContext";
import TaskCardUI from "./UI/TaskCardUI";

export default function TaskList() {
  const { userTasks } = useContext(TaskContext);

  const render = userTasks.map((task) => {
    return <TaskCardUI key={task.id} task={task} />;
  });

  return (
    <section id="sec-task-list" className="flex flex-col gap-2">
      {render}
    </section>
  );
}
