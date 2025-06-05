// src/constants/planData.ts

export interface Task {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface DayData {
  day: string; // "Dia 1", "Dia 2", etc.
  title: string;
  cTopics: string[];
  dsTopics: string[];
  objectives: string[];
  easyTasks: Task[];
  mediumTasks: Task[];
  quizQuestions?: QuizQuestion[]; // Opcional: perguntas de múltipla escolha
}

export const planData: DayData[] = [
  {
    day: "Dia 1",
    title: "Fundamentos Essenciais de C e Introdução a Arrays",
    cTopics: [
      "Sintaxe básica: `#include <stdio.h>`, `main()`",
      "Variáveis e tipos de dados: `int`, `float`, `char`",
      "Operadores aritméticos e lógicos",
      "Entrada e Saída: `printf()` e `scanf()`",
      "Controle de fluxo: `if-else`, `for`, `while`",
    ],
    dsTopics: [
      "Arrays (vetores) unidimensionais",
      "Declaração, inicialização e acesso por índice",
      "Iteração sobre elementos de um array",
    ],
    objectives: [
      "Entender a estrutura de um programa C.",
      "Manipular dados e controlar o fluxo de execução.",
      "Compreender e usar a estrutura de dados mais básica: o array.",
    ],
    easyTasks: [
      {
        id: "d1t1",
        text: "Declarar, atribuir e imprimir variáveis de tipos diferentes.",
      },
      {
        id: "d1t2",
        text: "Criar uma calculadora para as 4 operações básicas.",
      },
      { id: "d1t3", text: "Verificar se um número é par ou ímpar." },
      { id: "d1t4", text: "Imprimir números de 1 a N." },
      {
        id: "d1t5",
        text: "Ler 5 números para um array, imprimir e achar o maior/menor.",
      },
    ],
    mediumTasks: [
      { id: "d1o1", text: "Calcular a média de N números." },
      { id: "d1o2", text: "Implementar um menu de opções com `switch-case`." },
      {
        id: "d1o3",
        text: "Contar vogais em uma palavra (string como array de `char`).",
      },
    ],
    quizQuestions: [
      {
        id: "d1q1",
        question:
          "Qual é o propósito de `#include <stdio.h>` em um programa C?",
        options: [
          "Declarar funções matemáticas avançadas",
          "Incluir funções de entrada e saída padrão",
          "Configurar o compilador para otimização",
          "Definir variáveis globais automaticamente",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "d1q2",
        question: "Qual comando em C é usado para ler dados do usuário?",
        options: ["print()", "input()", "scanf()", "read()"],
        correctOptionIndex: 2,
      },
    ],
  },
  {
    day: "Dia 2",
    title: "Aprofundando em C: Funções, Ponteiros e Memória",
    cTopics: [
      "Funções: declaração, definição, chamada, parâmetros e retorno",
      "Ponteiros: declaração, operadores `&` e `*`",
      "Relação fundamental entre ponteiros e arrays",
      "Alocação dinâmica de memória: `malloc()` e `free()`",
      "Structs: agrupando diferentes tipos de dados",
    ],
    dsTopics: [
      "Arrays multidimensionais (matrizes)",
      "Manipulação de Strings com a biblioteca `<string.h>`",
    ],
    objectives: [
      "Modularizar código com funções.",
      "Entender o conceito de ponteiros e gerenciamento de memória.",
      "Trabalhar com estruturas de dados mais complexas como matrizes e structs.",
    ],
    easyTasks: [
      {
        id: "d2t1",
        text: "Criar uma função que retorna a soma de dois inteiros.",
      },
      {
        id: "d2t2",
        text: "Criar uma função que retorna o maior entre dois números.",
      },
      {
        id: "d2t3",
        text: "Usar um ponteiro para acessar e modificar o valor de uma variável.",
      },
      {
        id: "d2t4",
        text: "Alocar, preencher, imprimir e liberar um array dinamicamente.",
      },
      { id: "d2t5", text: "Ler e imprimir uma string." },
      { id: "d2t6", text: "Definir e usar uma `struct` Ponto(x, y)." },
    ],
    mediumTasks: [
      {
        id: "d2o1",
        text: "Implementar uma função que troca o valor de duas variáveis usando ponteiros.",
      },
      {
        id: "d2o2",
        text: "Criar função que retorna um ponteiro para o maior elemento de um array.",
      },
      {
        id: "d2o3",
        text: "Concatenar duas strings manualmente, sem `strcat`.",
      },
    ],
    quizQuestions: [
      {
        id: "d2q1",
        question:
          "Qual operador em C é usado para obter o endereço de uma variável?",
        options: ["*", "&", "%", "#"],
        correctOptionIndex: 1,
      },
      {
        id: "d2q2",
        question:
          "Para alocar dinamicamente um array em C, usamos qual função?",
        options: ["alloc()", "malloc()", "create()", "new()"],
        correctOptionIndex: 1,
      },
    ],
  },
  {
    day: "Dia 3",
    title: "Introdução Formal a Estruturas de Dados: Listas Encadeadas",
    cTopics: [
      "Revisão de `struct` e ponteiros",
      "Ponteiros para `struct`",
      "Auto-referência em `structs` (a base para nós)",
    ],
    dsTopics: [
      "Conceito de Estruturas de Dados (ED)",
      "Listas Encadeadas Simples: nós, ponteiro `next`",
      "Vantagens sobre arrays (inserção/remoção, tamanho dinâmico)",
      "Operações: inserção no início, exibição da lista",
    ],
    objectives: [
      "Entender o que é uma estrutura de dados e por que são importantes.",
      "Implementar a primeira estrutura de dados dinâmica: a lista encadeada.",
      "Solidificar a compreensão de ponteiros e `structs`.",
    ],
    easyTasks: [
      {
        id: "d3t1",
        text: "Definir a `struct Node` para uma lista encadeada de inteiros.",
      },
      { id: "d3t2", text: "Implementar a função `insertAtBeginning()`." },
      { id: "d3t3", text: "Implementar a função `displayList()`." },
      {
        id: "d3t4",
        text: "Escrever um `main` para criar, inserir e exibir uma lista.",
      },
    ],
    mediumTasks: [
      { id: "d3o1", text: "Implementar `removeFromBeginning()`." },
      {
        id: "d3o2",
        text: "Implementar uma função para contar o número de nós na lista.",
      },
      { id: "d3o3", text: "Implementar a inserção no final da lista." },
    ],
    quizQuestions: [
      {
        id: "d3q1",
        question:
          "Qual vantagem principal de uma lista encadeada sobre um array estático?",
        options: [
          "Menor uso de memória",
          "Inserção e remoção dinâmicas sem deslocar todos os elementos",
          "Acesso aleatório mais rápido",
          "Menor complexidade de código",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "d3q2",
        question:
          "Para avançar ao próximo nó em uma lista encadeada, usamos qual campo?",
        options: ["data", "value", "next", "prev"],
        correctOptionIndex: 2,
      },
    ],
  },
  {
    day: "Dia 4",
    title: "Estruturas de Dados Lineares: Pilhas (Stacks)",
    cTopics: ["Reforço do uso de ponteiros e `structs` para implementar EDs"],
    dsTopics: [
      "Pilhas (Stacks) e o conceito LIFO (Last-In, First-Out)",
      "Operações: `push`, `pop`, `peek` (ou `top`), `isEmpty`",
      "Implementação usando Arrays (vetores)",
      "Implementação usando Listas Encadeadas",
    ],
    objectives: [
      "Compreender o funcionamento e as aplicações de pilhas.",
      "Implementar pilhas usando duas abordagens diferentes (estática e dinâmica).",
      "Relacionar o conhecimento de arrays e listas com novas EDs.",
    ],
    easyTasks: [
      {
        id: "d4t1",
        text: "Implementar `push`, `pop`, `peek`, `isEmpty` de uma pilha com array.",
      },
      {
        id: "d4t2",
        text: "Escrever um `main` para testar a pilha, observando o comportamento LIFO.",
      },
      {
        id: "d4t3",
        text: "Esboçar em pseudocódigo as funções `push` e `pop` para uma pilha com lista encadeada.",
      },
    ],
    mediumTasks: [
      {
        id: "d4o1",
        text: "Completar a implementação da pilha usando listas encadeadas.",
      },
      { id: "d4o2", text: "Usar uma pilha para inverter uma string." },
      {
        id: "d4o3",
        text: "Verificar o balanceamento de parênteses em uma expressão.",
      },
    ],
    quizQuestions: [
      {
        id: "d4q1",
        question: "Qual estrutura de ED segue a regra LIFO?",
        options: [
          "Fila (Queue)",
          "Árvore (Tree)",
          "Pilha (Stack)",
          "Lista Ligada",
        ],
        correctOptionIndex: 2,
      },
      {
        id: "d4q2",
        question: "Ao remover um elemento de uma pilha, usamos qual operação?",
        options: ["enqueue", "push", "pop", "dequeue"],
        correctOptionIndex: 2,
      },
    ],
  },
  {
    day: "Dia 5",
    title: "Estruturas de Dados Lineares: Filas (Queues) e Revisão",
    cTopics: ["Revisão geral de ponteiros, `structs` e alocação dinâmica."],
    dsTopics: [
      "Filas (Queues) e o conceito FIFO (First-In, First-Out)",
      "Operações: `enqueue`, `dequeue`, `peek` (ou `front`), `isEmpty`",
      "Implementação usando Arrays (com abordagem circular simples)",
      "Implementação usando Listas Encadeadas",
    ],
    objectives: [
      "Compreender o funcionamento e as aplicações de filas.",
      "Consolidar todo o aprendizado da semana.",
      "Saber quais são os próximos passos após o curso intensivo.",
    ],
    easyTasks: [
      {
        id: "d5t1",
        text: "Implementar `enqueue`, `dequeue`, `peek`, `isEmpty` de uma fila com array.",
      },
      {
        id: "d5t2",
        text: "Escrever um `main` para testar a fila, observando o comportamento FIFO.",
      },
    ],
    mediumTasks: [
      {
        id: "d5o1",
        text: "Completar a implementação da fila usando listas encadeadas.",
      },
      {
        id: "d5o2",
        text: "Simular um pequeno sistema de atendimento (ex: caixa de supermercado) com uma fila.",
      },
    ],
    quizQuestions: [
      {
        id: "d5q1",
        question: "Qual estrutura de ED usa a regra FIFO?",
        options: [
          "Pilha (Stack)",
          "Fila (Queue)",
          "Lista Duplamente Ligada",
          "Heap",
        ],
        correctOptionIndex: 1,
      },
      {
        id: "d5q2",
        question:
          "Para inserir no final de uma fila implementada com array circular, você ajusta qual índice?",
        options: ["front", "rear", "top", "next"],
        correctOptionIndex: 1,
      },
    ],
  },
];
