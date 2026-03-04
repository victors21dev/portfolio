"use client";

import { useEffect, useState } from "react";

const lines = [
  "npx create-next-app portfolio",
  "✔ Using App Router",
  "✔ TypeScript configured",
  "✔ Tailwind installed",
  "",
  "✔ Prisma connected to PostgreSQL",
  "✔ Authentication configured",
  "✔ Deploying to Linux server...",
  "",
  "🚀 Application running successfully.",
];

export function Terminal() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-105 h-80 bg-black rounded-2xl shadow-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-4 text-xs text-muted-foreground">
          victor@portfolio:~
        </span>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-sm text-green-400 space-y-1">
        {visibleLines.map((line, index) => (
          <div key={index}>
            {line && <span className="text-green-500">$ </span>}
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
