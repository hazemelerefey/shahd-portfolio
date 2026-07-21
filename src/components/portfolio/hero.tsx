"use client";

import { useEffect, useState } from "react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-aura" aria-hidden="true" />

      <p className={`hero-kicker ${loaded ? "hero-visible" : "hero-hidden"}`}>
        YOU IMAGINE — I BUILD
      </p>

      <h1 className="hero-title" aria-label="Full Stack Developer">
        <span className={loaded ? "hero-visible" : "hero-hidden"}>FULL STACK</span>
        <span className={loaded ? "hero-visible hero-delay-1" : "hero-hidden"}>DEVELOPER</span>
      </h1>

      <div className="portrait-wrap">
        <img src="/hero.png" alt="Portrait of Shahd Khairy Abdallah" />
      </div>

      <p className={`hero-role ${loaded ? "hero-visible hero-delay-2" : "hero-hidden"}`}>
        MERN applications &amp; interactive experiences
      </p>

      <div className={`hero-meta left ${loaded ? "hero-visible hero-delay-3" : "hero-hidden"}`}>
        <span>CAIRO — EGYPT</span>
        <span>ARABIC · ENGLISH B2</span>
      </div>

      <div className={`hero-meta right ${loaded ? "hero-visible hero-delay-3" : "hero-hidden"}`}>
        <span>REACT · NODE · EXPRESS</span>
        <span>MONGODB · REST APIS</span>
      </div>

      <a className="scroll-cue" href="#about">
        SCROLL TO EXPLORE <b>↓</b>
      </a>
    </section>
  );
};
