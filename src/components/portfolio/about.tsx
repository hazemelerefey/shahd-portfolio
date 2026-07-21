"use client";

import { Inview } from "@/components/animation/springs/in-view";

const stats = [
  {
    label: "CURRENTLY",
    title: "AI-BASED SOFTWARE",
    subtitle: "Development Trainee",
    chip: "MCIT · DIGILIANS",
    gradient: "linear-gradient(135deg, #c8daf4, #9dafdf)",
  },
  {
    label: "CORE STACK",
    title: "MERN",
    subtitle: "React · Node · Express · MongoDB",
    chip: "FULL STACK",
    gradient: "linear-gradient(135deg, #d8caed, #bfa9e4)",
  },
  {
    label: "FOUNDATION",
    title: "SECURE APIs",
    subtitle: "JWT · Role-Based Authorization · MVC",
    chip: "RESTFUL",
    gradient: "linear-gradient(135deg, #d8caed, #bfa9e4)",
  },
  {
    label: "ALSO HUMAN",
    title: "I BUILD WITH CARE :)",
    subtitle: "Curiosity, clarity, and collaboration",
    chip: "PROBLEM SOLVER",
    gradient: "linear-gradient(135deg, #c8daf4, #9dafdf)",
  },
];

export const About = () => {
  return (
    <section className="relative overflow-hidden min-h-screen px-[10px]" id="about">
      {/* Ghost text */}
      <div
        className="absolute top-0 left-0 pointer-events-none whitespace-nowrap select-none"
        style={{
          font: "clamp(100px, 22vw, 300px) / 0.82 'Manrope', sans-serif",
          fontWeight: 400,
          letterSpacing: "0.1em",
          color: "#90909c",
          transform: "translateX(4%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      >
        SIMPLY ABOUT
      </div>

      {/* Labels */}
      <Inview
        className="absolute top-[14.9%] left-[50px] right-[55px] z-10 flex justify-between font-mono text-[10px] font-medium tracking-[0.1em] text-[#f6f6f8] pointer-events-none"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ duration: 800 }}
      >
        <span>PIXEL-PERFECT</span>
        <span>SECURE ∞</span>
        <span>/CODE-QUALITY</span>
        <span>{"//HASSLE-FREE"}</span>
      </Inview>

      {/* Stats grid */}
      <div
        className="relative z-[2] grid grid-cols-2 max-w-[4000px] mx-auto mt-[200px] border-[30px] border-solid gap-[8px]"
        style={{
          borderColor: "#1a1a1f",
          background: "#1a1a1f",
          minHeight: "85vh",
        }}
      >
        {stats.map((stat, i) => (
          <Inview
            key={stat.label}
            tag="article"
            className="text-[#111] p-[28px] px-[32px] flex flex-col items-start"
            style={{ background: stat.gradient }}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            mode="once"
            config={{ duration: 800 }}
            delayIn={i * 150}
          >
            <small className="font-mono text-[10px] font-medium tracking-[0.1em] mb-auto">
              {stat.label}
            </small>
            <h2
              className="m-0 mb-[8px] font-display uppercase"
              style={{
                font: "clamp(44px, 6.5vw, 100px) / 0.88 var(--font-archivo)",
                letterSpacing: "-0.06em",
              }}
            >
              {stat.title}
            </h2>
            <p className="m-0 text-[16px] text-[#333]">{stat.subtitle}</p>
            <div className="mt-auto flex gap-[8px] flex-wrap">
              <span className="border border-solid border-[#222] px-[14px] py-[8px] rounded-full font-mono text-[9px] font-medium tracking-[0.08em]">
                {stat.chip}
              </span>
            </div>
          </Inview>
        ))}
      </div>
    </section>
  );
};
