// src/components/DayCard.tsx
import React, { useState } from "react";
import { DayData } from "../constants/planData";
import { TaskList } from "./TaskList";
import { ObjectivesList } from "./ObjectivesList";
import { QuizModal } from "./QuizModal";

interface DayCardProps {
  data: DayData;
}

export const DayCard: React.FC<DayCardProps> = ({ data }) => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="content-card p-6 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-[#6d635b]">{data.title}</h2>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#8a817a]">
            Tópicos de C
          </h3>
          <ul className="space-y-2 text-gray-600">
            {data.cTopics.map((topic, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-[#a39a92] font-bold">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-[#8a817a]">
            Tópicos de Estrutura de Dados
          </h3>
          <ul className="space-y-2 text-gray-600">
            {data.dsTopics.map((topic, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-[#a39a92] font-bold">•</span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ObjectivesList objectives={data.objectives} />

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-bold mb-2 text-center text-[#6d635b]">
          Lista de Tarefas Práticas
        </h3>
        <p className="text-center text-sm text-gray-500 mb-4">
          Marque os exercícios conforme os completa para acompanhar seu
          progresso.
        </p>

        <TaskList
          tasks={data.easyTasks}
          title="Obrigatório (Fácil)"
          colorClass="text-green-700"
        />
        <TaskList
          tasks={data.mediumTasks}
          title="Opcional (Médio)"
          colorClass="text-amber-700"
        />
      </div>

      {data.quizQuestions && data.quizQuestions.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsQuizOpen(true)}
            className="px-6 py-2 bg-[#a39a92] text-white rounded-lg font-medium hover:bg-[#8c8077] transition-all"
          >
            Fazer Quiz do Dia
          </button>
        </div>
      )}

      {isQuizOpen && data.quizQuestions && (
        <QuizModal
          questions={data.quizQuestions}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
};
