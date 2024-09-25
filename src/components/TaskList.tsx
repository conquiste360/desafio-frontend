import React from "react";
import { TaskListProps } from "../types/task";

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleTaskStatus,
  removeTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center mb-2 p-2 border rounded"
        >
          <span
            className={`flex-1 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </span>
          <button
            onClick={() => toggleTaskStatus(task.id)}
            className={`${
              task.completed ? "bg-emerald-500" : "bg-amber-500"
            } text-white px-3 py-1 rounded mr-2`}
          >
            {task.completed ? "Desmarcar" : "Concluir"}
          </button>
          <button
            onClick={() => removeTask(task.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
