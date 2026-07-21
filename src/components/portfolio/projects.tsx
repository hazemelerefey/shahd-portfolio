"use client";

import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";

const projects = [
  {
    id: "neuro",
    giant: "NEURO",
    number: "01 / 05",
    windowTitle: "NEUROSCOPE",
    label: "VISUAL NEURAL NETWORK BUILDER",
    title: "Design deep-learning architectures in an interactive 3D workspace.",
    tech: ["React + TypeScript", "Three.js + R3F", "Zustand + FastAPI"],
    link: "https://github.com/hazemelerefey/neuroscope",
    linkText: "VIEW GITHUB ↗",
    bg: "#180f2b",
    art: "network",
  },
  {
    id: "restaurant",
    giant: "SERVICE",
    number: "02 / 05",
    windowTitle: "RESTAURANT SYSTEM",
    label: "FULL-STACK MANAGEMENT",
    title:
      "Authentication, menu operations, ordering, notifications, and an admin dashboard.",
    tech: ["React", "Node + Express", "MongoDB + JWT"],
    link: null,
    linkText: "REPOSITORY TO BE ADDED",
    bg: "#202024",
    art: "dish",
  },
  {
    id: "commerce",
    giant: "FURNITURE",
    number: "03 / 05",
    windowTitle: "FURNITURE E-COMMERCE",
    label: "MERN COMMERCE PLATFORM",
    title:
      "Products, cart, image uploads, order processing, and secure authentication.",
    tech: ["Reusable UI", "Scalable APIs", "Responsive UX"],
    link: null,
    linkText: "REPOSITORY TO BE ADDED",
    bg: "#7b402f",
    art: "form",
  },
  {
    id: "notes",
    giant: "NOTES",
    number: "04 / 05",
    windowTitle: "NOTES APP",
    label: "SECURE CRUD",
    title:
      "A protected note-management experience with persistent MongoDB storage.",
    tech: ["Protected routes", "JWT auth", "Clean responsive UI"],
    link: null,
    linkText: "REPOSITORY TO BE ADDED",
    bg: "#192d45",
    art: "note",
  },
  {
    id: "landing",
    giant: "SCROLL",
    number: "05 / 05",
    windowTitle: "NEUROSCOPE LANDING",
    label: "3D MARKETING EXPERIENCE",
    title:
      "A scroll-driven neural-network scene with responsive feature storytelling.",
    tech: ["React Three Fiber", "GSAP ScrollTrigger", "Lenis"],
    link: null,
    linkText: "TEAM PROJECT",
    bg: "#11142b",
    art: "orbit",
  },
];

