// src/components/Resources.tsx
import React from "react";

export const Resources: React.FC = () => {
  return (
    <section className="mt-12 mb-12">
      <div className="content-card p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#6d635b]">
          Recursos Adicionais
        </h2>
        <ul className="space-y-4 text-gray-600 max-w-3xl mx-auto">
          <li>
            <a
              href="https://devdocs.io/c/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6d635b] underline hover:text-[#8a817a]"
            >
              • Documentação C – DevDocs (Sintaxe, funções padrão, exemplos)
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/data-structures/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6d635b] underline hover:text-[#8a817a]"
            >
              • Estruturas de Dados – GeeksforGeeks (Tutoriais e exemplos em C)
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6d635b] underline hover:text-[#8a817a]"
            >
              • Playlist de Vídeos C – Curso em Vídeo (Luiz Otávio Miranda)
            </a>
          </li>
          <li>
            <a
              href="https://visualgo.net/pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6d635b] underline hover:text-[#8a817a]"
            >
              • Visualgo – Visualização interativa de Estruturas de Dados e
              Algoritmos
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/problemset/all/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6d635b] underline hover:text-[#8a817a]"
            >
              • LeetCode – Prática de problemas de Estruturas de Dados e
              Algoritmos
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
