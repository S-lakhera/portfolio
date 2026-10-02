"use client";

import { createContext, useContext, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "@/lib/gsap";

const TransitionContext = createContext({
  navigateWithTransition: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export default function PageTransitionProvider({ children }) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);

  const navigateWithTransition = (href) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const tl = gsap.timeline();

    // Split curtain closing animation
    tl.to(curtainTopRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: "power3.inOut",
    });
    tl.to(
      curtainBottomRef.current,
      {
        scaleY: 1,
        duration: 0.5,
        ease: "power3.inOut",
      },
      "<"
    );

    // Push route
    tl.add(() => {
      router.push(href);
      window.scrollTo(0, 0);
    });

    // Pause briefly for page render
    tl.to({}, { duration: 0.2 });

    // Split curtain reveal open
    tl.to(curtainTopRef.current, {
      scaleY: 0,
      duration: 0.6,
      ease: "power4.inOut",
      transformOrigin: "top",
    });
    tl.to(
      curtainBottomRef.current,
      {
        scaleY: 0,
        duration: 0.6,
        ease: "power4.inOut",
        transformOrigin: "bottom",
        onComplete: () => {
          // Reset transform origins for next transition
          gsap.set(curtainTopRef.current, { transformOrigin: "bottom" });
          gsap.set(curtainBottomRef.current, { transformOrigin: "top" });
          setIsTransitioning(false);
        },
      },
      "<"
    );
  };

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {/* Dual Architectural Wipe Curtain */}
      <div
        ref={curtainTopRef}
        className="pointer-events-none fixed top-0 left-0 right-0 h-1/2 bg-[#090A0C] z-[9990] origin-bottom scale-y-0 border-b border-white/10"
        style={{ willChange: "transform" }}
      />
      <div
        ref={curtainBottomRef}
        className="pointer-events-none fixed bottom-0 left-0 right-0 h-1/2 bg-[#090A0C] z-[9990] origin-top scale-y-0 border-t border-white/10"
        style={{ willChange: "transform" }}
      />

      {children}
    </TransitionContext.Provider>
  );
}
