"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING RUNTIME");
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const progressBarRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    const counterObj = { value: 0 };
    const tl = gsap.timeline();

    // GSAP animated count up
    tl.to(counterObj, {
      value: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const currentVal = Math.round(counterObj.value);
        setProgress(currentVal);

        if (currentVal < 30) {
          setStatusText("INITIALIZING MERN RUNTIME");
        } else if (currentVal < 65) {
          setStatusText("CALIBRATING FULL-STACK MODULES");
        } else if (currentVal < 92) {
          setStatusText("INDEXING PROJECTS & ARCHITECTURE");
        } else {
          setStatusText("SYSTEM READY");
        }

        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${currentVal / 100})`;
        }
      },
    });

    // Exit transition once 100% is reached
    tl.to(contentRef.current, {
      opacity: 0,
      y: -35,
      duration: 0.5,
      ease: "power3.in",
      delay: 0.15,
    });

    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: "power4.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#090A0C] text-[#EFEFEF] flex flex-col justify-between p-6 sm:p-10 md:p-16 select-none overflow-hidden"
      style={{ willChange: "transform" }}
    >
      {/* Background architectural grid line */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      {/* Top Header metadata */}
      <div
        ref={contentRef}
        className="w-full flex justify-between items-center text-[11px] sm:text-xs tracking-[0.22em] text-[#8A8F9E] uppercase font-mono relative z-10"
      >
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163] animate-pulse" />
          <span>SHASHANK LAKHERA</span>
          <span className="hidden sm:inline text-[#515561]">/</span>
          <span className="hidden sm:inline">FULL-STACK DEVELOPER</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-[#515561]">BHOPAL, MP</span>
          <span>EST. 2026</span>
        </div>
      </div>

      {/* Center Counter */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-2 sm:gap-4 overflow-hidden">
          <span
            ref={numberRef}
            className="font-extralight text-7xl sm:text-9xl md:text-[14vw] tracking-tighter leading-none text-[#F2F2F2] font-mono tabular-nums"
          >
            {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}
          </span>
          <span className="text-xl sm:text-3xl md:text-5xl font-light text-[#E2F163] font-mono">
            %
          </span>
        </div>

        {/* Dynamic Status message */}
        <div className="mt-4 sm:mt-6 flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] text-[#8A8F9E] font-mono uppercase text-center">
          <span className="text-[#E2F163]">[</span>
          <span className="transition-all duration-200">{statusText}</span>
          <span className="text-[#E2F163]">]</span>
        </div>
      </div>

      {/* Bottom status & hairline progress track */}
      <div className="relative z-10 w-full flex flex-col gap-4 font-mono text-[11px] sm:text-xs text-[#8A8F9E]">
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 bottom-0 w-full bg-[#E2F163] origin-left scale-x-0 transition-transform duration-75"
          />
        </div>

        <div className="flex justify-between items-center tracking-[0.18em] uppercase pt-1">
          <div className="flex items-center gap-3">
            <span>MERN ARCHITECTURE</span>
            <span className="text-[#515561] hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">REAL-TIME SYSTEMS</span>
          </div>
          <div className="text-[#E2F163]">
            {progress === 100 ? "UNMASKING PORTFOLIO" : "SYNCHRONIZING MODULES"}
          </div>
        </div>
      </div>
    </div>
  );
}
