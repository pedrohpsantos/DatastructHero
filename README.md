# ✨ DatastructHero

**DatastructHero** is an intensive 5-day study plan focused on the fundamentals of the C language and essential data structures. Designed as a practical and interactive guide, this project helps students solidify their knowledge through daily topics, tasks, quizzes, and recommended resources.

---

## 📋 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [▶️ Getting Started](#️-getting-started)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Features

DatastructHero offers a range of functionalities to enhance your learning experience:

-   **5-Day Study Plan:** Structured content covering key C and Data Structures topics linearly.
-   **Daily Topics:** Detailed concepts of C and Data Structures for each day.
-   **Learning Objectives:** Clear goals for each study day.
-   **Practical Tasks:** Exercise suggestions categorized by difficulty (Easy, Medium, Hard).
-   **Quick Quizzes:** Short tests to check understanding of the day's concepts.
-   **Recommended Resources:** Useful links to tutorials, video playlists, and visualization/practice tools.
-   **Progress Visualization:** Track your learning progress (e.g., task or topic completion charts using `ChartSection`).
-   **Local Persistence:** Your progress (like task completion) is saved in the browser using Local Storage.

---

## 🛠️ Tech Stack

This project is built using modern web technologies:

-   **React**
-   **TypeScript**
-   **Vite**
-   **Tailwind CSS**
-   **Chart.js** (for charts)
-   **Local Storage API**

---

## ▶️ Getting Started

To run DatastructHero locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/pedrohpsantos/DatastructHero.git](https://github.com/pedrohpsantos/DatastructHero.git)
    cd DatastructHero
    ```
2.  **Install dependencies:**
    Choose your preferred package manager:
    ```bash
    npm install
    # or
    # yarn install
    # or
    # pnpm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    ```
4.  Open your browser and navigate to `http://localhost:5173` (or the port indicated by Vite).

---

---

## 📂 Project Structure

The project follows a standard Vite + React + TypeScript structure, organized as follows:

```text
DatastructHero/
├── public/                   # Static assets (images, fonts, etc., publicly accessible)
├── src/                      # Main application source code
│   ├── assets/               # Images, icons, and other assets used internally by components
│   ├── components/           # Reusable React components (DayCard, TaskList, QuizModal, etc.)
│   ├── constants/            # Constant data, such as the study plan (planData.ts)
│   ├── hooks/                # Custom React hooks (e.g., useLocalStorage.ts)
│   ├── pages/                # Main page components (Home.tsx, NotFound.tsx)
│   ├── styles/               # Global or base style files (e.g., tailwind.css, index.css)
│   ├── App.tsx               # Root React application component
│   └── main.tsx              # Application entry point (where React is rendered into the DOM)
├── .gitignore                # Specifies intentionally untracked files that Git should ignore
├── index.html                # Main HTML file served by Vite
├── package.json              # Project metadata, dependencies, and scripts
├── package-lock.json         # Project metadata, dependencies, and scripts of node modules
├── postcss.config.js         # PostCSS configuration (used by Tailwind CSS)
├── README.md                 # This file you are reading
├── tailwind.config.js        # Tailwind CSS configuration file
├── tsconfig.json             # TypeScript configuration file
├── node_modules              # TypeScript configuration specific to the Node.js environment (e.g., Vite)
├── vite.config.ts            # Vite configuration file
└── vite-env.d.ts             # Type definitions file for Vite environment variables
```
---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues for suggestions or bug reports, or submit Pull Requests with improvements.

To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and commit them (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/your-feature-name`).
5.  Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
