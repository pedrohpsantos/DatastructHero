// src/components/ObjectivesList.tsx
import React from "react";

interface ObjectivesListProps {
  objectives: string[];
}

export const ObjectivesList: React.FC<ObjectivesListProps> = ({
  objectives,
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3 text-[#8a817a]">
        Objetivos Chave do Dia
      </h3>
      <ul className="space-y-2 text-gray-600">
        {objectives.map((obj, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 text-[#a39a92] font-bold">•</span>
            <span>{obj}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
