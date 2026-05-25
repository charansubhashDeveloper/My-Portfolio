"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { experience } from "@/lib/data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="Leadership"
          title="Positions of Responsibility"
          description="Leadership roles and campus initiatives that shaped my growth."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-cyan-400/50 via-violet-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative mb-12 pl-16 md:pl-0 md:even:text-right"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div
                className={`md:flex md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#030712] md:left-1/2 md:-translate-x-1/2">
                  <Briefcase className="h-3 w-3 text-cyan-400" />
                </div>

                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/25 hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    <span className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                      {item.period}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-violet-300/80">{item.organization}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
