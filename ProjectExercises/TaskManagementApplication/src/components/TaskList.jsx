import TaskCard from "./TaskCard";

export default function TaskList({
  allTasks,
  onHandleEditTask,
  onHandleRemoveTask,
}) {
  const render = allTasks.map((task) => {
    return (
      <TaskCard
        key={task.id}
        task={task}
        onHandleEditTask={onHandleEditTask}
        onHandleRemoveTask={onHandleRemoveTask}
      />
    );
  });

  return <section id="sec-task-list">{render}</section>;
}
