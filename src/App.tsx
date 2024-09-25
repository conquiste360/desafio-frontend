import { useState } from "react";
import TaskFilter from "./components/TaskFilter";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Task } from "./types/task";

function App() {
  const [filter, setFilter] = useState<"all" | "completed" | "notCompleted">(
    "all"
  );
  const addTask = (title: string) => {
    // TODO: Implementar a adição de uma nova tarefa
  };

  const removeTask = (taskId: number) => {
    // TODO: Implementar a remoção de uma tarefa
  };

  const filteredTasks: Task[] = [
    {
      id: 1,
      title: "Tarefa 1",
      completed: false,
    },
    {
      id: 1,
      title: "Tarefa 1",
      completed: true,
    },
  ];

  const toggleTaskStatus = (taskId: number) => {
    // TODO: Implementar a alteração do status de uma tarefa
  };
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gerenciador de Tarefas</h1>
      <div className="border p-2 m-2">
        <TaskInput addTask={addTask} />
      </div>
      <div className="border p-2 m-2">
        <TaskFilter setFilter={setFilter} />
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;
