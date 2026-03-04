export const projects = [
  {
    slug: "sistema-controle-impressoras",
    title: "Sistema de Controle de Impressoras",
    description: "Gestão de ativos de TI com arquitetura modular.",
    stack: ["Next.js", "Prisma", "PostgreSQL"],
    problem:
      "A empresa não possuía controle estruturado das impressoras e setores.",
    solution:
      "Foi criada uma aplicação fullstack com modelagem relacional normalizada.",
    architecture: [
      "App Router com Server Components",
      "Separação por domínio",
      "Middleware para rotas protegidas",
    ],
    tradeoffs:
      "Optei por não usar Redux para evitar complexidade desnecessária.",
    improvements:
      "Implementaria testes automatizados e Docker para containerização.",
  },
];
