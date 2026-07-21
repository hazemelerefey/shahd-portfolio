"use client";

import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleSpring, titleApi] = useSpring(() => ({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 14 },
    delay: 300,
  }));

  const [kickerSpring, kickerApi] = useSpring(() => ({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 14 },
    delay: 100,
  }));

  const [portraitSpring, portraitApi] = useSpring(() => ({
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    config: { tension: 80, friction: 14 },
    delay: 500,
  }));

  const [roleSpring, roleApi] = useSpring(() => ({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 120, friction: 14 },
    delay: 700,
  }));

  const [metaSpring, metaApi] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 120, friction: 14 },
    delay: 900,
  }));

  return (
    <section className="hero">
      <div className="hero-aura" aria-hidden="true" />

      <animated.p className="hero-kicker" style={kickerSpring}>
        YOU IMAGINE — I BUILD
      </animated.p>

      <h1 className="hero-title" aria-label="Full Stack Developer" ref={titleRef}>
        <animated.span style={titleSpring}>FULL STACK</animated.span>
        <animated.span style={{ ...titleSpring, delay: 400 }}>DEVELOPER</animated.span>
      </h1>

      <animated.div className="portrait-wrap" style={portraitSpring}>
        <img src="/hero.png" alt="Portrait of Shahd Khairy Abdallah" />
      </animated.div>

      <animated.p className="hero-role" style={roleSpring}>
        MERN applications &amp; interactive experiences
      </animated.p>

      <animated.div className="hero-meta left" style={metaSpring}>
        <span>CAIRO — EGYPT</span>
        <span>ARABIC · ENGLISH B2</span>
      </animated.div>

      <animated.div className="hero-meta right" style={metaSpring}>
        <span>REACT · NODE · EXPRESS</span>
        <span>MONGODB · REST APIS</span>
      </animated.div>

      <a className="scroll-cue" href="#about">
        SCROLL TO EXPLORE <b>↓</b>
      </a>
    </section>
  );
};
