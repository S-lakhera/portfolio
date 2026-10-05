"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function WorkSection() {
  return (
    <section
      id="work"
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full relative"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-white/10">
        <div className="space-y-3">
          <div className="font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase">
            [02] / FEATURED ARCHITECTURE
          </div>
          <h2 className="font-extralight text-4xl sm:text-6xl md:text-7xl tracking-[-0.03em] text-[#EFEFEF]">
            PROJECTS &amp; SYSTEMS
          </h2>
        </div>
        <p className="max-w-md font-light text-sm sm:text-base text-[#8A8F9E] leading-relaxed">
          Production-grade full-stack web applications, real-time event systems, and
          developer tools engineered with modern MERN architecture.
        </p>
      </div>

      {/* Project Rows */}
      <div className="divide-y divide-white/[0.08]">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group py-12 sm:py-16 transition-all duration-300 relative"
            data-cursor="VIEW"
          >
            {/* Ambient Background Hover Tint */}
            <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -mx-4 px-4 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-8">
              {/* Row 1: Header / Title / Metadata / Quick Action */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                  <span className="font-mono text-xs sm:text-sm text-[#515561] group-hover:text-[#E2F163] transition-colors pt-2 sm:pt-0">
                    {project.number}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-extralight text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#EFEFEF] group-hover:translate-x-2 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs font-mono tracking-widest text-[#E2F163] px-2.5 py-0.5 rounded-full border border-[#E2F163]/20 bg-[#E2F163]/[0.05]">
                        {project.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#8A8F9E] mt-2">
                      <span>{project.category}</span>
                      <span>&bull;</span>
                      <span className="text-[#C4C8D4]">{project.role}</span>
                    </div>
                  </div>
                </div>

                {/* Project Links: GitHub & Live */}
                <div className="flex items-center gap-3 self-start lg:self-auto font-mono text-xs">
                  <a
                    href={project.links?.github || "https://github.com/S-lakhera"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.03] text-[#EFEFEF] hover:text-[#E2F163] transition-all"
                    data-cursor="GITHUB"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 text-[#515561] group-hover:text-[#E2F163]" />
                  </a>

                  <a
                    href={project.links?.live || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#E2F163]/40 bg-white/[0.03] text-[#EFEFEF] hover:text-[#E2F163] transition-all"
                    data-cursor="LIVE"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#E2F163]" />
                    <span>LIVE DEMO</span>
                  </a>
                </div>
              </div>

              {/* Row 2: Deep Architecture Highlights & Tech Stack */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2 pl-0 sm:pl-16">
                {/* Bullets: Detailed Accomplishments from Resume */}
                <div className="lg:col-span-8 space-y-3">
                  <p className="text-sm sm:text-base text-[#C4C8D4] font-light leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-2.5">
                    {project.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-3 text-xs sm:text-sm font-light text-[#8A8F9E] leading-relaxed"
                      >
                        <span className="text-[#E2F163] mt-1 text-base leading-none">&bull;</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills & Protocols */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#515561] block mb-2.5">
                      TECH STACK &amp; PROTOCOLS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#D4D8E2] group-hover:border-[#E2F163]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
