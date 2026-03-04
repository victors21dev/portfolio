"use client";

import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    slug: "sistema-controle-impressoras",
    title: "Sistema de Controle de Impressoras",
    description: "Aplicação fullstack para gestão de ativos de TI.",
    image: "/projects/impressoras.png",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    decisions: [
      "App Router com Server Components",
      "Modelagem relacional normalizada",
      "Middleware para rotas protegidas",
    ],
    githubUrl: "https://github.com/seu-repo",
    liveUrl: "https://seu-deploy.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projetos desenvolvidos com foco em arquitetura, escalabilidade e
            boas práticas.
          </p>
        </div>

        <div className="grid gap-10 w-fit">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
