"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { personal } from "@/lib/data/personal";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#030712]/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white">{personal.shortName}</p>
            <p className="mt-1 text-sm text-white/50">{personal.role}</p>
          </div>

          <div className="flex items-center gap-3">
            {personal.socials.map((social) => {
              const Icon = iconMap[social.icon as keyof typeof iconMap] ?? Mail;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition-colors hover:bg-cyan-500/20"
            whileHover={{ y: -2 }}
          >
            <ArrowUp className="h-4 w-4" />
            Back to top
          </motion.button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-center text-sm text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} {personal.shortName}. All rights reserved.</p>
          <p className="text-white/30">Built with Next.js · Tailwind · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
