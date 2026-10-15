"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useExpandable } from "@/lib/useExpandable";
import MenuDrawer from "@/components/MenuDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, close, toggle, triggerRef, drawerRef } = useExpandable();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "PROJECTS", href: "#work" },
    { label: "SKILLS", href: "#skills" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      close();

      // Ensure body scroll is unlocked immediately before scrolling
      document.body.style.overflow = "";

      const targetId = href.substring(1);
      const el = document.getElementById(targetId) || document.querySelector(href);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth" });
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-[#090A0C]/85 backdrop-blur-md border-b border-white/5"
          : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Moniker & Status (Left) */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group select-none relative z-10"
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

        {/* Morph-Menu Trigger & Drawer Container (Right) */}
        <div className="relative">
          <button
            id="nav-menu-trigger"
            ref={triggerRef}
            onClick={toggle}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative z-10 flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800/80 hover:border-neutral-700 text-xs tracking-wider uppercase text-[#EFEFEF] hover:text-[#E2F163] transition-all group cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#E2F163]/50"
            data-cursor={isOpen ? "CLOSE" : "MENU"}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2F163] transition-transform group-hover:scale-125" />
            <span className="font-mono text-[11px] tracking-[0.14em]">
              {isOpen ? "CLOSE" : "MENU"}
            </span>
            <span className="text-[#8A8F9E] group-hover:text-[#E2F163] transition-colors">
              {isOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </span>
          </button>

          {/* Expanding Morph-Menu Drawer */}
          <MenuDrawer
            isOpen={isOpen}
            onClose={close}
            drawerRef={drawerRef}
            navLinks={navLinks}
            onLinkClick={handleLinkClick}
            scrolled={scrolled}
          />
        </div>
      </div>
    </header>
  );
}
