export const RESUME_DATA = {
  name: "Shashank Lakhera",
  role: "Full-Stack Developer",
  location: "Bhopal, MP",
  phone: "+91 9770042868",
  email: "lakherashashank70@gmail.com",
  socials: {
    github: "https://github.com/S-lakhera",
    linkedin: "https://www.linkedin.com/in/shashank-lakhera-ab223b246",
    leetcode: "https://leetcode.com/u/lakhera_shashank/",
  },
  summary:
    "Full-Stack Developer and Computer Science graduate specializing in the MERN stack. Experienced in building scalable web applications using React.js, Node.js, Express.js, and MongoDB, with expertise in RESTful APIs, authentication systems, payment integration, and responsive frontend development. Passionate about designing clean architectures, writing maintainable code, and delivering high-quality software using modern engineering practices.",

  technicalSkills: {
    languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java", "C++", "MarkDown"],
    frontend: ["React.js", "Next.js", "Redux Toolkit", "Context API", "TanStack Query", "Tailwind CSS", "Bootstrap", "GSAP"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Socket.io", "Razorpay Integration"],
    databases: ["MongoDB", "MongoDB Aggregation", "Mongoose", "Redis"],
    devOpsAndTools: ["Git", "GitHub", "Docker", "Postman", "Hoppscotch", "npm", "pnpm"],
    coreConcepts: ["Data Structures & Algorithms", "Object-Oriented Programming", "MVC Architecture", "Database Indexing"],
  },

  projects: [
    {
      id: "devhub",
      number: "01",
      title: "DevHub",
      category: "Developer Community Platform",
      period: "May 2026",
      year: "2026",
      role: "Full-Stack Developer",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TanStack Query",
        "GitHub OAuth",
        "ImageKit",
      ],
      description:
        "Full-stack developer platform enabling engineers to showcase projects, craft rich developer profiles, and discover community creations through technology filtering.",
      bullets: [
        "Built a full-stack developer platform enabling developers to showcase projects, create rich developer profiles, and discover community projects through search and technology-based filtering.",
        "Implemented secure authentication using GitHub OAuth, JWT access/refresh tokens, HTTP-only cookies, and protected client/server routes to provide a production-ready authentication flow.",
        "Integrated GitHub API to automatically fetch repositories and ImageKit for cloud media management while architecting the application with a scalable MERN-based feature-oriented structure for future platform expansion.",
      ],
      links: {
        github: "https://github.com/S-lakhera/Dev-Hub",
        live: "https://dev-hub-roan-one.vercel.app",
      },
      tags: ["React.js", "Node.js", "MongoDB", "TanStack Query", "GitHub OAuth", "ImageKit"],
    },
    {
      id: "glpddp",
      number: "02",
      title: "GLPDDP",
      category: "Real-Time Cricket Tournament Engine",
      period: "June 2026",
      year: "2026",
      role: "Full-Stack Engineer",
      techStack: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Redux Toolkit",
        "React Query",
        "JWT",
      ],
      description:
        "Comprehensive full-stack cricket platform featuring live ball-by-ball scoring, match management, team administration, and real-time updates for fans and tournament admins.",
      bullets: [
        "Collaborated in developing a full-stack cricket platform featuring live scoring, match management, team administration, and real-time match updates for both fans and administrators.",
        "Owned the Series and Match modules by designing MongoDB schemas, implementing RESTful APIs, integrating them with the Team module, and connecting backend services to responsive frontend interfaces.",
        "Developed the Socket.IO backend for real-time match data synchronization and actively participated in Git-based team collaboration through pull request reviews, merge conflict resolution, and collaborative feature integration.",
      ],
      links: {
        github: "https://github.com/S-lakhera/GLPDDP",
        live: "https://glpddp.vercel.app",
      },
      tags: ["Next.js", "Socket.IO", "MongoDB Schemas", "Redux Toolkit", "JWT Auth"],
    },
    {
      id: "nexus",
      number: "03",
      title: "Nexus",
      category: "Real-Time Chat & Collaboration",
      period: "July 2026",
      year: "2026",
      role: "Full-Stack Developer",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "Redux Toolkit",
        "JWT",
        "Tailwind CSS",
      ],
      description:
        "Production-ready real-time communication platform supporting 1-to-1 messaging, group conversations, typing indicators, read receipts, and session-based authentication.",
      bullets: [
        "Built a production-ready real-time chat platform supporting one-to-one messaging, group conversations, typing indicators, read receipts, and secure session-based authentication.",
        "Implemented JWT access/refresh token authentication with HTTP-only cookies, role-protected routes, and Redux Toolkit for centralized client-side state management.",
        "Architected a scalable MERN application using feature-based frontend modules, MVC backend architecture, and Socket.IO-powered event-driven communication for low-latency message delivery.",
      ],
      links: {
        github: "https://github.com/S-lakhera/Nexus",
        live: "https://nexus-chat-lilac-two.vercel.app",
      },
      tags: ["React.js", "Socket.IO", "Redux Toolkit", "JWT", "Tailwind CSS", "MVC Architecture"],
    },
  ],

  experience: [
    {
      role: "Full-Stack Developer Trainee",
      company: "Sheryians Coding School",
      period: "Jan 2025 – Present",
      location: "Bhopal, MP",
      note: "Intensive project-driven software engineering program focused on designing and building scalable full-stack web applications using the MERN stack.",
      bullets: [
        "Participated in an intensive project-driven software engineering program focused on designing and building scalable full-stack web applications using the MERN stack.",
        "Developed production-style applications by implementing RESTful APIs, authentication systems, database design, real-time communication, and responsive frontend interfaces following industry-standard development practices.",
        "Collaborated in team-based development using Git, pull requests, code reviews, and Agile workflows while strengthening problem-solving skills through hands-on projects and code reviews.",
      ],
    },
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    institution: "Truba Institute of Engineering & Information Technology, Bhopal",
    period: "Aug 2021 – May 2025",
    cgpa: "7.1 / 10",
  },
};
