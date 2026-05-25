"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { GlassCard } from "@/components/shared/glass-card";
import { Badge } from "@/components/ui/badge";
import type { GitHubRepo } from "@/types";

export function GitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setError(data.error);
        else setRepos(data.repos ?? []);
      })
      .catch(() => setError("Failed to load repositories"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="repos" className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Open Source"
          title="GitHub Repositories"
          description="Dynamically fetched from GitHub API — showcase your latest work."
        />

        {loading && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/5"
              />
            ))}
          </div>
        )}

        {error && (
          <GlassCard className="text-center text-white/60">
            <Github className="mx-auto mb-3 h-8 w-8 text-white/30" />
            <p>{error}</p>
            <p className="mt-2 text-sm text-white/40">
              Set GITHUB_USERNAME in .env.local to enable dynamic repos.
            </p>
          </GlassCard>
        )}

        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="flex h-full flex-col">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-white">{repo.name}</h3>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-white/40 hover:text-cyan-400"
                      aria-label={`View ${repo.name} on GitHub`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <p className="mb-4 flex-1 text-sm text-white/55 line-clamp-2">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && <Badge>{repo.language}</Badge>}
                    <span className="flex items-center gap-1 text-sm text-white/40">
                      <Star className="h-3.5 w-3.5" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
