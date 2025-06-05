# ✨ DatastructHero

**DatastructHero** é um plano de estudo intensivo de 5 dias focado nos fundamentos da linguagem C e nas estruturas de dados essenciais. Projetado para ser um guia prático e interativo, este projeto ajuda estudantes a solidificar seus conhecimentos através de tópicos diários, tarefas, quizzes e recursos recomendados.

## 🚀 Funcionalidades

- **Plano de Estudo de 5 Dias:** Conteúdo estruturado para cobrir tópicos chave de C e Estruturas de Dados linearmente.
- **Tópicos Diários:** Detalhes sobre os conceitos de C e Estruturas de Dados a serem abordados em cada dia.
- **Objetivos de Aprendizagem:** Metas claras para cada dia de estudo.
- **Tarefas Práticas:** Sugestões de exercícios divididos por nível de dificuldade (Fácil, Médio, Difícil).
- **Quizzes Rápidos:** Pequenos testes para verificar a compreensão dos conceitos do dia.
- **Recursos Recomendados:** Links úteis para tutoriais, playlists de vídeo e ferramentas de visualização/prática.
- **Visualização de Progresso:** (Se aplicável, baseado no `ChartSection` - pode ser um gráfico de conclusão de tarefas ou tópicos).
- **Persistência Local:** O progresso (como conclusão de tarefas) é salvo no navegador usando Local Storage.

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Chart.js** (para gráficos)
- **Local Storage API**

## 📦 Estrutura do Projeto

DatastructHero/
├── public/
├── src/
│ ├── assets/
│ ├── components/ # Componentes React (DayCard, DayTabs, TaskList,QuizModal, etc.)
│ ├── constants/ # Dados do plano de estudo (planData.ts)
│ ├── hooks/ # Hooks customizados (useLocalStorage.ts)
│ ├── pages/ # Páginas principais (Home.tsx, NotFound.tsx)
│ ├── styles/ # Arquivos de estilo (tailwind.css)
│ ├── App.tsx # Componente principal da aplicação
│ └── main.tsx # Ponto de entrada da aplicação (renderização React)
├── index.html # Arquivo HTML principal
├── package.json # Dependências e scripts do projeto
├── postcss.config.js
├── README.md # Este arquivo
├── tailwind.config.js # Configuração do Tailwind CSS
├── tsconfig.json # Configuração do TypeScript
├── vite.config.ts # Configuração do Vite
└── vite-env.d.ts

## ▶️ Como Rodar Localmente

1.  **Clone o repositório:**
    ```bash
    git clone <https://github.com/pedrohpsantos/DatastructHero.git>
    cd DatastructHero
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    # ou pnpm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    # ou pnpm dev
    ```
4.  Abra seu navegador e acesse `http://localhost:5173` (ou a porta indicada pelo Vite).

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para sugestões ou reportar bugs, ou enviar Pull Requests com melhorias.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
