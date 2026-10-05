"use client";

import { Briefcase, GraduationCap, MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/lib/resumeData";

export default function About() {
  const { experience, education, summary, location, email, phone } = RESUME_DATA;

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Bio / Trajectory / Education */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="font-mono text-xs tracking-[0.25em] text-[#E2F163] uppercase mb-4">
              [04] / PROFILE &amp; TRAJECTORY
            </div>
            <h2 className="font-extralight text-4xl sm:text-5xl tracking-tight text-[#EFEFEF] mb-6">
              MERN STACK &amp; ENGINEERING
            </h2>
            <p className="font-light text-base text-[#8A8F9E] leading-relaxed">
              {summary}
            </p>
          </div>

          {/* Quick Contact & Location Meta */}
          <div className="p-6 rounded-2xl bg-[#111216]/60 border border-white/[0.08] space-y-3 font-mono text-xs text-[#8A8F9E]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-[#E2F163]" />
              <span className="text-[#EFEFEF]">{location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#E2F163]" />
              <a
                href={`mailto:${email}`}
                className="text-[#EFEFEF] hover:text-[#E2F163] transition-colors"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#E2F163]" />
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-[#EFEFEF] hover:text-[#E2F163] transition-colors"
              >
                {phone}
              </a>
            </div>
          </div>

          {/* Education Card */}
          <div className="pt-2">
            <div className="flex items-center gap-2.5 font-mono text-xs text-[#EFEFEF] pb-4 border-b border-white/10 uppercase tracking-widest">
              <GraduationCap className="w-4 h-4 text-[#E2F163]" />
              <span>EDUCATION</span>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-mono text-xs text-[#E2F163]">{education.period}</span>
                <span className="font-mono text-xs text-[#A6ABB9] bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.08]">
                  CGPA: {education.cgpa}
                </span>
              </div>
              <h3 className="text-lg font-light text-[#EFEFEF]">
                {education.degree}
              </h3>
              <p className="text-sm font-light text-[#8A8F9E]">
                {education.institution}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Experience Timeline */}
        <div id="experience" className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2.5 font-mono text-xs text-[#EFEFEF] pb-4 border-b border-white/10 uppercase tracking-widest">
            <Briefcase className="w-4 h-4 text-[#E2F163]" />
            <span>WORK EXPERIENCE</span>
          </div>

          <div className="divide-y divide-white/10">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="py-6 first:pt-0 last:pb-0 group"
                data-cursor="EXP"
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

                <p className="mt-3 text-sm sm:text-base font-light text-[#C4C8D4] max-w-xl">
                  {exp.note}
                </p>

                {/* Experience Bullets */}
                <div className="mt-5 space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
