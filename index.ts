export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: "ai" | "fullstack" | "web";
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  detail: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  topics?: string[];
}
