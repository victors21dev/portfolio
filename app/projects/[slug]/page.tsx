import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="container mx-auto px-6 py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground">{project.description}</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Problema</h2>
        <p className="text-muted-foreground">{project.problem}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Solução</h2>
        <p className="text-muted-foreground">{project.solution}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Arquitetura</h2>
        <ul className="space-y-2 text-muted-foreground">
          {project.architecture.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Trade-offs</h2>
        <p className="text-muted-foreground">{project.tradeoffs}</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Melhorias Futuras</h2>
        <p className="text-muted-foreground">{project.improvements}</p>
      </section>
    </div>
  );
}
