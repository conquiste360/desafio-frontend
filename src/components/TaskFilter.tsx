import React from "react";

type TaskFilterProps = {
  setFilter: (filter: "all" | "completed" | "notCompleted") => void;
};

const TaskFilter: React.FC<TaskFilterProps> = ({ setFilter }) => {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={() => setFilter("all")}
        className="bg-slate-400 text-slate-800 px-4 py-2 rounded active:bg-slate-600 hover:bg-slate-600 transition-all duration-100"
      >
        Todas
      </button>
      <button
        onClick={() => setFilter("completed")}
        className="bg-emerald-400 text-emerald-800 px-4 py-2 rounded active:bg-emerald-600 hover:bg-emerald-600 transition-all duration-100"
      >
        Concluídas
      </button>
      <button
        onClick={() => setFilter("notCompleted")}
        className="bg-amber-400 text-amber-800 px-4 py-2 rounded active:bg-amber-600 hover:bg-amber-600 transition-all duration-100"
      >
        Não Concluídas
      </button>
    </div>
  );
};

export default TaskFilter;
