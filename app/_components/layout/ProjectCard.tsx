"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  decisions: string[];
  githubUrl: string;
  liveUrl: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  image,
  techStack,
  decisions,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40">
      {/* Imagem */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="p-8 space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Decisões Técnicas</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {decisions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 pt-4 flex-wrap">
          {/* Página interna (Case Técnico) */}
          <Link href={`/projects/${slug}`}>
            <Button>Ver Case Técnico</Button>
          </Link>

          {/* Deploy */}
          <Button asChild variant="outline">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Deploy
            </a>
          </Button>

          {/* GitHub */}
          <Button asChild variant="outline">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
