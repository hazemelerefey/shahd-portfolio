"use client";

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import TextEngine from "spring-text-engine";
import { Inview } from "@/components/animation/springs/in-view";

export const Calculator = () => {
  const [features, setFeatures] = useState(8);
  const [complexity, setComplexity] = useState(3);

  const total = features * complexity * 4;

  const totalSpring = useSpring({
    number: total,
    config: { tension: 200, friction: 20 },
  });

  return (
    <section
      className="py-[140px] px-[32px] pb-[110px] min-h-screen"
      id="calculator"
    >
      {/* Eyebrow */}
      <Inview
        tag="p"
        className="font-mono text-[10px] font-medium tracking-[0.13em] text-[#a5a5ad] uppercase"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
      >
        BUILD / VALUE
      </Inview>

      {/* Title */}
      <TextEngine
        tag="h2"
        className="font-display uppercase leading-display my-[50px]"
        style={{
          font: "clamp(52px, 8.8vw, 145px) / 0.83 var(--font-archivo)",
          letterSpacing: "-0.07em",
        }}
        lineIn={{ y: "0%", opacity: 1 }}
        lineOut={{ y: "100%", opacity: 0 }}
        lineStagger={100}
        lineConfig={{ tension: 100, friction: 12 }}
        mode="once"
        overflow
      >
        Scope ideas with a simple effort calculator.
      </TextEngine>

      {/* Note */}
      <Inview
        tag="p"
        className="max-w-[500px] ml-auto mb-[60px] text-[#999] text-[14px]"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={200}
      >
        An illustrative planning tool—not a quote. Adjust scope and complexity
        to estimate development effort.
      </Inview>

      {/* Calculator grid */}
      <Inview
        className="grid grid-cols-[1fr_1fr_1.2fr] max-w-[1400px] mx-auto border-t border-b border-[#555]"
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={300}
      >
        {/* Features control */}
        <div className="p-[35px] px-[28px] min-h-[340px] flex flex-col border-r border-[#444]">
          <small className="font-mono text-[10px] tracking-[0.1em]">
            FEATURE UNITS
          </small>
          <span className="mt-[18px] text-[#aaa] text-[14px] max-w-[300px]">
            How many focused features are in the first release?
          </span>
          <input
            type="range"
            min={1}
            max={20}
            value={features}
            onChange={(e) => setFeatures(Number(e.target.value))}
            className="mt-auto mb-[35px] w-full accent-[#b9cdf2]"
          />
          <output className="font-mono text-[10px] text-[#999]">
            <animated.b
              className="font-display text-[clamp(65px,7vw,110px)] leading-[0.8] text-white tracking-[-0.08em]"
              style={{ display: "block" }}
            >
              {features}
            </animated.b>{" "}
            FEATURES
          </output>
        </div>

        {/* Complexity control */}
        <div className="p-[35px] px-[28px] min-h-[340px] flex flex-col border-r border-[#444]">
          <small className="font-mono text-[10px] tracking-[0.1em]">
            COMPLEXITY
          </small>
          <span className="mt-[18px] text-[#aaa] text-[14px] max-w-[300px]">
            Average implementation weight per feature.
          </span>
          <input
            type="range"
            min={1}
            max={5}
            value={complexity}
            onChange={(e) => setComplexity(Number(e.target.value))}
            className="mt-auto mb-[35px] w-full accent-[#b9cdf2]"
          />
          <output className="font-mono text-[10px] text-[#999]">
            <animated.b
              className="font-display text-[clamp(65px,7vw,110px)] leading-[0.8] text-white tracking-[-0.08em]"
              style={{ display: "block" }}
            >
              {complexity}
            </animated.b>{" "}
            / 5
          </output>
        </div>

        {/* Result */}
        <div className="p-[35px] px-[28px] min-h-[340px] flex flex-col">
          <small className="font-mono text-[10px] tracking-[0.1em]">
            ESTIMATED EFFORT
          </small>
          <span className="mt-[18px] text-[#aaa] text-[14px] max-w-[300px]">
            A transparent starting point for a conversation.
          </span>
          <p className="mt-auto mb-[30px] font-mono text-[11px] text-[#999]">
            {features} × {complexity} × 4 hours ≈
          </p>
          <output className="font-mono text-[10px] text-[#999]">
            <animated.b
              className="font-display text-[clamp(65px,7vw,110px)] leading-[0.8] text-[#b9cdf2] tracking-[-0.08em]"
              style={{ display: "block" }}
            >
              {totalSpring.number.to((n) => Math.round(n))}
            </animated.b>{" "}
            HOURS*
          </output>
        </div>
      </Inview>

      {/* CTA button */}
      <Inview
        tag="a"
        href="#contact"
        className="flex justify-between max-w-[1400px] mx-auto mt-[30px] py-[25px] border-b border-white no-underline"
        style={{
          font: "clamp(22px, 3vw, 46px) var(--font-archivo)",
        }}
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={500}
      >
        DISCUSS THE REAL SCOPE <span>↗</span>
      </Inview>
    </section>
  );
};
