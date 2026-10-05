import { RESUME_DATA } from "./resumeData";

export const PROJECTS = RESUME_DATA.projects.map((p) => ({
  ...p,
  awards: [p.period, p.techStack[0], p.techStack[3] || "Full-Stack"],
}));

export default PROJECTS;
