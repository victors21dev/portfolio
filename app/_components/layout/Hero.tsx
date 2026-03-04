import { Button } from "../ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { Terminal } from "./Terminal";

const HeroPage = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Lado esquerdo */}
        <div className="space-y-6">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            Full Stack Developer
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Olá, sou{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Victor Santos
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl">
            Desenvolvedor focado em arquitetura de aplicações modernas com{" "}
            <span className="text-foreground font-medium">
              Next.js, TypeScript, Prisma e PostgreSQL
            </span>
            .
          </p>

          <p className="text-lg text-muted-foreground max-w-xl">
            Experiência em autenticação, modelagem relacional complexa,
            dashboards administrativos e deploy em ambientes Linux.
          </p>

          {/* Ações */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="#projects">Ver Projetos</Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <Link href="/cv.pdf">
                <Download className="mr-2 h-4 w-4" />
                Baixar CV
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/victors21dev" target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/victor-santos-da-silva"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        {/* Lado direito */}
        <div className="hidden lg:flex justify-center">
          <div className="hidden lg:flex justify-center">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
