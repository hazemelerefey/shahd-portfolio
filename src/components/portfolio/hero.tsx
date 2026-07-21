"use client";

import Image from "next/image";
import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";

export const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        height: "100svh",
        minHeight: "720px",
        background:
          "radial-gradient(circle at 50% 42%, #d0c5ea 0, #aebde4 35%, #829bd2 75%, #758ec9 100%)",
        color: "#3c3854",
      }}
    >
      {/* Glow aura */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "68vw",
          height: "68vw",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.28), transparent 65%)",
          filter: "blur(5px)",
        }}
        aria-hidden="true"
      />

      {/* Kicker */}
      <Inview
        tag="p"
        className="absolute z-10 font-mono text-[11px] font-medium tracking-[0.12em]"
        style={{ top: "15%" }}
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
      >
        YOU IMAGINE — I BUILD
      </Inview>

      {/* Main title */}
      <TextEngine
        tag="h1"
        className="absolute z-10 text-center font-display uppercase leading-display"
        style={{
          top: "22%",
          insetInline: 0,
          fontSize: "clamp(64px, 12.7vw, 300px)",
          lineHeight: 0.8,
          letterSpacing: "-0.075em",
          color: "#45415d",
        }}
        letterIn={{ opacity: 1, y: 0 }}
        letterOut={{ opacity: 0, y: 40 }}
        letterStagger={30}
        letterConfig={{ tension: 120, friction: 14 }}
        mode="once"
        overflow
      >
        FULL STACK DEVELOPER
      </TextEngine>

      {/* Portrait */}
      <Inview
        className="absolute z-[3] bottom-0 left-1/2 flex items-end justify-center"
        style={{
          width: "min(51vw, 760px)",
          height: "120%",
          transform: "translateX(-50%) translateY(46%)",
          overflow: "visible",
        }}
        from={{ opacity: 0, scale: 0.9 }}
        to={{ opacity: 1, scale: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={300}
      >
        <Image
          src="/hero.png"
          alt="Portrait of Shahd Khairy Abdallah"
          className="w-full h-full object-contain"
          style={{ objectPosition: "center 61%", transform: "scale(2.20)" }}
          width={623}
          height={414}
          priority
        />
      </Inview>

      {/* Gradient overlay */}
      <div
        className="absolute z-[4] inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(118,133,190,0.25) 48%, transparent 74%)",
        }}
        aria-hidden="true"
      />

      {/* Role */}
      <Inview
        tag="p"
        className="absolute z-[7] bottom-[6%] font-mono text-white"
        style={{
          fontSize: "clamp(17px, 2vw, 30px)",
          textShadow: "0 1px 12px #31314d",
        }}
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={500}
      >
        MERN applications &amp; interactive experiences
      </Inview>

      {/* Meta left */}
      <Inview
        className="absolute z-[7] bottom-[6%] left-[32px] font-mono text-[10px] font-medium tracking-[0.07em] leading-[1.55] text-[#f6f6f8] grid"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={700}
      >
        <span>CAIRO — EGYPT</span>
        <span>ARABIC · ENGLISH B2</span>
      </Inview>

      {/* Meta right */}
      <Inview
        className="absolute z-[7] bottom-[6%] right-[32px] font-mono text-[10px] font-medium tracking-[0.07em] leading-[1.55] text-[#f6f6f8] grid text-right"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={700}
      >
        <span>REACT · NODE · EXPRESS</span>
        <span>MONGODB · REST APIS</span>
      </Inview>

      {/* Scroll cue */}
      <Inview
        tag="a"
        href="#about"
        className="absolute z-[8] bottom-[28px] left-1/2 -translate-x-1/2 font-mono text-[9px] text-white no-underline flex gap-3"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={900}
      >
        SCROLL TO EXPLORE <b>↓</b>
      </Inview>
    </section>
  );
};
