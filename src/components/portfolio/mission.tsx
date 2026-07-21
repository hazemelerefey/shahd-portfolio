"use client";

import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";

export const Mission = () => {
  return (
    <section
      className="relative overflow-hidden min-h-[110vh] py-[140px] px-[32px] pb-[90px]"
      id="why"
    >
      {/* Left label */}
      <div className="absolute left-[32px] top-[140px] grid font-mono text-[10px] text-[#aaa] gap-[14px]">
        <span>MY</span>
        <span>MISSION</span>
        <span>IS</span>
      </div>

      {/* Year */}
      <p className="absolute right-[32px] top-[125px] font-mono text-[10px] text-[#aaa]">
        2026
      </p>

      {/* Mission statement */}
      <TextEngine
        tag="h2"
        className="mx-auto my-[12vh] max-w-[1450px] text-center font-display uppercase leading-display"
        style={{
          font: "clamp(45px, 7.4vw, 128px) / 0.94 var(--font-archivo)",
          letterSpacing: "-0.065em",
          background:
            "linear-gradient(120deg, #eff2ff, #aabbe8 50%, #c4a9e8)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        lineIn={{ y: "0%", opacity: 1 }}
        lineOut={{ y: "100%", opacity: 0 }}
        lineStagger={100}
        lineConfig={{ tension: 100, friction: 12 }}
        mode="once"
        overflow
      >
        Turn thoughtful ideas into secure, scalable digital products.
      </TextEngine>

      {/* Skill marquee */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t border-b border-solid border-[#333] overflow-hidden py-[17px] font-mono text-[11px] whitespace-nowrap"
        aria-label="Skills"
      >
        <div
          className="inline-block animate-marquee"
          style={{
            paddingLeft: "100%",
          }}
        >
          JAVASCRIPT · REACT · NODE.JS · EXPRESS · MONGODB · TYPESCRIPT ·
          THREE.JS · AWS · DOCKER · KUBERNETES ·{" "}
          JAVASCRIPT · REACT · NODE.JS · EXPRESS · MONGODB · TYPESCRIPT ·
          THREE.JS · AWS · DOCKER · KUBERNETES ·
        </div>
      </div>
    </section>
  );
};
