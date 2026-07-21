/**
 * Home view — Shahd Khairy Portfolio
 *
 * Server Component that imports client-side portfolio sections.
 * Each section is a "use client" leaf component with scroll-driven animations.
 */
import { Grain } from "@/components/portfolio/grain";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Mission } from "@/components/portfolio/mission";
import { Projects } from "@/components/portfolio/projects";
import { Approach } from "@/components/portfolio/approach";
import { Calculator } from "@/components/portfolio/calculator";
import { Contact } from "@/components/portfolio/contact";
import { Finale } from "@/components/portfolio/finale";

export const HomeView = () => {
  return (
    <>
      <Grain />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Mission />
        <Projects />
        <Approach />
        <Calculator />
        <Contact />
        <Finale />
      </main>
    </>
  );
};
