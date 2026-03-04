"use client";

import { motion, easeOut } from "motion/react";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Check, Layers, Database, Server } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function EngineeringSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto space-y-20">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl font-bold">Mentalidade de Engenharia</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Minha abordagem prioriza arquitetura sustentável, modelagem
            consistente e decisões técnicas orientadas à escalabilidade,
            manutenção e performance.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Arquitetura */}
          <motion.div variants={item}>
            <Card className="group relative h-full overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Layers size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Arquitetura de Aplicações
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Estrutura modular orientada à escalabilidade.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Organização com App Router
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Separação clara de responsabilidades
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Middleware para controle de acesso
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Componentização reutilizável
                  </li>
                </ul>
              </CardContent>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary/5 to-indigo-500/5 pointer-events-none" />
            </Card>
          </motion.div>

          {/* Banco de Dados */}
          <motion.div variants={item}>
            <Card className="group relative h-full overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Database size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Modelagem e Persistência
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Consistência relacional e tipagem segura.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Modelagem relacional com PostgreSQL
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Prisma com tipagem forte
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Relacionamentos complexos
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Índices e otimização de consultas
                  </li>
                </ul>
              </CardContent>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary/5 to-indigo-500/5 pointer-events-none" />
            </Card>
          </motion.div>

          {/* Infraestrutura */}
          <motion.div variants={item}>
            <Card className="group relative h-full overflow-hidden border border-border/50 bg-background/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Server size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      Infraestrutura & Deploy
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Publicação e configuração de ambientes.
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Deploy em servidor Linux
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Configuração segura de variáveis
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Banco PostgreSQL remoto
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="mt-1 text-primary" />
                    Versionamento com Git
                  </li>
                </ul>
              </CardContent>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-primary/5 to-indigo-500/5 pointer-events-none" />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
