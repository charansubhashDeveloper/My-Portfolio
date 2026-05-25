"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, projectFilters } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]"
      whileHover={{ rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-900/30 to-violet-900/30">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-400/80">{project.subtitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-white/55">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline">+{project.techStack.length - 5}</Badge>
          )}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-white/60"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="glow" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="ml-auto flex items-center gap-1 text-sm text-cyan-400/80 hover:text-cyan-300"
          >
            {expanded ? "Less" : "Details"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          description="Production-ready applications spanning AI, real-time systems, and full stack platforms."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                filter === f.id
                  ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/40 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                  : "border border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
