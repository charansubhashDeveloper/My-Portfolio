import { portfolioStats } from "@/lib/data/stats";
import { personal } from "@/lib/data/personal";

export const achievements = {
  stats: [
    { label: "Featured Projects", value: portfolioStats.featuredProjects, suffix: "" },
    { label: "Skill Areas", value: portfolioStats.skillAreas, suffix: "" },
    { label: "AI Programs", value: portfolioStats.aiPrograms, suffix: "" },
    { label: "Certifications", value: portfolioStats.certifications, suffix: "" },
  ],
  certifications: [
    {
      title: "Build with AI Bootcamp",
      issuer: "Google / HACK2SKILL",
      year: "2025",
    },
    {
      title: "Google Gen AI Academy",
      issuer: "APAC Edition",
      year: "2025",
    },
  ],
  highlights: [
    "Completed Google Build with AI Bootcamp by HACK2SKILL",
    "Participated in Google Gen AI Academy (APAC Edition)",
    "Campus ambassador representing IIIT Sri City at Younity 2025",
    "Built production-ready full stack & AI applications",
  ],
  profiles: [
    { name: "GitHub", url: personal.github },
  ],
};
