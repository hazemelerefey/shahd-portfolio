"use client";

import { useState } from "react";
import { Inview } from "@/components/animation/springs/in-view";
import { Spring } from "@/components/animation/springs/spring";

const terminalLines = [
  "> Evaluating portfolio flow... READY",
  "> Loading Shahd_Khairy.profile",
  "- React components: structured",
  "- API thinking: enabled",
  "- Responsive systems: calibrated",
  "- Production mindset: online",
  "",
  "**SYSTEM RESPONSE:**",
  "> Curiosity detected",
  "> Collaboration channel available",
  "> Full-stack toolkit initialized",
  "> No fabricated metrics found",
  "",
  "STATUS @SHAHD_READY: Let's build something useful.",
];

export const Finale = () => {
  const [dialogOpen, setDialogOpen] = useState(true);

  return (
    <section
      className="h-screen min-h-[700px] relative overflow-hidden text-white p-[20px] font-mono"
      id="finale"
      style={{ background: "#2438b4" }}
    >
      {/* Terminal text */}
      <Inview
        className="absolute inset-[20px] text-[clamp(10px,1.25vw,18px)] leading-[1.55] opacity-95"
        from={{ opacity: 0 }}
        to={{ opacity: 0.95 }}
        mode="once"
        config={{ duration: 1000 }}
      >
        {terminalLines.map((line, i) => (
          <p key={i} className="m-0">
            {line}
          </p>
        ))}
        <p className="m-0">
          <span className="animate-pulse">█</span>
        </p>
      </Inview>

      {/* Windows 95 dialog */}
      {dialogOpen && (
        <Spring
          className="absolute z-[3] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(650px,90vw)] bg-[#c4c4c4] text-black border-2 border-solid"
          style={{
            borderColor: "#fff #222 #222 #fff",
            boxShadow: "10px 10px 0 rgba(0,0,0,0.4)",
            fontFamily: "Arial, sans-serif",
          }}
          from={{ opacity: 0, scale: 0.8 }}
          to={{ opacity: 1, scale: 1 }}
          mode="once"
          config={{ duration: 600, tension: 200, friction: 20 }}
          delayIn={500}
        >
          {/* Title bar */}
          <div className="bg-[#10157a] text-white py-[5px] px-[6px] flex justify-between text-[13px] font-bold">
            <span>Shahd_Khairy.exe</span>
            <button
              type="button"
              aria-label="Close dialog"
              onClick={() => setDialogOpen(false)}
              className="w-[22px] h-[20px] leading-[14px] border-2 border-solid border-[#fff_#222_#222_#fff] bg-[#c4c4c4] font-bold"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-[25px]">
            <h2 className="font-bold text-[clamp(24px,3vw,40px)] leading-none m-0 mb-[12px]">
              Still scrolling? You found the source.
            </h2>
            <p className="text-[13px]">
              Download Shahd&apos;s CV or start a conversation.
            </p>
            <div className="grid grid-cols-2 gap-[14px] my-[24px]">
              <label className="grid gap-[5px] text-[12px]">
                Name
                <input
                  type="text"
                  autoComplete="name"
                  className="p-[8px] border-2 border-solid border-[#555_#fff_#fff_#555] bg-white"
                />
              </label>
              <label className="grid gap-[5px] text-[12px]">
                E-mail
                <input
                  type="email"
                  autoComplete="email"
                  className="p-[8px] border-2 border-solid border-[#555_#fff_#fff_#555] bg-white"
                />
              </label>
            </div>
            <div className="flex justify-end gap-[9px]">
              <a
                href="/Shahd_Khairy_Abdallah_CV.docx"
                download
                className="bg-[#c4c4c4] text-black border-2 border-solid border-[#fff_#222_#222_#fff] py-[9px] px-[16px] no-underline text-[11px] font-bold"
              >
                GET CV
              </a>
              <a
                href="mailto:shahdkhairy2026@gmail.com"
                className="bg-[#c4c4c4] text-black border-2 border-solid border-[#fff_#222_#222_#fff] py-[9px] px-[16px] no-underline text-[11px] font-bold"
              >
                SAY HELLO
              </a>
            </div>
          </div>
        </Spring>
      )}

      {/* Reopen button */}
      {!dialogOpen && (
        <button
          className="absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c4c4c4] text-black border-2 border-solid border-[#fff_#222_#222_#fff] py-[9px] px-[16px] text-[11px] font-bold cursor-pointer"
          type="button"
          onClick={() => setDialogOpen(true)}
        >
          OPEN SHAHD_KHAIRY.EXE
        </button>
      )}

      {/* Footer */}
      <footer className="absolute z-[4] bottom-[15px] left-[20px] right-[20px] flex justify-between text-[9px]">
        <span>© 2026 SHAHD KHAIRY ABDALLAH</span>
        <a href="#hero" className="no-underline text-white">
          BACK TO TOP ↑
        </a>
      </footer>
    </section>
  );
};
