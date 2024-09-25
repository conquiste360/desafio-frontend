import React, { useState } from "react";

type TaskInputProps = {
  addTask: (title: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() === "") return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        type="submit"
        className="bg-sky-500 text-sky-800 px-4 py-2 rounded w-full active:bg-sky-600 hover:bg-sky-600 transition-all duration-100"
      >
        Adicionar
      </button>
    </form>
  );
};

export default TaskInput;
