"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-12 text-center md:mb-16"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-xs font-medium tracking-widest text-cyan-300 uppercase">
        {label}
      </span>
      <h2 className="mt-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/55 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
