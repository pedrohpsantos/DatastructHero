// src/components/TaskList.tsx
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export interface Task {
  id: string;
  text: string;
}

interface TaskListProps {
  tasks: Task[];
  title: string;
  colorClass: string; // ex.: "text-green-700" ou "text-amber-700"
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  title,
  colorClass,
}) => {
  // O estado armazena quais tasks estão marcadas
  const [completedMap, setCompletedMap] = useLocalStorage<
    Record<string, boolean>
  >(
    `completed-${title}`, // chave no localStorage
    {}
  );

  const toggleTask = (taskId: string) => {
    setCompletedMap((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  if (!tasks.length) return null;

  return (
    <div className="mt-6">
      <h4 className={`text-lg font-semibold mb-3 ${colorClass}`}>{title}</h4>
      <ul className="space-y-1">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all"
          >
            <input
              type="checkbox"
              id={task.id}
              checked={!!completedMap[task.id]}
              onChange={() => toggleTask(task.id)}
              className="mt-1 h-5 w-5 rounded border-gray-300 text-[#a39a92] focus:ring-[#a39a92]"
            />
            <label
              htmlFor={task.id}
              className={`flex-1 text-gray-700 ${
                completedMap[task.id] ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
