"use client";

import { useState } from "react";
import { Inview } from "@/components/animation/springs/in-view";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-[2000] inset-0 bottom-auto flex items-center justify-between py-[22px] px-[32px] mix-blend-difference text-white">
        {/* Logo */}
        <a
          className="grid grid-cols-[repeat(2,23px)] no-underline font-display text-[16px] leading-[22px]"
          href="#hero"
          aria-label="Shahd Khairy home"
        >
          <span className="grid place-items-center border border-[#999] text-[#999]">
            S
          </span>
          <span className="grid place-items-center border border-[#999] text-[#999] -ml-px">
            K
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-[clamp(14px,2vw,34px)] font-mono text-[10px] font-medium tracking-[0.06em]">
          {["ABOUT ME", "WHY ME", "PROJECTS", "APPROACH", "VALUE ?!"].map(
            (label, i) => (
              <a
                key={label}
                href={`#${["about", "why", "projects", "approach", "calculator"][i]}`}
                className="no-underline relative after:content-[''] after:absolute after:left-0 after:right-full after:bottom-[-4px] after:h-px after:bg-current after:transition-[right] after:duration-250 hover:after:right-0"
              >
                {label}
              </a>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex gap-[8px] items-center">
          <a
            className="hidden sm:flex min-h-[34px] py-[9px] px-[14px] border border-current no-underline font-mono text-[10px] font-medium tracking-[0.06em] text-[#999]"
            href="/Shahd_Khairy_Abdallah_CV.docx"
            download
          >
            CV
          </a>
          <a
            className="min-h-[34px] py-[9px] px-[14px] border border-current no-underline font-mono text-[10px] font-medium tracking-[0.06em] bg-[#aaa] text-black"
            href="#contact"
          >
            LET&apos;S TALK <span>↗</span>
          </a>
          <button
            className="w-[38px] h-[38px] border-0 bg-transparent text-white grid place-content-center gap-[7px] cursor-pointer md:hidden"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className="block w-[28px] h-px bg-current transition-transform duration-300" />
            <i className="block w-[28px] h-px bg-current transition-transform duration-300" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed z-[1900] inset-0 bg-[#101013] py-[110px] px-[32px] pb-[32px] flex flex-col justify-between transition-transform duration-[550ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="grid">
          {["About", "Projects", "Approach", "Value", "Contact"].map(
            (label, i) => (
              <a
                key={label}
                href={`#${["about", "projects", "approach", "calculator", "contact"][i]}`}
                onClick={() => setMenuOpen(false)}
                className="no-underline text-[clamp(42px,9vw,95px)] leading-none font-display uppercase border-b border-[#333] py-[10px]"
              >
                {label}
              </a>
            )
          )}
        </nav>
        <p className="font-mono text-[11px] text-[#aaa]">
          CAIRO, EGYPT · AVAILABLE FOR OPPORTUNITIES
        </p>
      </div>
    </>
  );
};
