# DESIGN SYSTEM & ARCHITECTURE SPECIFICATION
**Project:** Shashank Lakhera — High-Performance Full-Stack & MERN Developer Portfolio  
**Status:** Living Design Document & Engineering Specification  
**Version:** 2.0.0  

---

## 1. Design Mood & Aesthetic Direction

### 1.1 Aesthetic Philosophy: "Quiet Digital Luxury & Engineering Precision"
The portfolio departs completely from generic, cluttered developer portfolios. It embodies an **architectural, neo-minimalist, high-performance editorial aesthetic** inspired by award-winning digital studios (such as Studio Freight, Locomotive, and B-Reel):
- **Generous Whitespace / Negative Space:** Elements breathe. Sections use extensive vertical margins to evoke gallery-like gravitas.
- **Ultra-Lightweight Elegance:** High contrast achieved through scale and space rather than heavy bold fonts. Inter typography with weights strictly controlled at 200, 300, and 400.
- **Dynamic Vitality:** The interface feels alive through high-fidelity micro-interactions (magnetic physics, trailing lerp cursor, smooth scroll momentum, character-level unmasking, and floating image follow).

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
- **Forbidden:** Heavy weights (600+) are disallowed project-wide to preserve lightness and avoid dated, chunky silhouettes.

### 2.2 Typographic Hierarchy & Scale
| Level | Font Size | Weight | Tracking (Letter Spacing) | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display 01** | `clamp(3.5rem, 9vw, 9.5rem)` | 200 (Extra Light) | `-0.04em` (Tight) | `0.93` | Hero Statement, Massive Section Intros |
| **Display 02** | `clamp(2.5rem, 6vw, 5.5rem)` | 300 (Light) | `-0.03em` | `1.05` | Project Titles, Major Headline Hooks |
| **Heading 01** | `clamp(1.75rem, 3.5vw, 3rem)`| 300 (Light) | `-0.02em` | `1.2` | Sub-sections, Case Study Headers |
| **Editorial Lead**| `clamp(1.125rem, 2vw, 1.5rem)`| 300 (Light) | `-0.015em` | `1.6` | Intro paragraphs, summary statements |
| **Body Regular** | `1rem (16px)` | 300 / 400 | `0` | `1.7` | General descriptions, project notes |
| **Mono / Meta** | `0.75rem (12px)` | 400 | `+0.2em` (Wide Uppercase) | `1.4` | Tickers, categories, coordinates, status |

---

## 3. Preloader & Motion Choreography

### 3.1 Preloader Mechanics & UX
1. **Fullscreen Curtain (`z-[9999]`):** Deep mineral black canvas `#090A0C` with a fine noise grain.
2. **Dynamic 000% → 100% Counter:**
   - Giant light numeral (`clamp(4rem, 12vw, 14vw)`, weight 200).
   - Linear / power2 interpolation over 2.2 seconds.
   - Status ticker: `"INITIALIZING MERN RUNTIME" → "CALIBRATING FULL-STACK MODULES" → "INDEXING PROJECTS & ARCHITECTURE" → "SYSTEM READY"`.
   - Hairline progress indicator at the bottom edge.
3. **Smooth Curtain Reveal:**
   - Exit animation sweeps the curtain upwards using `power4.inOut` upon 100% completion.

### 3.2 Micro-Interactions & Physics
1. **Fluid Magnetic Cursor:** Lerped trailing ring and inner beacon with contextual states (`"VIEW"`, `"STACK"`, `"EXP"`, `"EMAIL"`, `"GITHUB"`, `"LIVE"`).
2. **Architectural Typographic Focus:** Pure neo-minimalist project rows highlighting technical depth, protocols, and measurable achievements without decorative image clutter.
3. **Smooth Scroll Engine:** Lenis inertia scroll provider maintaining 60fps momentum.

---

## 4. Resume Data Architecture & Integration

All personal and technical data from Shashank Lakhera's resume is integrated directly into the application:

### 4.1 Data Structure (`src/lib/resumeData.js`)
- **Identity & Contact:**
  - Name: `Shashank Lakhera`
  - Role: `Full-Stack Developer`
  - Location: `Bhopal, MP`
  - Phone: `+91 9770042868`
  - Email: `lakherashashank70@gmail.com`
  - Profiles: GitHub (`https://github.com/S-lakhera`), LinkedIn, LeetCode
