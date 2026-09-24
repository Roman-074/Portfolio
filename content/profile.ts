/**
 * Who the portfolio is about. Everything rendered in the hero, header, footer
 * and metadata comes from here — edit this file, not the components.
 *
 * Optional fields are hidden on the site while they are null.
 */
export const profile = {
  name: "Roman Fedorov",
  initials: "RF",
  role: "Senior Software Engineer",
  specialization: "AI Agent Engineer",

  headline:
    "I build AI agents that turn requirements, code and project context into structured engineering work.",
  intro:
    "Senior Software Engineer with a production background in large modular mobile applications. I now apply that experience to LLM systems: agents that review specifications, plan and audit implementation, and automate development and business workflows — with validation built in and engineers accountable for the result.",

  /** Quiet one-line list of focus areas under the hero text. */
  focus: ["Production engineering", "System design", "AI agents", "LLM workflows", "Automation"],

  /** Three short columns at the bottom of the hero: the 30-second read. */
  snapshot: [
    {
      label: "Background",
      text: "Senior Software / Android Engineer. Production apps, modular architecture, concurrency, CI/CD, code review and technical interviews.",
    },
    {
      label: "Focus now",
      text: "AI agents and LLM workflows: requirements analysis, spec-to-code audits, AI-assisted development and business process automation.",
    },
    {
      label: "Principle",
      text: "Start from the business problem, not the model. When requirements are ambiguous, the agent asks — it does not invent product behavior.",
    },
  ],

  /** Roles this portfolio targets; shown in the contact section. */
  openTo: ["AI Engineer", "AI Agent Engineer", "LLM Engineer", "Senior Software Engineer"],

  /** Put a PDF into public/resume/ and set e.g. "/resume/roman-fedorov-resume.pdf". */
  resumeUrl: null as string | null,
  /** e.g. "Remote · Europe". */
  location: null as string | null,
  /** e.g. "8+". Shown in the background section only when set. */
  yearsOfExperience: null as string | null,
};

export type Profile = typeof profile;
