"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Layout,
  Lightbulb,
  Server,
  Wrench,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { skillCategories } from "@/lib/data/skills";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
  lightbulb: Lightbulb,
};

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          description="A comprehensive toolkit spanning frontend, backend, AI/ML, and DevOps."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] ?? Layout;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: catIndex * 0.08, duration: 0.5 }}
              >
                <GlassCard className="h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10">
                      <Icon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.name}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex justify-between text-sm">
                          <span className="text-white/80">{skill.name}</span>
                          <span className="text-cyan-400/70">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.05 + i * 0.05, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
