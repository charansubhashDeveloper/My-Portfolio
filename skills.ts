import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 82 },
      { name: "Python", level: 88 },
      { name: "JavaScript", level: 86 },
      { name: "TypeScript", level: 84 },
      { name: "C", level: 75 },
      { name: "DSA", level: 78 },
    ],
  },
  {
    name: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Vite", level: 85 },
    ],
  },
  {
    name: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 86 },
      { name: "NestJS", level: 80 },
    ],
  },
  {
    name: "Database",
    icon: "database",
    skills: [
      { name: "MongoDB Atlas", level: 85 },
      { name: "Mongoose", level: 82 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    name: "AI/ML",
    icon: "brain",
    skills: [
      { name: "Scikit-learn", level: 82 },
      { name: "TF-IDF", level: 78 },
      { name: "Logistic Regression", level: 76 },
      { name: "Machine Learning", level: 80 },
      { name: "Predictive Analytics", level: 82 },
    ],
  },
  {
    name: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "Socket.IO", level: 84 },
      { name: "Swagger UI", level: 80 },
      { name: "JWT", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Leaflet Maps", level: 78 },
    ],
  },
  {
    name: "Concepts",
    icon: "lightbulb",
    skills: [
      { name: "OOP", level: 82 },
      { name: "Operating Systems", level: 74 },
      { name: "Full Stack Architecture", level: 86 },
      { name: "Machine Learning", level: 80 },
    ],
  },
];
