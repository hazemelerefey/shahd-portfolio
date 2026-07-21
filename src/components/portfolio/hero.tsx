"use client";

import { useEffect, useState } from "react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-aura" aria-hidden="true" />
      <p className={`hero-kicker ${loaded ? "reveal" : ""}`}>YOU IMAGINE — I BUILD</p>
      <h1 className="hero-title" aria-label="Full Stack Developer">
        <span>FULL STACK</span>
        <span>DEVELOPER</span>
      </h1>
      <div className={`portrait-wrap ${loaded ? "reveal" : ""}`}>
        <img src="/hero.png" alt="Portrait of Shahd Khairy Abdallah" />
      </div>
      <p className={`hero-role ${loaded ? "reveal" : ""}`}>MERN applications &amp; interactive experiences</p>
      <div className={`hero-meta left ${loaded ? "reveal" : ""}`}>
        <span>CAIRO — EGYPT</span>
        <span>ARABIC · ENGLISH B2</span>
      </div>
      <div className={`hero-meta right ${loaded ? "reveal" : ""}`}>
        <span>REACT · NODE · EXPRESS</span>
        <span>MONGODB · REST APIS</span>
      </div>
      <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <b>↓</b></a>
    </section>
  );
};
