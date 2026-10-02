"use client";

import { Award } from "lucide-react";

export default function About() {
  const experiences = [
    {
      period: "2025 — PRESENT",
      role: "Lead Creative Technologist",
      company: "Independent Practice",
      location: "Global / Remote",
      note: "Designing spatial experiences and design engines for venture-backed founders and creative studios.",
    },
    {
      period: "2023 — 2025",
      role: "Senior Interaction Designer",
      company: "Studio Kinesis",
      location: "New Delhi & Tokyo",
      note: "Led kinetic interface architecture and micro-interaction systems for automotive and luxury clients.",
    },
    {
      period: "2021 — 2023",
      role: "Frontend Engineer",
      company: "Monolith Systems",
      location: "Bengaluru",
      note: "Engineered scalable design systems and high-throughput web applications with sub-100ms render budgets.",
    },
  ];

  const recognitions = [
    { title: "Awwwards Site of the Day", project: "Aura Intelligence", year: "2026" },
    { title: "FWA of the Month", project: "Lumen Architecture", year: "2025" },
    { title: "Awwwards Developer Award", project: "Aura Intelligence", year: "2026" },
    { title: "CSS Design Awards — SOTD", project: "Kinesis Dynamics", year: "2025" },
  ];

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Bio / Trajectory */}
        <div className="lg:col-span-5 space-y-6">
          <div className="font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase">
            [04] / TRAJECTORY
          </div>
          <h2 className="font-extralight text-4xl sm:text-5xl tracking-tight text-[#EFEFEF]">
            ENGINEERING ARTISTRY
          </h2>
          <p className="font-light text-base text-[#8A8F9E] leading-relaxed">
            Operating at the convergence of architectural design and creative engineering.
            I transform complex systemic challenges into serene, memorable digital
            moments that resonate across screens.
          </p>

          <div className="pt-6">
            <div className="flex items-center gap-3 font-mono text-xs text-[#EFEFEF] pb-4 border-b border-white/10">
              <Award className="w-4 h-4 text-[#E2F163]" />
              <span className="tracking-widest uppercase">SELECT RECOGNITION</span>
            </div>
            <div className="divide-y divide-white/[0.06]">
              {recognitions.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 flex items-center justify-between text-xs font-mono"
                >
                  <span className="text-[#C4C8D4]">{item.title}</span>
                  <span className="text-[#515561]">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div className="lg:col-span-7 space-y-8">
          <div className="divide-y divide-white/10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="py-8 first:pt-0 last:pb-0 group"
                data-cursor="READ"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <span className="font-mono text-xs tracking-wider text-[#E2F163]">
                    {exp.period}
                  </span>
                  <span className="font-mono text-xs text-[#515561]">
                    {exp.location}
                  </span>
                </div>
                <h3 className="font-light text-2xl sm:text-3xl text-[#EFEFEF] group-hover:text-[#E2F163] transition-colors">
                  {exp.role}{" "}
                  <span className="text-[#8A8F9E] font-extralight">@ {exp.company}</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base font-light text-[#8A8F9E] max-w-xl">
                  {exp.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
