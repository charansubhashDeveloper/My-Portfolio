"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code2, LineChart, Zap } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { education } from "@/lib/data/education";
import { personal } from "@/lib/data/personal";
import { portfolioStats } from "@/lib/data/stats";

const highlights = [
  {
    icon: Brain,
    title: "AI & Full Stack",
    text: "Passionate about building intelligent applications that combine modern web stacks with machine learning.",
  },
  {
    icon: Cloud,
    title: "Machine Learning",
    text: "Applying ML models for prediction, classification, and intelligent analytics in real-world applications.",
  },
  {
    icon: LineChart,
    title: "Analytics Platforms",
    text: "Love for intelligent analytics systems that turn data into actionable insights.",
  },
  {
    icon: Zap,
    title: "Real-Time Systems",
    text: "Building real-time platforms with live monitoring, WebSockets, and modern web technologies.",
  },
];

const stats = [
  { label: "CGPA", value: 6.5, suffix: "", isDecimal: true },
  { label: "Featured Projects", value: portfolioStats.featuredProjects, suffix: "" },
  { label: "Skill Areas", value: portfolioStats.skillAreas, suffix: "" },
  { label: "Passion", value: 100, suffix: "%" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="About"
          title="Building the Future with Code & AI"
          description="B.Tech CSE student at IIIT Sri City building intelligent, scalable full stack & AI systems."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="h-full">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-violet-600/30 text-2xl font-bold text-cyan-300">
                  CS
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{personal.shortName}</h3>
                  <p className="text-sm text-white/50">{personal.role}</p>
                  <p className="text-sm text-cyan-400/80">{personal.degree}</p>
                  <p className="text-xs text-white/40">{personal.college}</p>
                </div>
              </div>

              <p className="leading-relaxed text-white/65">
                {personal.careerObjective} I build scalable systems—from real-time outage
                monitoring platforms to AI-powered scam detection—using modern web stacks,
                machine learning, and cloud technologies.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {personal.careerGoals.slice(0, 4).map((goal) => (
                  <span
                    key={goal}
                    className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="text-center">
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                      {stat.isDecimal ? (
                        stat.value
                      ) : (
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      )}
                    </p>
                    <p className="mt-1 text-sm text-white/50">{stat.label}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            <GlassCard>
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <Code2 className="h-4 w-4 text-cyan-400" />
                Education
              </h4>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="border-l-2 border-cyan-400/30 pl-4"
                  >
                    <p className="font-medium text-white">{edu.institution}</p>
                    <p className="text-sm text-white/60">
                      {edu.degree} · {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard>
                <item.icon className="mb-3 h-8 w-8 text-cyan-400" />
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
