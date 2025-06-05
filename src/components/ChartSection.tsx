// src/components/ChartSection.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Montamos manualmente os dados do gráfico
const chartData = [
  { day: "Dia 1", focoC: 5, focoDS: 2 },
  { day: "Dia 2", focoC: 5, focoDS: 2 },
  { day: "Dia 3", focoC: 2, focoDS: 4 },
  { day: "Dia 4", focoC: 1, focoDS: 5 },
  { day: "Dia 5", focoC: 1, focoDS: 5 },
];

export const ChartSection: React.FC = () => {
  return (
    <section id="summary" className="mt-12">
      <div className="content-card p-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#6d635b]">
          Foco de Aprendizagem da Semana
        </h2>
        <p className="text-center text-[#8a817a] mb-6 max-w-3xl mx-auto">
          Este gráfico mostra o equilíbrio entre aprender a linguagem C e os
          conceitos de Estrutura de Dados (ED) ao longo dos 5 dias. Use-o para
          visualizar como seu foco mudará de fundamentos da linguagem para a
          aplicação desses fundamentos em estruturas mais complexas.
        </p>
        <div className="w-full h-80">
          <ResponsiveContainer>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              stackOffset="expand" /* para porcentagem empilhada */
            >
              <XAxis dataKey="day" />
              <YAxis tickFormatter={(value) => `${Math.round(value * 100)}%`} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value}`,
                  name === "focoC" ? "Linguagem C" : "Estrutura de Dados",
                ]}
              />
              <Legend />
              <Bar
                dataKey="focoC"
                stackId="a"
                name="Linguagem C"
                fill="#A39A92"
              />
              <Bar
                dataKey="focoDS"
                stackId="a"
                name="Estrutura de Dados"
                fill="#6D635B"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
