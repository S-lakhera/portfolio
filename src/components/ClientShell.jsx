"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransitionProvider from "@/components/PageTransition";

export default function ClientShell({ children }) {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <SmoothScroll>
      <PageTransitionProvider>
        <CustomCursor />
        {!loadingComplete && (
          <Preloader onComplete={() => setLoadingComplete(true)} />
        )}
        <div
          id="main-content"
          className={`min-h-screen flex flex-col transition-all duration-1000 ease-out ${
            loadingComplete
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-[0.99]"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </div>
      </PageTransitionProvider>
    </SmoothScroll>
  );
}
