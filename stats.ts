import { projects } from "@/lib/data/projects";
import { skillCategories } from "@/lib/data/skills";

/** Portfolio stats derived from real content — updates when you add projects or skill categories. */
export const portfolioStats = {
  featuredProjects: projects.length,
  skillAreas: skillCategories.length,
  aiPrograms: 2,
  certifications: 2,
};
