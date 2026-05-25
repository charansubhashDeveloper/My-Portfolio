"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/20 backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/[0.08] before:to-transparent before:opacity-0 before:transition-opacity",
        hover && "hover:border-cyan-400/25 hover:shadow-cyan-500/10 hover:before:opacity-100",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
      {children}
    </motion.div>
  );
}
