"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { gsap } from "@/lib/gsap";

export default function WorkSection() {
  const [activeProject, setActiveProject] = useState(null);
  const previewRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Setup GSAP floating preview image follower
    const preview = previewRef.current;
    if (!preview) return;

    const xTo = gsap.quickTo(preview, "x", { duration: 0.4, ease: "power3.out" });
    const yTo = gsap.quickTo(preview, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full relative"
    >
      {/* Floating Cursor Preview Window (Desktop) */}
      <div
        ref={previewRef}
        className={`pointer-events-none fixed top-0 left-0 -ml-44 -mt-32 w-88 h-60 rounded-xl overflow-hidden shadow-2xl z-50 transition-opacity duration-300 hidden lg:block ${
          activeProject !== null ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        {activeProject !== null && (
          <div className="relative w-full h-full bg-[#111216] border border-white/15">
            <Image
              src={PROJECTS[activeProject].image}
              alt={PROJECTS[activeProject].title}
              fill
              className="object-cover"
              sizes="360px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center text-[10px] font-mono tracking-wider text-white">
              <span>{PROJECTS[activeProject].category}</span>
              <span className="text-[#E2F163]">{PROJECTS[activeProject].year}</span>
            </div>
          </div>
        )}
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
        <div className="space-y-3">
          <div className="font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase">
            [02] / SELECTED ARCHIVES
          </div>
          <h2 className="font-extralight text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] text-[#EFEFEF]">
            FEATURED WORKS
          </h2>
        </div>
        <p className="max-w-md font-light text-sm sm:text-base text-[#8A8F9E] leading-relaxed">
          A curated taxonomy of spatial design, performance engineering, and digital
          art direction created between 2024 and 2026.
        </p>
      </div>

      {/* Project Rows */}
      <div className="divide-y divide-white/[0.07]">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
            className="group py-10 sm:py-14 transition-all duration-300 cursor-pointer relative"
            data-cursor="VIEW"
          >
            {/* Background Hover Accent */}
            <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -mx-4 px-4" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              {/* Index & Title */}
              <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                <span className="font-mono text-xs sm:text-sm text-[#515561] group-hover:text-[#E2F163] transition-colors pt-2 sm:pt-0">
                  {project.number}
                </span>
                <div>
                  <h3 className="font-extralight text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#EFEFEF] group-hover:translate-x-3 transition-transform duration-300 flex items-center gap-4">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 sm:w-8 sm:h-8 text-[#515561] group-hover:text-[#E2F163] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#8A8F9E] font-light max-w-xl group-hover:text-[#C4C8D4] transition-colors">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags, Category & Awards */}
              <div className="flex flex-wrap lg:flex-col lg:items-end gap-3 lg:gap-2 font-mono text-xs text-[#8A8F9E]">
                <div className="flex items-center gap-3">
                  <span className="text-[#EFEFEF]">{project.category}</span>
                  <span className="text-[#515561]">&bull;</span>
                  <span className="text-[#E2F163]">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.awards.map((award) => (
                    <span
                      key={award}
                      className="px-2.5 py-0.5 rounded-full border border-white/10 bg-white/[0.02] text-[10px] text-[#A6ABB9]"
                    >
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Inline Preview for small devices */}
            <div className="mt-6 lg:hidden w-full h-52 sm:h-72 relative rounded-lg overflow-hidden border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 300px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
