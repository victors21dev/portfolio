"use client";

import { motion, easeOut } from "motion/react";
import { Button } from "../ui/button";
import { Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { Terminal } from "./Terminal";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const HeroPage = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-25 -left-25 w-100 h-100 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-30 -right-30 w-100 h-100 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Lado esquerdo */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.span
            variants={item}
            className="text-sm text-muted-foreground tracking-widest uppercase"
          >
            Full Stack Developer
          </motion.span>

          <motion.h1
            variants={item}
            className="text-5xl lg:text-6xl font-bold leading-tight"
          >
            Olá, sou{" "}
            <span className="bg-linear-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Victor Santos
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl text-muted-foreground max-w-xl"
          >
            Desenvolvedor focado em arquitetura de aplicações modernas com{" "}
            <span className="text-foreground font-medium">
              Next.js, TypeScript, Prisma e PostgreSQL
            </span>
            .
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground max-w-xl"
          >
            Experiência em autenticação, modelagem relacional complexa,
            dashboards administrativos e deploy em ambientes Linux.
          </motion.p>

          {/* Ações */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg">
                <Link href="#projects">Ver Projetos</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/cv.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Baixar CV
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/victors21dev" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/victor-santos-da-silva"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Lado direito */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="hidden lg:flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroPage;
