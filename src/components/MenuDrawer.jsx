"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import {
  menuVariants,
  backdropVariants,
  contentVariants,
  itemVariants,
} from "@/lib/useExpandable";

export default function MenuDrawer({
  isOpen,
  onClose,
  drawerRef,
  navLinks,
  onLinkClick,
  scrolled,
}) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("work");

  // Client-side hydration flag for React Portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Live IST Clock
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
    return () => clearInterval(interval);
  }, []);

  // Track active section in viewport
  useEffect(() => {
    if (!isOpen) return;

    const sectionIds = ["work", "skills", "experience", "about", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
  }, [isOpen]);

  const handleLinkSelect = (e, href) => {
    onLinkClick(e, href);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] pointer-events-none">
          {/* Full-viewport Blur Backdrop */}
          <motion.div
            key="menu-backdrop"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto cursor-pointer"
            aria-hidden="true"
          />

          {/* Layout Container flush with Header container */}
          <div className="max-w-7xl mx-auto px-6 sm:px-10 h-full pointer-events-none relative">
            <div
              className={`flex justify-end transition-all duration-500 ${
                scrolled ? "pt-4" : "pt-7"
              }`}
            >
              {/* Morphing Expanding Drawer Container */}
              <motion.div
                key="menu-drawer-box"
                ref={drawerRef}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                role="dialog"
                aria-modal="true"
                aria-label="Site navigation menu"
                className="pointer-events-auto relative z-10 w-[calc(100vw-3rem)] max-w-[90vw] sm:w-[380px] md:w-[35vw] md:min-w-[340px] md:max-w-[480px] h-auto min-h-[420px] max-h-[85vh] bg-[#0c0d12]/95 border border-neutral-800/90 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-2xl flex flex-col justify-between p-6 overflow-y-auto selection:bg-[#E2F163] selection:text-[#090A0C]"
                style={{ transformOrigin: "top right" }}
              >
                {/* Animated Content Wrapper */}
                <motion.div
                  variants={contentVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col justify-between h-full gap-4 w-full"
                >
                  {/* Header Row: Navigation Label & Close Toggle */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between pb-3 border-b border-neutral-800/80"
                  >
                    <div className="flex items-center gap-2 select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163] animate-pulse" />
                      <span className="font-mono text-[10px] tracking-[0.2em] text-[#8A8F9E] uppercase">
                        NAVIGATION
                      </span>
                    </div>

                    <button
                      id="nav-menu-close"
                      onClick={onClose}
                      aria-label="Close navigation menu"
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-700/80 bg-neutral-900/90 hover:bg-neutral-800 hover:border-neutral-600 text-[11px] font-mono tracking-wider uppercase text-[#EFEFEF] hover:text-[#E2F163] transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E2F163]/50"
                      data-cursor="CLOSE"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163]" />
                      <span>CLOSE</span>
                      <X className="w-3.5 h-3.5 text-[#8A8F9E]" />
                    </button>
                  </motion.div>

                  {/* Center Navigation List */}
                  <nav
                    className="flex flex-col gap-1.5 my-auto py-1"
                    aria-label="Primary navigation"
                  >
                    {navLinks.map((link, idx) => {
                      const sectionId = link.href.replace("#", "");
                      const isActive = activeSection === sectionId;

                      return (
                        <motion.div key={link.label} variants={itemVariants}>
                          <a
                            href={link.href}
                            onClick={(e) => handleLinkSelect(e, link.href)}
                            className={`group flex items-center justify-between py-2 px-3 rounded-xl transition-all duration-300 ${
                              isActive
                                ? "bg-white/[0.06] text-[#EFEFEF]"
                                : "hover:bg-white/[0.04] text-[#8A8F9E] hover:text-[#EFEFEF]"
                            }`}
                            data-cursor="GO"
                          >
                            <div className="flex items-center gap-3.5">
                              <span
                                className={`font-mono text-[10px] tracking-widest tabular-nums transition-colors ${
                                  isActive
                                    ? "text-[#E2F163]"
                                    : "text-[#515561] group-hover:text-[#E2F163]"
                                }`}
                              >
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={`text-base sm:text-lg font-light tracking-tight transition-transform duration-300 ${
                                  isActive
                                    ? "text-[#EFEFEF] translate-x-1 font-normal"
                                    : "group-hover:translate-x-1"
                                }`}
                              >
                                {link.label}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              {isActive && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163]" />
                              )}
                              <ArrowUpRight
                                className={`w-3.5 h-3.5 transition-all transform ${
                                  isActive
                                    ? "text-[#E2F163] opacity-100"
                                    : "text-[#515561] opacity-0 group-hover:opacity-100 group-hover:text-[#E2F163] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                }`}
                              />
                            </div>
                          </a>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Footer / Action Row */}
                  <motion.div
                    variants={itemVariants}
                    className="pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-xs"
                  >
                    {/* Secondary Metadata */}
                    <div className="flex items-center gap-3 text-[11px] text-[#8A8F9E]">
                      <div className="flex items-center gap-1.5 tracking-wider">
                        <span className="text-[#515561]">BHOPAL</span>
                        <span className="text-[#EFEFEF] tabular-nums">
                          {time || "12:00:00"}
                        </span>
                        <span className="text-[#515561]">IST</span>
                      </div>
                      <span className="text-neutral-700 hidden sm:inline">•</span>
                      <div className="flex items-center gap-1.5 text-[10px] tracking-wider text-[#8A8F9E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163] animate-pulse" />
                        <span>AVAILABLE</span>
                      </div>
                    </div>

                    {/* Primary Action Button */}
                    <a
                      href="#contact"
                      onClick={(e) => handleLinkSelect(e, "#contact")}
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#E2F163] text-[#090A0C] hover:bg-white font-mono text-[11px] tracking-wider uppercase font-medium transition-all shadow-[0_0_20px_rgba(226,241,99,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] group cursor-pointer"
                      data-cursor="CHAT"
                    >
                      <span>CONNECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
