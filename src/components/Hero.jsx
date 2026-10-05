"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const metaRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    // Reveal animation
    const ctx = gsap.context(() => {
      const lines = headlineRef.current?.querySelectorAll(".line-reveal-inner");
      if (lines && lines.length > 0) {
        gsap.fromTo(
          lines,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }

      gsap.fromTo(
        metaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.7,
        }
      );

      gsap.fromTo(
        badgeRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.9,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-44 md:pt-48 pb-12 sm:pb-16 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      {/* Background Architectural Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] sm:w-[45rem] h-[30rem] bg-gradient-to-tr from-white/[0.03] to-[#E2F163]/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Top Tagline / Meta row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-16 font-mono text-xs uppercase tracking-[0.2em] text-[#8A8F9E]">
        <div className="flex items-center gap-3">
          <span className="text-[#E2F163]">[01]</span>
          <span>FULL-STACK DEVELOPER &bull; MERN SPECIALIST</span>
        </div>
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] text-[#EFEFEF] hover:border-[#E2F163]/40 transition-colors"
          data-cursor="STATUS"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E2F163]" />
          <span>AVAILABLE FOR ROLES &bull; BHOPAL, MP</span>
        </div>
      </div>

      {/* Massive Lightweight Typography Headline */}
      <div ref={headlineRef} className="my-auto py-6 sm:py-10">
        <h1 className="font-extralight text-5xl sm:text-7xl md:text-[7.4vw] leading-[0.93] tracking-[-0.04em] text-[#F3F3F3]">
          <div className="overflow-hidden">
            <span className="line-reveal-inner block">ENGINEERING SCALABLE</span>
          </div>
          <div className="overflow-hidden">
            <span className="line-reveal-inner block text-[#8A8F9E] hover:text-[#F3F3F3] transition-colors duration-500">
              FULL-STACK SYSTEMS
            </span>
          </div>
          <div className="overflow-hidden flex flex-wrap items-baseline gap-x-4">
            <span className="line-reveal-inner block">&amp; REAL-TIME APPS</span>
            <span className="line-reveal-inner text-xl sm:text-3xl md:text-5xl font-extralight text-[#E2F163] font-mono tracking-normal">
              &reg;
            </span>
          </div>
        </h1>
      </div>

      {/* Hero Bottom Narrative & Scroll Anchor */}
      <div
        ref={metaRef}
        className="pt-10 sm:pt-14 border-t border-white/[0.07] flex flex-col md:flex-row md:items-end justify-between gap-8 text-[#8A8F9E]"
      >
        <div className="max-w-2xl">
          <p className="text-base sm:text-lg md:text-xl font-light text-[#C4C8D4] leading-relaxed tracking-[-0.015em]">
            Specializing in React.js, Node.js, Express.js, and MongoDB. Architecting low-latency
            Socket.IO event streams, production RESTful APIs, secure auth lifecycles, and
            responsive frontend interfaces.
          </p>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-10 font-mono text-xs tracking-[0.16em]">
          <div className="flex flex-col gap-1">
            <span className="text-[#515561]">CORE STACK</span>
            <span className="text-[#EFEFEF]">MERN / SOCKET.IO / TANSTACK</span>
          </div>

          <a
            href="#work"
            className="group flex items-center gap-3 py-2 px-4 rounded-full border border-white/10 hover:border-[#E2F163]/50 transition-all duration-300"
            data-cursor="DOWN"
          >
            <span className="text-[#EFEFEF] group-hover:text-[#E2F163] transition-colors">
              VIEW PROJECTS
            </span>
            <ArrowDown className="w-3.5 h-3.5 text-[#E2F163] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
