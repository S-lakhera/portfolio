"use client";

import { Layers, Cpu, Eye } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      num: "01",
      icon: Layers,
      title: "Spatial UI Systems",
      desc: "Architecting modular design tokens, geometric layouts, and fluid viewport scaling that seamlessly translate across desktop and handheld canvases.",
      stack: ["Design Tokens", "Figma Components", "Fluid Grids"],
    },
    {
      num: "02",
      icon: Cpu,
      title: "Kinetic Engineering",
      desc: "Transforming static layouts into living environments through GSAP choreography, 60fps momentum scrolling, and sub-pixel micro-physics.",
      stack: ["GSAP / Motion", "Lenis Smooth Scroll", "React / Next.js"],
    },
    {
      num: "03",
      icon: Eye,
      title: "Editorial Restraint",
      desc: "Resisting decorative noise. Choosing whisper-thin typography, thoughtful negative space, and curated monochromatic contrast that commands attention.",
      stack: ["Inter Typography", "Minimal Palette", "Content Hierarchy"],
    },
  ];

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      {/* Manifest Statement */}
      <div className="pb-20 sm:pb-28">
        <div className="font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase mb-6">
          [03] / CORE PHILOSOPHY
        </div>
        <p className="font-extralight text-3xl sm:text-5xl md:text-[4.2vw] leading-[1.1] tracking-[-0.03em] text-[#EFEFEF] max-w-5xl">
          We believe digital architecture must speak through{" "}
          <span className="text-[#8A8F9E] hover:text-[#E2F163] transition-colors duration-300">
            sculptural restraint
          </span>
          , kinetic clarity, and uncompromising precision.
        </p>
      </div>

      {/* 3 Pillars Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.num}
              className="p-8 sm:p-10 rounded-2xl bg-[#111216]/60 border border-white/[0.07] hover:border-white/20 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1.5"
              data-cursor="EXP"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#515561] mb-8">
                  <span>{pillar.num}</span>
                  <Icon className="w-5 h-5 text-[#8A8F9E] group-hover:text-[#E2F163] transition-colors" />
                </div>
                <h3 className="font-light text-2xl sm:text-3xl text-[#EFEFEF] mb-4 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-light text-sm sm:text-base text-[#8A8F9E] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                {pillar.stack.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-white/[0.03] text-[#A6ABB9]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
