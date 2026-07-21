"use client";

import Image from "next/image";
import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";

export const Hero = () => {
  return (
    <section
      className="hero relative overflow-hidden grid place-items-center"
      style={{
        height: "100svh",
        minHeight: "720px",
        background:
          "radial-gradient(circle at 50% 42%, #d0c5ea 0, #aebde4 35%, #829bd2 75%, #758ec9 100%)",
        color: "#3c3854",
      }}
    >
      {/* Glow aura behind title */}
      <div className="hero-aura" aria-hidden="true" />

      {/* Kicker */}
      <p className="hero-kicker">YOU IMAGINE — I BUILD</p>

      {/* Main title - two spans like original */}
      <h1
        className="hero-title"
        aria-label="Full Stack Developer"
      >
        <TextEngine
          tag="span"
          className="block"
          letterIn={{ opacity: 1, y: 0 }}
          letterOut={{ opacity: 0, y: 40 }}
          letterStagger={30}
          letterConfig={{ tension: 120, friction: 14 }}
          mode="once"
          overflow
        >
          FULL STACK
        </TextEngine>
        <TextEngine
          tag="span"
          className="block"
          letterIn={{ opacity: 1, y: 0 }}
          letterOut={{ opacity: 0, y: 40 }}
          letterStagger={30}
          letterConfig={{ tension: 120, friction: 14 }}
          mode="once"
          overflow
        >
          DEVELOPER
        </TextEngine>
      </h1>

      {/* Portrait */}
      <div className="portrait-wrap">
        <Image
          src="/hero.png"
          alt="Portrait of Shahd Khairy Abdallah"
          width={623}
          height={414}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Role */}
      <p className="hero-role">MERN applications &amp; interactive experiences</p>

      {/* Meta left */}
      <div className="hero-meta left">
        <span>CAIRO — EGYPT</span>
        <span>ARABIC · ENGLISH B2</span>
      </div>

      {/* Meta right */}
      <div className="hero-meta right">
        <span>REACT · NODE · EXPRESS</span>
        <span>MONGODB · REST APIS</span>
      </div>

      {/* Scroll cue */}
      <a className="scroll-cue" href="#about">
        SCROLL TO EXPLORE <b>↓</b>
      </a>
    </section>
  );
};
