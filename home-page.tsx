"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { GridBackground } from "@/components/effects/grid-background";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

const Particles = dynamic(
  () => import("@/components/effects/particles").then((m) => m.Particles),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/effects/custom-cursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const GitHubRepos = dynamic(
  () => import("@/components/sections/github-repos").then((m) => m.GitHubRepos),
  { ssr: false, loading: () => null }
);

export function HomePage() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <AuroraBackground />
      <GridBackground />
      <Particles />

      <div className="relative z-10 min-h-screen bg-[#030712]/80">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Experience />
          <GitHubRepos />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
