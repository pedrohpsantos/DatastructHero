// src/components/QuizModal.tsx
import React, { useState } from "react";
import { QuizQuestion } from "../constants/planData";

interface QuizModalProps {
  questions: QuizQuestion[];
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ questions, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIdx];

  const handleOptionClick = (idx: number) => {
    setSelectedOption(idx);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.correctOptionIndex) {
      setScore((s) => s + 1);
    }
    setSelectedOption(null);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((i) => i + 1);
    } else {
      alert(
        `Quiz finalizado! Sua pontuação: ${
          score +
          (selectedOption === currentQuestion.correctOptionIndex ? 1 : 0)
        } / ${questions.length}`
      );
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h3 className="text-xl font-semibold mb-4">{`Pergunta ${
          currentIdx + 1
        } de ${questions.length}`}</h3>
        <p className="mb-4 text-gray-700">{currentQuestion.question}</p>

        <ul className="space-y-3">
          {currentQuestion.options.map((opt, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleOptionClick(idx)}
                className={`w-full text-left px-4 py-2 border rounded-lg transition-all 
                  ${
                    selectedOption === idx
                      ? "bg-[#a39a92] text-white border-[#a39a92]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-right">
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-5 py-2 rounded-lg font-medium transition-all ${
              selectedOption !== null
                ? "bg-[#a39a92] text-white hover:bg-[#8c8077]"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentIdx + 1 < questions.length ? "Próxima" : "Finalizar"}
          </button>
        </div>
      </div>
    </div>
  );
};
