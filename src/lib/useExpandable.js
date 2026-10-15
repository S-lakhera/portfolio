"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Reusable animation variants for morphing expanding overlays.
 * Origin point: top-right corner.
 * Spring physics: stiffness 280, damping 28.
 */
export const menuVariants = {
  closed: {
    opacity: 0,
    scale: 0.15,
    transformOrigin: "top right",
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1],
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    scale: 1,
    transformOrigin: "top right",
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 28,
      mass: 0.85,
      when: "beforeChildren",
    },
  },
};

export const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const contentVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  open: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.04,
    },
  },
};

export const itemVariants = {
  closed: {
    opacity: 0,
    y: 12,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Hook to manage expandable/morphing overlay state, outside-click detection,
 * ESC key handling, background scroll-locking, and accessible focus trapping.
 */
export function useExpandable({ initialOpen = false, onToggle } = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const triggerRef = useRef(null);
  const drawerRef = useRef(null);
  const previousFocusedElement = useRef(null);

  const open = useCallback(() => {
    setIsOpen(true);
    if (onToggle) onToggle(true);
  }, [onToggle]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (onToggle) onToggle(false);
  }, [onToggle]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (onToggle) onToggle(next);
      return next;
    });
  }, [onToggle]);

  // Lock body scroll and prevent touch-move background scroll when open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleTouchMove = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  // Handle outside click & Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (e) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen, close]);

  // Focus trap management
  useEffect(() => {
    if (isOpen) {
      previousFocusedElement.current = document.activeElement;

      // Small delay to allow elements to mount in DOM
      const timer = setTimeout(() => {
        if (!drawerRef.current) return;
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length > 0) {
          focusable[0].focus();
        }
      }, 50);

      const handleTabKey = (e) => {
        if (e.key !== "Tab" || !drawerRef.current) return;

        const focusable = Array.from(
          drawerRef.current.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
        );

        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleTabKey);
        if (previousFocusedElement.current && typeof previousFocusedElement.current.focus === "function") {
          previousFocusedElement.current.focus();
        }
      };
    }
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle,
    triggerRef,
    drawerRef,
  };
}