- **Professional Summary:**
  Full-Stack Developer and Computer Science graduate specializing in the MERN stack with expertise in RESTful APIs, authentication systems, payment integration, and responsive frontend development.
- **Technical Skills Taxonomy (6 Categories):**
  1. *Languages:* JavaScript (ES6+), TypeScript, HTML5, CSS3, Java, C++, MarkDown
  2. *Frontend:* React.js, Next.js, Redux Toolkit, Context API, TanStack Query, Tailwind CSS, Bootstrap, GSAP
  3. *Backend:* Node.js, Express.js, RESTful APIs, JWT Authentication, Socket.io, Razorpay Integration
  4. *Databases:* MongoDB, MongoDB Aggregation, Mongoose, Redis
  5. *DevOps & Tools:* Git, GitHub, Docker, Postman, Hoppscotch, npm, pnpm
  6. *Core Concepts:* Data Structures & Algorithms, Object-Oriented Programming, MVC Architecture, Database Indexing
- **Featured Projects:**
  1. **DevHub (May 2026):** Full-stack developer platform with GitHub OAuth, JWT tokens, TanStack Query, and ImageKit media integration.
  2. **GLPDDP (June 2026):** Full-stack tournament cricket platform with real-time Socket.IO live scoring, Match/Series MongoDB schemas, and Redux Toolkit state.
  3. **Nexus (July 2026):** Production-ready real-time chat platform with Socket.IO event-driven messaging, HTTP-only cookie JWT auth, and Tailwind CSS.
- **Experience:**
  - Full-Stack Developer Trainee @ Sheryians Coding School (Bhopal, MP | Jan 2025 – Present)
- **Education:**
  - B.Tech in Computer Science Engineering @ Truba Institute of Engineering & Information Technology, Bhopal (Aug 2021 – May 2025 | CGPA: 7.1/10)

---

## 5. Component Breakdown

```
src/
├── app/
│   ├── layout.jsx            # Inter font, SEO metadata, ClientShell
│   ├── page.jsx              # Main flow: Navbar, Hero, WorkSection, Philosophy (Skills), About, Footer
│   └── globals.css           # Design tokens, typography rules, glassmorphism utilities
├── components/
│   ├── Preloader.jsx         # 0-100% GSAP counter with Bhopal, MP location & MERN tickers
│   ├── Navbar.jsx            # Glass header with Bhopal IST live clock, status badge, and anchor links
│   ├── Hero.jsx              # Character-unmasking typography, MERN specialization, scroll prompt
│   ├── WorkSection.jsx       # DevHub, GLPDDP, Nexus with tech pills, achievements, and links
│   ├── Philosophy.jsx        # 6-category Technical Skills grid + Architectural Foundations
│   ├── About.jsx             # Bio, Contact coordinates, Education, and Experience timeline
│   ├── Footer.jsx            # Email clipboard copy, phone CTA, Bhopal location, social links
│   ├── CustomCursor.jsx      # Magnetic interactive cursor with contextual text states
│   └── SmoothScroll.jsx      # Lenis inertia scroll provider
└── lib/
    ├── resumeData.js         # Single source of truth for resume data
    ├── projects.js           # Project exports and mappings
    └── gsap.js               # Centralized GSAP registration
```

---

## 6. Implementation Status & Milestones
- [x] **Milestone 1:** Establish Design Mood & Specification (`DESIGN.md`).
- [x] **Milestone 2:** Configure design tokens, Inter font, and noise layers.
- [x] **Milestone 3:** Implement GSAP preloader with 0-100% counter and curtain reveal.
- [x] **Milestone 4:** Implement Lenis smooth scroll and magnetic contextual cursor.
- [x] **Milestone 5:** Integrate full resume data: DevHub, GLPDDP, Nexus projects with detailed bullet points.
- [x] **Milestone 6:** Implement 6-category technical skills grid & architectural pillars.
- [x] **Milestone 7:** Integrate experience (Sheryians Coding School), education (Truba Institute), and contact details.
