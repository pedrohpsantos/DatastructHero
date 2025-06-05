// src/pages/Home.tsx
import React, { useState } from "react";
import { planData } from "../constants/planData";
import { DayTabs } from "../components/DayTabs";
import { DayCard } from "../components/DayCard";
import { ChartSection } from "../components/ChartSection";
import { Resources } from "../components/Resources";

const Home: React.FC = () => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const days = planData.map((d) => d.day);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-[#3f3c3a] font-sans">
      <div className="container mx-auto p-4 md:p-8 max-w-7xl">
        {/* Cabeçalho */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#6d635b]">
            Plano Intensivo: C & Estrutura de Dados
          </h1>
          <p className="mt-2 text-lg text-[#8a817a]">
            Seu guia interativo de 5 dias para dominar os fundamentos.
          </p>
        </header>

        {/* Conteúdo principal */}
        <main>
          <DayTabs
            days={days}
            activeIndex={activeDayIndex}
            onTabClick={setActiveDayIndex}
          />
          <DayCard data={planData[activeDayIndex]} />

          <ChartSection />
          <Resources />
        </main>

        {/* Rodapé */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} • Criado por Você
        </footer>
      </div>
    </div>
  );
};

export default Home;
