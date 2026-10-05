"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Mail, Phone, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/lib/resumeData";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const { email, phone, location, socials } = RESUME_DATA;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { label: "GITHUB", href: socials.github },
    { label: "LINKEDIN", href: socials.linkedin },
    { label: "LEETCODE", href: socials.leetcode },
    { label: "EMAIL", href: `mailto:${email}` },
  ];

  return (
    <footer
      id="contact"
      className="pt-24 sm:pt-40 pb-12 sm:pb-16 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      {/* Top Pre-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.25em] text-[#E2F163] mb-8 sm:mb-12">
        <span>[05] / CONNECT &amp; COLLABORATE</span>
        <span className="text-[#8A8F9E] flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#E2F163]" />
          <span>{location}, INDIA &bull; OPEN TO ROLES</span>
        </span>
      </div>

      {/* Massive Lightweight Call to Action */}
      <div className="pb-16 sm:pb-24 border-b border-white/10">
        <h2 className="font-extralight text-4xl sm:text-7xl md:text-[7.2vw] leading-[0.95] tracking-[-0.04em] text-[#EFEFEF] mb-12 sm:mb-16">
          LET&apos;S BUILD SCALABLE <br />
          <span className="text-[#8A8F9E] hover:text-[#E2F163] transition-colors duration-500">
            SYSTEMS TOGETHER
          </span>
        </h2>

        {/* Action Buttons & Quick Contact Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#E2F163] text-[#090A0C] font-mono text-xs tracking-widest font-normal hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-[#E2F163]/20"
            data-cursor="EMAIL"
          >
            <Mail className="w-4 h-4" />
            <span>SEND EMAIL</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 px-6 py-5 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs font-mono tracking-wider text-[#C4C8D4] hover:text-white transition-colors"
            data-cursor="COPY"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#E2F163]" />
                <span className="text-[#E2F163]">COPIED EMAIL</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY: {email}</span>
              </>
            )}
          </button>

          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-5 rounded-full border border-white/10 hover:border-white/25 bg-white/[0.02] text-xs font-mono tracking-wider text-[#C4C8D4] hover:text-white transition-colors"
            data-cursor="CALL"
          >
            <Phone className="w-4 h-4 text-[#E2F163]" />
            <span>{phone}</span>
          </a>
        </div>
      </div>

      {/* Footer Bottom Metadata & Socials */}
      <div className="pt-10 sm:pt-14 flex flex-col md:flex-row md:items-center justify-between gap-8 font-mono text-xs text-[#8A8F9E]">
        <div className="flex flex-wrap gap-8 tracking-widest">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link hover:text-[#EFEFEF] transition-colors"
              data-cursor="EXT"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-[#515561] tracking-wider text-[11px]">
          <span>&copy; {new Date().getFullYear()} SHASHANK LAKHERA</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>FULL-STACK DEVELOPER &bull; MERN SPECIALIST</span>
        </div>
      </div>
    </footer>
  );
}
