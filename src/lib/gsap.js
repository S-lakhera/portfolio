"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({
    autoSleep: 60,
    force3D: true,
  });
}

export { gsap, ScrollTrigger };
export default gsap;
