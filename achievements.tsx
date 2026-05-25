"use client";

import { motion } from "framer-motion";
import { Award, Github, Trophy } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { achievements } from "@/lib/data/achievements";
import { personal } from "@/lib/data/personal";

export function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Achievements"
          title="Milestones & Growth"
          description="Continuous learning through workshops, certifications, and open-source contributions."
        />

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {achievements.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center">
                <Trophy className="mx-auto mb-2 h-6 w-6 text-amber-400/80" />
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-white">
              <Github className="h-5 w-5 text-cyan-400" />
              GitHub Activity
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117] p-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://ghchart.rshah.org/${process.env.NEXT_PUBLIC_GITHUB_USERNAME || personal.githubUsername}`}
                  alt="GitHub contribution chart"
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </a>
              <p className="mt-3 text-center text-xs text-white/40">
                View full profile on GitHub →
              </p>
            </div>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard>
              <h3 className="mb-4 font-semibold text-white">Highlights</h3>
              <ul className="space-y-3">
                {achievements.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard>
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <Award className="h-5 w-5 text-violet-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {achievements.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-cyan-400/20"
                  >
                    <p className="font-medium text-white">{cert.title}</p>
                    <p className="text-sm text-white/50">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="mb-3 font-semibold text-white">Coding Profiles</h3>
              <div className="flex flex-wrap gap-3">
                {achievements.profiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
