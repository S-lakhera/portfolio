"use client";

import { Code2, Server, Database, Terminal, Cpu, ShieldCheck, Layers, GitBranch } from "lucide-react";
import { RESUME_DATA } from "@/lib/resumeData";

export default function Philosophy() {
  const skillCategories = [
    {
      num: "01",
      title: "Languages",
      icon: Code2,
      skills: RESUME_DATA.technicalSkills.languages,
    },
    {
      num: "02",
      title: "Frontend Engineering",
      icon: Layers,
      skills: RESUME_DATA.technicalSkills.frontend,
    },
    {
      num: "03",
      title: "Backend & Systems",
      icon: Server,
      skills: RESUME_DATA.technicalSkills.backend,
    },
    {
      num: "04",
      title: "Databases & Caching",
      icon: Database,
      skills: RESUME_DATA.technicalSkills.databases,
    },
    {
      num: "05",
      title: "DevOps & Tooling",
      icon: Terminal,
      skills: RESUME_DATA.technicalSkills.devOpsAndTools,
    },
    {
      num: "06",
      title: "Core Computer Science",
      icon: Cpu,
      skills: RESUME_DATA.technicalSkills.coreConcepts,
    },
  ];

  const engineeringPillars = [
    {
      title: "MERN & Scalable Architecture",
      desc: "Engineering decoupled, maintainable systems using feature-based modular folder structures, MVC backend patterns, and database indexing for optimal query execution.",
    },
    {
      title: "Low-Latency Real-Time Streams",
      desc: "Harnessing Socket.IO event-driven WebSockets for instantaneous real-time sync across live cricket scoreboards, multi-user chat, typing indicators, and presence states.",
    },
    {
      title: "Production Authentication & Security",
      desc: "Implementing multi-tier JWT access/refresh token lifecycles with HTTP-only cookies, OAuth providers (GitHub), role-protected routes, and payment gateways (Razorpay).",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      {/* Manifest Statement */}
      <div className="pb-16 sm:pb-24">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase mb-6">
          <span>[03] / TECHNICAL SKILLS &amp; ARCHITECTURE</span>
        </div>
        <h2 className="font-extralight text-3xl sm:text-5xl md:text-[4vw] leading-[1.08] tracking-[-0.03em] text-[#EFEFEF] max-w-5xl">
          Building high-throughput web applications backed by{" "}
          <span className="text-[#8A8F9E] hover:text-[#E2F163] transition-colors duration-300">
            robust full-stack engineering
          </span>
          , clean architecture, and modern engineering practices.
        </h2>
      </div>

      {/* 6 Category Technical Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.num}
              className="p-7 sm:p-8 rounded-2xl bg-[#111216]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-400 flex flex-col justify-between group hover:-translate-y-1"
              data-cursor="STACK"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#515561] mb-6">
                  <span>{cat.num}</span>
                  <Icon className="w-5 h-5 text-[#8A8F9E] group-hover:text-[#E2F163] transition-colors" />
                </div>
                <h3 className="font-light text-xl sm:text-2xl text-[#EFEFEF] mb-6 tracking-tight">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono tracking-wide px-3 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[#C4C8D4] group-hover:border-[#E2F163]/25 group-hover:text-[#EFEFEF] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Engineering Pillars */}
      <div className="pt-10 border-t border-white/[0.08]">
        <div className="font-mono text-xs tracking-widest uppercase text-[#515561] mb-8">
          ARCHITECTURAL FOUNDATIONS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {engineeringPillars.map((pillar, i) => (
            <div key={i} className="space-y-3">
              <span className="font-mono text-xs text-[#E2F163]">
                0{i + 1} //
              </span>
              <h4 className="text-lg font-light text-[#EFEFEF] tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-sm font-light text-[#8A8F9E] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
