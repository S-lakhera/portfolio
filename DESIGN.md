# DESIGN SYSTEM & ARCHITECTURE SPECIFICATION
**Project:** Shashank Lakhera — Awwwards-Grade Designer Portfolio  
**Status:** Living Design Document & Engineering Specification  
**Version:** 1.0.0  

---

## 1. Design Mood & Aesthetic Direction

### 1.1 Aesthetic Philosophy: "Quiet Digital Luxury"
The design departs completely from generic, cluttered, or heavy web layouts. It embodies an **architectural, neo-minimalist, high-fashion editorial aesthetic** inspired by leading studios (such as Studio Freight, Rezo Zero, Locomotive, and B-Reel):
- **Generous Whitespace / Negative Space:** Elements breathe. Sections use extensive vertical margins (`clamp(6rem, 12vw, 14rem)`) to evoke gallery-like gravitas.
- **Ultra-Lightweight Elegance:** High contrast achieved through scale and space rather than font weight. Zero heavy, clunky bold typography.
- **Dynamic Vitality:** The interface feels alive through high-fidelity micro-interactions (magnetic physics, trailing lerp cursor, smooth scroll momentum, and character-level reveals).

### 1.2 Color Palette
A refined monochromatic foundation with delicate mineral undertones and surgical luminescence:

| Role | Color Name | Hex / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | Obsidian Black | `#090A0C` | Primary site background |
| **Surface Raised** | Deep Basalt | `#111216` | Card backgrounds, drawer panels, popovers |
| **Surface Subtle** | Smoked Zinc | `#171920` | Hover states, interactive item backgrounds |
| **Border / Hairline** | Glass Stroke | `rgba(255, 255, 255, 0.07)` | Hairline dividers, card outlines, grid rules |
| **Text Primary** | Soft Snow | `#EFEFEF` | Primary headings, titles (94% lightness) |
| **Text Secondary** | Muted Silver | `#8A8F9E` | Body copy, descriptions, subtitles |
| **Text Tertiary** | Mineral Dust | `#515561` | Timestamps, index numbers, metadata |
| **Accent Glow** | Electric Ice | `#E2F163` / `#D4FF00` | Micro-pill badges, active status indicator, cursor accents |

---

## 2. Typography System

### 2.1 Typeface: Google Fonts `Inter`
We utilize **Inter** with strictly controlled weights to guarantee a sleek, airy, hyper-modern aesthetic:
- **Weights Used:** `200` (Extra Light), `300` (Light), `400` (Regular)
- **Forbidden:** Weight `600`+ (Semi-bold, Bold, Black) are disallowed to preserve lightness and avoid dated, chunky silhouettes.

### 2.2 Typographic Hierarchy & Scale
| Level | Font Size | Weight | Tracking (Letter Spacing) | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 01** | `clamp(3.5rem, 9vw, 9.5rem)` | 200 (Extra Light) | `-0.04em` (Tight) | `0.95` | Hero Statement, Massive Section Intros |
| **Display 02** | `clamp(2.5rem, 6vw, 5.5rem)` | 300 (Light) | `-0.03em` | `1.05` | Project Titles, Major Headline Hooks |
| **Heading 01** | `clamp(1.75rem, 3.5vw, 3rem)`| 300 (Light) | `-0.02em` | `1.2` | Sub-sections, Case Study Headers |
| **Editorial Lead**| `clamp(1.125rem, 2vw, 1.5rem)`| 300 (Light) | `-0.01em` | `1.6` | Intro paragraphs, philosophy statements |
| **Body Regular** | `1rem (16px)` | 300 / 400 | `0` | `1.7` | General descriptions, project notes |
| **Mono / Meta** | `0.75rem (12px)` | 400 | `+0.2em` (Wide Uppercase) | `1.4` | Tickers, categories, coordinates, status |

---

## 3. Preloader & Initial Loading Sequence

### 3.1 Preloader Mechanics & UX
Every visitor opening the portfolio experiences a cinematic entry animation designed to build anticipation and mask asset loading:
1. **Fullscreen Curtain (`z-[9999]`):** Deep mineral black canvas `#090A0C` with a fine noise grain.
2. **Dynamic 000% → 100% Counter:**
   - Giant light numeral (`clamp(4rem, 12vw, 11rem)`, weight 200).
   - Linear or accelerating GSAP `onUpdate` interpolation over 1.8–2.2 seconds.
   - Accompanying architectural status line: `"INITIALIZING SHASHANK LAKHERA // 2026 // PORTFOLIO"`.
   - Subtle hairline progress bar at the bottom edge.
