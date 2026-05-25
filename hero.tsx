"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Mail,
  FolderKanban,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypingText } from "@/components/shared/typing-text";
import { personal } from "@/lib/data/personal";

const techIcons = ["React", "Node", "Python", "AI", "TS", "Mongo"];

const socialIcons = [
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 md:px-8"
    >
      {/* Floating shapes */}
      <motion.div
        className="absolute top-1/4 left-[10%] h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-500/5 blur-sm"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="absolute right-[15%] bottom-1/3 h-16 w-16 rounded-2xl border border-violet-400/20 bg-violet-500/5"
        animate={{ y: [0, 15, 0], rotate: [0, -90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-300 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.5 }}
        >
          <span className="block text-white/90">Hi, I&apos;m</span>
          <span className="mt-2 block bg-gradient-to-r from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-white/55 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          {personal.role} · IIIT Sri City
        </motion.p>

        <motion.div
          className="mt-4 h-10 text-xl font-medium md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.9 }}
        >
          <TypingText texts={personal.typingTexts} />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.1 }}
        >
          <Button asChild size="lg">
            <a href={personal.resumeUrl} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#projects">
              <FolderKanban className="h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub Profile
            </a>
          </Button>
          <Button variant="glow" size="lg" asChild>
            <a href="#contact">
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </motion.div>

        {/* Floating tech stack */}
        <motion.div
          className="mt-14 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3 }}
        >
          {techIcons.map((tech, i) => (
            <motion.span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-sm"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          {socialIcons.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 transition-colors hover:text-cyan-400"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 transition-colors hover:text-cyan-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to about"
      >
        <ArrowDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}
