export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskListProps = {
  tasks: Task[];
  toggleTaskStatus: (taskId: number) => void;
  removeTask: (taskId: number) => void;
};
