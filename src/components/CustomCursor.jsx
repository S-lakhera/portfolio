"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const labelRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Fast GSAP quickTo setters for high-performance 60fps tracking
    const xDot = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yDot = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const xFollower = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3" });
    const yFollower = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3" });

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      xDot(e.clientX);
      yDot(e.clientY);
      xFollower(e.clientX);
      yFollower(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor], a, button, input, [role='button']");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor");
        if (text) {
          setCursorText(text);
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9998] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Precision Core Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#E2F163] transition-transform duration-200 ${
          isHovered ? "scale-0" : "scale-100"
        }`}
        style={{ willChange: "transform" }}
      />

      {/* Trailing Ambient Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorText
            ? "w-24 h-24 -ml-12 -mt-12 bg-[#E2F163] text-[#090A0C] border-none shadow-2xl"
            : isHovered
            ? "w-14 h-14 -ml-7 -mt-7 bg-white/10 border border-white/40 backdrop-blur-xs scale-110"
            : "w-10 h-10 border border-white/25 bg-transparent"
        }`}
        style={{ willChange: "transform, width, height" }}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase text-center select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
