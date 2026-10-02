"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePageTransition } from "./PageTransition";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { navigateWithTransition } = usePageTransition();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "PHILOSOPHY", href: "#philosophy" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#090A0C]/80 backdrop-blur-md border-b border-white/5"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Moniker & Status */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group select-none"
            data-cursor="HOME"
          >
            <span className="font-light tracking-[-0.03em] text-base text-[#EFEFEF] group-hover:text-[#E2F163] transition-colors">
              SHASHANK LAKHERA
            </span>
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-mono text-[#8A8F9E] tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163] animate-pulse" />
              <span>AVAILABLE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-xs font-mono tracking-[0.16em] uppercase text-[#8A8F9E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="editorial-link hover:text-[#EFEFEF] transition-colors py-1"
                data-cursor="GO"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Time & Quick Action */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-xs text-[#8A8F9E]">
            <div className="flex items-center gap-2 tracking-widest">
              <span className="text-[#515561]">DELHI</span>
              <span className="text-[#EFEFEF] tabular-nums">{time || "12:00:00"}</span>
              <span className="text-[#515561]">IST</span>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="flex items-center gap-1.5 text-[#EFEFEF] hover:text-[#E2F163] transition-colors border border-white/10 hover:border-[#E2F163]/40 px-3.5 py-1.5 rounded-full text-[11px] tracking-wider"
              data-cursor="CHAT"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#EFEFEF] hover:text-[#E2F163] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-[#090A0C]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs tracking-[0.2em] text-[#515561] uppercase">
            NAVIGATION
          </span>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-3xl font-light text-[#EFEFEF] hover:text-[#E2F163] transition-colors tracking-tight"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 font-mono text-xs text-[#8A8F9E] flex justify-between items-center">
          <div>
            DELHI <span className="text-[#EFEFEF] tabular-nums">{time}</span> IST
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#E2F163]" />
            <span>AVAILABLE</span>
          </div>
        </div>
      </div>
    </>
  );
}