3. **Smooth Exit Transition:**
   - Counter and metadata slide up with quick opacity decay (`power3.in`).
   - The preloader curtain smoothly slides upwards using `expo.inOut` / `cubic-bezier(0.85, 0, 0.15, 1)`.
   - Simultaneous reveal of the underlying Hero page: subtly scales down from `1.04` to `1.0` and rises `y: 40px -> 0px` with staggered hero typography unmasking.

---

## 4. Page Transitions & Route Switching

### 4.1 Transition Architecture
- **Curtain Wipe Transition:** On route change, a seamless transition overlay sweeps across the screen (or dual-panel split curtain) before mounting the new view.
- **Zero Flash:** Prevents unstyled content or sudden jumps.
- **Scroll Memory Reset:** Window automatically scrolls to top with smooth Lenis reset on page mount.
- **Shared Layout Shell:** Global navbar and footer remain persistent or smoothly transition without flickering.

---

## 5. Micro-Interactions & Motion System

### 5.1 Physics & Easing Library
- Standard Smooth Ease: `power3.out` / `expo.out`
- Transition Curve: `cubic-bezier(0.76, 0, 0.24, 1)`
- Smooth Scroll: `@studio-freight/lenis` or `lenis` for 60fps momentum scroll.

### 5.2 Catalogue of Micro-Interactions
1. **Fluid Magnetic Cursor:**
   - Lerped dot + trailing magnetic ring (`mix-blend-mode: difference` or frosted glass).
   - Expands and displays contextual labels (`"EXPLORE"`, `"VIEW"`, `"DRAG"`, `"EXTERNAL"`) when hovering interactive elements.
2. **Magnetic Buttons:**
   - Nav items and CTAs exert a gravitational pull toward the cursor (`quickTo` GSAP physics with bounds limitation).
3. **Masked Text Character & Word Unmasking:**
   - Headlines reveal upward from hidden overflow masks (`yPercent: 120 -> 0`, staggered `0.02s` per word/character).
4. **Interactive Hover Preview Gallery:**
   - Project list items display floating image preview cards that track cursor movement with silky lag.
5. **Hairline Border Illuminations:**
   - Cards and containers react to mouse position with radial specular highlights along border edges.

---

## 6. Project Architecture & Directory Structure

```
src/
├── app/
│   ├── layout.jsx            # Root layout: Inter font, GSAP provider, Lenis scroll, Cursor
│   ├── page.jsx              # Home page: Hero, Selected Work, Philosophy, Experience, Contact
│   ├── globals.css           # Design tokens, typography clamp variables, custom utilities
│   ├── work/                 # [Optional dedicated detail routes]
│   └── about/                # [Optional dedicated about route]
├── components/
│   ├── Preloader.jsx         # 1-100% GSAP loading screen with smooth curtain unmask
│   ├── PageTransition.jsx    # Smooth route transition wrapper
│   ├── CustomCursor.jsx      # Magnetic interactive cursor with contextual states
│   ├── SmoothScroll.jsx      # Lenis inertia scroll provider
│   ├── Navbar.jsx            # Minimal floating glass navigation with live time & status
│   ├── Hero.jsx              # Large-type hero section with animated reveal
│   ├── WorkSection.jsx       # Interactive editorial project gallery with cursor preview
│   ├── Philosophy.jsx        # Editorial typography statement & capabilities grid
│   ├── Experience.jsx        # Clean architectural timeline
│   └── Footer.jsx            # Big light typographic contact CTA
├── lib/
│   ├── gsap.js               # Centralized GSAP & ScrollTrigger setup
│   └── projects.js           # Curated portfolio work showcase data
```

---

## 7. Next Implementation Milestones
- [x] **Milestone 1:** Establish Design Mood & Specification (`DESIGN.md`).
- [ ] **Milestone 2:** Setup Google `Inter` font in `layout.jsx` & configure design tokens in `globals.css`.
- [ ] **Milestone 3:** Implement GSAP preloader with 1-100% counter and curtain slide-up reveal.
- [ ] **Milestone 4:** Implement Lenis smooth scroll and custom magnetic interactive cursor.
- [ ] **Milestone 5:** Build out editorial Hero section and interactive Work Showcase with cursor image hover follow.
- [ ] **Milestone 6:** Integrate page transition framework.
