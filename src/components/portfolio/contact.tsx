"use client";

import { useState, type FormEvent } from "react";
import { Inview } from "@/components/animation/springs/in-view";

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("Message sent! Shahd will get back to you soon.");
  };

  return (
    <section
      className="relative py-[140px] px-[32px] pb-[120px] min-h-screen"
      id="contact"
    >
      {/* Side text */}
      <p className="absolute left-[32px] top-[160px] font-mono text-[10px] text-[#999] [writing-mode:vertical-rl]">
        LET&apos;S BUILD SOMETHING USEFUL
      </p>

      {/* Inline form */}
      <Inview
        tag="form"
        onSubmit={handleSubmit}
        className="max-w-[1250px] mx-auto"
        style={{
          fontSize: "clamp(31px, 5vw, 75px)",
          lineHeight: 1.45,
          letterSpacing: "-0.055em",
        }}
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
      >
        <p className="m-0 mb-[55px]">
          Hey, Shahd! My name is{" "}
          <label htmlFor="contact-name">
            <span className="sr-only">Your name</span>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              required
              className="border-0 border-b-2 border-solid border-[#555] bg-transparent text-white outline-none text-center min-w-[250px] max-w-full text-[0.72em] transition-colors duration-200 focus:border-[#b9cdf2] placeholder:text-[#45454c]"
            />
          </label>{" "}
          and I&apos;m writing from{" "}
          <label htmlFor="contact-origin">
            <span className="sr-only">Company or country</span>
            <input
              id="contact-origin"
              name="origin"
              placeholder="company / country"
              required
              className="border-0 border-b-2 border-solid border-[#555] bg-transparent text-white outline-none text-center min-w-[250px] max-w-full text-[0.72em] transition-colors duration-200 focus:border-[#b9cdf2] placeholder:text-[#45454c]"
            />
          </label>
          .
        </p>

        <fieldset className="border-0 p-0 m-0 mb-[55px]">
          <legend className="font-mono text-[10px] tracking-[0.1em] mb-[20px]">
            Let&apos;s connect about
          </legend>
          <div className="flex flex-wrap gap-[9px]">
            {["Potential project", "Collaboration", "Networking"].map(
              (topic, i) => (
                <label key={topic}>
                  <input
                    type="radio"
                    name="topic"
                    value={topic}
                    defaultChecked={i === 0}
                    className="absolute opacity-0 pointer-events-none"
                  />
                  <span className="font-mono text-[11px] tracking-normal leading-none border border-[#555] py-[13px] px-[16px] rounded-full inline-block cursor-pointer whitespace-nowrap peer-checked:bg-[#b9cdf2] peer-checked:text-[#111] peer-checked:border-[#b9cdf2]">
                    {topic}
                  </span>
                </label>
              )
            )}
          </div>
        </fieldset>

        <p className="m-0 mb-[55px]">
          We can talk in more detail at{" "}
          <label htmlFor="contact-email">
            <span className="sr-only">Email address</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@website.com"
              required
              className="border-0 border-b-2 border-solid border-[#555] bg-transparent text-white outline-none text-center min-w-[250px] max-w-full text-[0.72em] transition-colors duration-200 focus:border-[#b9cdf2] placeholder:text-[#45454c]"
            />
          </label>
          .
        </p>

        <label
          className="flex items-end gap-[20px]"
          htmlFor="contact-message"
        >
          In short,{" "}
          <textarea
            id="contact-message"
            name="message"
            rows={2}
            placeholder="type your message"
            required
            className="flex-1 border-0 border-b-2 border-solid border-[#555] bg-transparent text-white outline-none text-left min-w-[250px] max-w-full text-[0.72em] transition-colors duration-200 focus:border-[#b9cdf2] placeholder:text-[#45454c] resize-y"
          />
        </label>

        <button
          type="submit"
          className="w-full border-0 border-t border-b border-solid border-[#666] text-white bg-transparent py-[30px] flex justify-between cursor-pointer hover:text-[#b9cdf2]"
          style={{
            font: "clamp(30px, 4vw, 65px) var(--font-archivo)",
          }}
        >
          SEND A FORM <span>↗</span>
        </button>

        {status && (
          <p className="font-mono text-[12px] text-[#b9cdf2] mt-[14px]">
            {status}
          </p>
        )}
      </Inview>

      {/* Direct links */}
      <Inview
        className="max-w-[1250px] mx-auto mt-[50px] flex gap-[30px] flex-wrap"
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        mode="once"
        config={{ tension: 120, friction: 14 }}
        delayIn={300}
      >
        <a
          href="mailto:shahdkhairy2026@gmail.com"
          className="font-mono text-[10px] text-[#aaa] no-underline hover:text-white"
        >
          EMAIL ↗
        </a>
        <a
          href="https://www.linkedin.com/in/shahd-khairy"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] text-[#aaa] no-underline hover:text-white"
        >
          LINKEDIN ↗
        </a>
        <a
          href="tel:+201142657362"
          className="font-mono text-[10px] text-[#aaa] no-underline hover:text-white"
        >
          PHONE ↗
        </a>
      </Inview>
    </section>
  );
};
