// src/pages/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f7f4]">
    <h2 className="text-4xl font-bold text-[#6d635b] mb-4">404</h2>
    <p className="text-lg text-[#3f3c3a] mb-6">Página não encontrada</p>
    <Link
      to="/"
      className="px-6 py-2 bg-[#a39a92] text-white rounded-lg hover:bg-[#8c8077] transition-all"
    >
      Voltar para a Home
    </Link>
  </div>
);

export default NotFound;
