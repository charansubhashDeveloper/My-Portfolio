import type { Project } from "@/types";
import { personal } from "@/lib/data/personal";

const github = personal.github;

export const projects: Project[] = [
  {
    id: "scam-analyzer",
    title: "AI Scam Trend Analyzer",
    subtitle: "AI Powered Scam Detection Platform",
    description:
      "Developed a full-stack AI-based web application to detect and analyze scam messages using Machine Learning models.",
    features: [
      "Scam message detection",
      "OCR screenshot analysis",
      "Analytics dashboards",
      "Scam category prediction",
      "JWT authentication",
      "Historical breakdown charts",
    ],
    techStack: [
      "Python",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Scikit-learn",
      "JWT",
      "Tesseract OCR",
    ],
    githubUrl: github,
    category: "ai",
    image: "/projects/scam-analyzer.svg",
  },
  {
    id: "outagehub",
    title: "OutageHub",
    subtitle: "AI Internet Outage Tracker — Real-Time Network Monitoring Platform",
    description:
      "Developed an end-to-end full-stack infrastructure to monitor, track, and map regional internet network outages.",
    features: [
      "AI anomaly prediction",
      "Live outage monitoring",
      "Heatmaps using Leaflet Maps",
      "Real-time telemetry collection",
      "ISP analytics",
      "Downtime forecasting",
    ],
    techStack: [
      "TypeScript",
      "NestJS",
      "React.js",
      "Tailwind CSS",
      "Leaflet Maps",
      "Socket.IO",
      "MongoDB Atlas",
      "Python",
    ],
    githubUrl: github,
    category: "ai",
    image: "/projects/outagehub.svg",
  },
  {
    id: "globesync",
    title: "GlobeSync",
    subtitle: "Travel & Support Management Platform",
    description:
      "Built a full-stack travel and support management system with role-based authorization and administrative operations.",
    features: [
      "Traveler/admin dashboards",
      "Role-based authorization",
      "REST API integration",
      "Swagger documentation",
      "Responsive UI",
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Swagger UI",
      "REST APIs",
    ],
    githubUrl: github,
    category: "fullstack",
    image: "/projects/globesync.svg",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI/ML" },
  { id: "fullstack", label: "Full Stack" },
  { id: "web", label: "Web" },
] as const;