const ProjectArt = ({ type }: { type: string }) => {
  if (type === "network") {
    return (
      <div className="absolute inset-0 right-[45%]">
        {[17, 46, 68, 24, 82].map((left, i) => (
          <span
            key={i}
            className="absolute w-[12px] h-[12px] border border-[#c8b6ec] rounded-full"
            style={{
              left: `${left}%`,
              top: `${[35, 18, 55, 75, 30][i]}%`,
              boxShadow: "0 0 30px #8d61f0",
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "dish") {
    return (
      <div className="absolute inset-0 right-[45%] grid place-items-center">
        <div
          className="rounded-full"
          style={{
            width: "min(34vw, 500px)",
            aspectRatio: "1",
            border: "1px solid #70584c",
            background:
              "radial-gradient(circle, #d69f6a 0 9%, #373231 10% 27%, #bd936f 28% 30%, #19191b 31%)",
            boxShadow: "0 0 90px #5f3320",
          }}
        />
      </div>
    );
  }

  if (type === "form") {
    return (
      <div className="absolute inset-0 right-[45%] flex items-end justify-center gap-[14px]">
        {[60, 75, 49].map((h, i) => (
          <div
            key={i}
            className="rounded-t-[80px] rounded-b-[10px]"
            style={{
              width: "22%",
              height: `${h}%`,
              background: "linear-gradient(145deg, #e7ccab, #7c422a)",
              transform: `rotate(${[-8, 4, 12][i]}deg)${i === 1 ? " translateY(-7%)" : ""}`,
            }}
          />
        ))}
      </div>
    );
  }

  if (type === "note") {
    return (
      <div className="absolute inset-0 right-[45%] grid place-content-center gap-[12px] rotate-[-5deg]">
        {[
          { text: "IDEA_01", bg: "#e6e0ad", ml: "0" },
          { text: "BUILD", bg: "#b8cef1", ml: "50px" },
          { text: "SHIP", bg: "#c6b2eb", ml: "-30px" },
        ].map((note, i) => (
          <div
            key={i}
            className="text-[#171717] font-mono text-[28px] shadow-[12px_14px_0_#0b121d]"
            style={{
              background: note.bg,
              width: "260px",
              padding: "35px",
              marginLeft: note.ml,
            }}
          >
            {note.text}
          </div>
        ))}
      </div>
    );
  }

  if (type === "orbit") {
    return (
      <div className="absolute inset-0 right-[45%] grid place-items-center">
        {[55, 37, 20].map((w, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#7d78d1]"
            style={{
              width: `${w}%`,
              aspectRatio: "1",
              ...(i === 2
                ? {
                    background:
                      "radial-gradient(circle, #b9cdf2, transparent 70%)",
                    boxShadow: "0 0 80px #8468d4",
                  }
                : {}),
            }}
          />
        ))}
      </div>
    );
  }

  return null;
};

export const Projects = () => {
  return (
    <section className="pt-[130px]" id="projects">
      {/* Heading */}
      <div className="px-[32px] pb-[90px]">
        <p className="font-mono text-[10px] font-medium tracking-[0.13em] text-[#a5a5ad] uppercase">
          SELECTED / WORK
        </p>
        <TextEngine
          tag="h2"
          className="font-display uppercase leading-display mt-[28px]"
          style={{
            font: "clamp(55px, 9vw, 150px) / 0.82 var(--font-archivo)",
            letterSpacing: "-0.07em",
          }}
          letterIn={{ opacity: 1, y: 0 }}
          letterOut={{ opacity: 0, y: 40 }}
          letterStagger={20}
          letterConfig={{ tension: 140, friction: 16 }}
          mode="once"
          overflow
        >
          PROJECTS THAT THINK IN SYSTEMS
        </TextEngine>
      </div>

      {/* Project panels */}
      {projects.map((project, i) => (
        <Inview
          key={project.id}
          tag="article"
          className="h-screen min-h-[700px] relative overflow-hidden border-t border-[#333]"
          style={{ background: project.bg }}
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          mode="once"
          config={{ tension: 120, friction: 14 }}
        >
          {/* Giant background text */}
          <div
            className="absolute top-[-0.07em] left-[-0.03em] font-display uppercase whitespace-nowrap pointer-events-none select-none"
            style={{
              font: "clamp(130px, 29vw, 480px) / 0.8 var(--font-archivo)",
              letterSpacing: "-0.09em",
              color: "rgba(255,255,255,0.07)",
            }}
            aria-hidden="true"
          >
            {project.giant}
          </div>

          {/* Art */}
          <ProjectArt type={project.art} />

          {/* Window card */}
          <Inview
            className="absolute z-[5] right-[7vw] top-1/2 -translate-y-1/2 w-[min(46vw,700px)] min-h-[55vh] bg-[#d2d2d0] text-[#111] border border-white shadow-[16px_16px_0_rgba(0,0,0,0.35)] flex flex-col"
            from={{ opacity: 0, x: 60 }}
            to={{ opacity: 1, x: 0 }}
            mode="once"
            config={{ tension: 120, friction: 14 }}
            delayIn={200}
          >
            {/* Window bar */}
            <div className="flex justify-content-between border-b border-[#777] p-[13px] px-[16px] font-mono text-[10px] font-medium">
              <span>{project.windowTitle}</span>
              <span>{project.number}</span>
            </div>

            {/* Content */}
            <div
              className="px-[clamp(28px,4vw,64px)] py-[clamp(28px,4vw,64px)] my-auto"
              style={{ flex: "1 0 auto" }}
            >
              <p className="font-mono text-[10px] tracking-[0.12em]">
                {project.label}
              </p>
              <h3
                className="font-display uppercase mt-[20px] mb-[38px]"
                style={{
                  font: "clamp(29px, 4vw, 65px) / 1.02 var(--font-archivo)",
                  letterSpacing: "-0.05em",
                }}
              >
                {project.title}
              </h3>
              <ul className="list-none p-0 flex flex-wrap gap-[8px]">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="border border-[#555] rounded-full px-[12px] py-[8px] font-mono text-[9px]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Link */}
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto border-t border-[#777] py-[18px] px-[18px] no-underline font-mono text-[10px] font-medium"
              >
                {project.linkText}
              </a>
            ) : (
              <span className="mt-auto border-t border-[#777] py-[18px] px-[18px] font-mono text-[10px] font-medium text-[#555]">
                {project.linkText}
              </span>
            )}
          </Inview>
        </Inview>
      ))}
    </section>
  );
};
