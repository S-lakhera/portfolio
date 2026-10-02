"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hello@shashanklakhera.design";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { label: "GITHUB", href: "https://github.com/S-lakhera" },
    { label: "TWITTER / X", href: "https://x.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "READ.CV", href: "https://read.cv" },
  ];

  return (
    <footer
      id="contact"
      className="pt-24 sm:pt-40 pb-12 sm:pb-16 px-6 sm:px-10 max-w-7xl mx-auto w-full select-none"
    >
      {/* Top Pre-header */}
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.25em] text-[#E2F163] mb-8 sm:mb-12">
        <span>[05] / CONNECT</span>
        <span className="text-[#8A8F9E]">ACCEPTING SELECT COMMISSIONS</span>
      </div>

      {/* Massive Lightweight Call to Action */}
      <div className="pb-16 sm:pb-24 border-b border-white/10">
        <h2 className="font-extralight text-4xl sm:text-7xl md:text-[7.4vw] leading-[0.95] tracking-[-0.04em] text-[#EFEFEF] mb-12 sm:mb-16">
          HAVE AN AMBITIOUS <br />
          <span className="text-[#8A8F9E] hover:text-[#E2F163] transition-colors duration-500">
            VISION IN MIND?
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#E2F163] text-[#090A0C] font-mono text-xs tracking-widest font-normal hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-[#E2F163]/20"
            data-cursor="EMAIL"
          >
            <span>START A CONVERSATION</span>
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
                <span className="text-[#E2F163]">COPIED TO CLIPBOARD</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>COPY: {email}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Footer Bottom Metadata & Socials */}
      <div className="pt-10 sm:pt-14 flex flex-col md:flex-row md:items-center justify-between gap-8 font-mono text-xs text-[#8A8F9E]">
        <div className="flex flex-wrap gap-8 tracking-widest">
          {socials.map((social) => (
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
          <span>CRAFTED WITH GSAP &amp; NEXT.JS</span>
        </div>
      </div>
    </footer>
  );
}
