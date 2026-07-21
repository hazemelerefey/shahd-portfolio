"use client";

import { useSpring, animated } from "@react-spring/web";
import { Inview } from "@/components/animation/springs/in-view";
import { useEffect, useRef, useState } from "react";

const shahdSkills = [
  "Readable architecture",
  "Responsive by default",
  "Secure authentication",
  "Reusable components",
  "Clear Git workflow",
  "API-first thinking",
  "Collaborative delivery",
  "Production mindset",
];

const shortcutSkills = [
  "Tangled structure",
  "Desktop-only layouts",
  "Trust every request",
  "Copy-paste UI",
  "Unclear history",
  "UI-only logic",
  "Silent handoff",
  "Demo mindset",
];

const skillCloud = [
  "JavaScript ES6+",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TypeScript",
  "Three.js",
  "Git",
  "Docker",
  "AWS",
  "Postman",
  "C++",
  "SQL",
  "Tailwind CSS",
];

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const target = 14;
          const duration = 1000;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            current = Math.round(eased * target);
            setCount(current);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute z-[3] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] aspect-square rounded-full bg-[#242428] grid place-content-center text-center border border-[#555] outline-none shadow-[0_0_0_14px_rgba(10,10,10,0.16)]"
      tabIndex={0}
    >
      <small className="font-mono text-[9px]">TOOLBOX</small>
      <strong className="font-display text-[64px] leading-none">
        {String(count).padStart(2, "0")}
      </strong>
      <span className="font-mono text-[9px]">SKILLS</span>
    </div>
  );
};

export const Approach = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[120vh] py-[180px] px-[32px] pb-[120px]"
      id="approach"
    >
      {/* Ghost text */}
      <div
        className="absolute top-[0.1em] left-[-0.03em] font-display uppercase whitespace-nowrap pointer-events-none select-none"
        style={{
          font: "clamp(70px, 14vw, 230px) / 0.75 var(--font-archivo)",
          letterSpacing: "-0.08em",
          color: "#17171c",
        }}
        aria-hidden="true"
      >
        THINK DIFFERENT
      </div>

      {/* Eyebrow */}
      <Inview
        tag="p"
        className="relative z-[3] font-mono text-[10px] font-medium tracking-[0.13em] text-[#a5a5ad] uppercase mb-[60px]"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
      >
        HOW I / WORK
      </Inview>

      {/* Comparison grid */}
      <div className="relative z-[2] max-w-[1400px] mx-auto grid grid-cols-2 gap-[2px] bg-[#111]">
        {/* Shahd card */}
        <Inview
          tag="article"
          className="text-[#111] p-[34px] px-[38px] min-h-[720px] relative"
          style={{
            background: "linear-gradient(135deg, #c8daf4, #9dafdf)",
          }}
          from={{ opacity: 0, x: -40 }}
          to={{ opacity: 1, x: 0 }}
          mode="once"
          config={{ tension: 120, friction: 14 }}
        >
          <b className="font-mono text-[10px] writing-mode-vertical absolute">
            SHAHD
          </b>
          <ul className="list-none mt-[60px] m-0 p-0 text-center">
            {shahdSkills.map((skill) => (
              <li
                key={skill}
                style={{
                  font: "clamp(27px, 3.5vw, 62px) / 1.35 var(--font-onest)",
                  letterSpacing: "-0.05em",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Inview>

        {/* Animated counter */}
        <AnimatedCounter />

        {/* Shortcut card */}
        <Inview
          tag="article"
          className="text-[#111] p-[34px] px-[38px] min-h-[720px] relative"
          style={{
            background: "linear-gradient(135deg, #d8caed, #bfa9e4)",
          }}
          from={{ opacity: 0, x: 40 }}
          to={{ opacity: 1, x: 0 }}
          mode="once"
          config={{ tension: 120, friction: 14 }}
          delayIn={200}
        >
          <b className="font-mono text-[10px] writing-mode-vertical absolute">
            THE SHORTCUT
          </b>
          <ul className="list-none mt-[60px] m-0 p-0 text-center opacity-36">
            {shortcutSkills.map((skill) => (
              <li
                key={skill}
                style={{
                  font: "clamp(27px, 3.5vw, 62px) / 1.35 var(--font-onest)",
                  letterSpacing: "-0.05em",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </Inview>
      </div>

      {/* Skill cloud */}
      <Inview
        className="relative z-[3] flex justify-center flex-wrap gap-[8px] max-w-[1200px] mx-auto mt-[50px]"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={400}
      >
        {skillCloud.map((skill) => (
          <span
            key={skill}
            className="px-[14px] py-[10px] border border-[#444] rounded-full font-mono text-[10px] text-[#aaa] transition-colors duration-250 hover:bg-[#b9cdf2] hover:text-[#111] hover:border-[#b9cdf2]"
          >
            {skill}
          </span>
        ))}
      </Inview>
    </section>
  );
};
