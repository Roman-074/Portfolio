/**
 * Who the portfolio is about. Everything rendered in the hero, header, footer
 * and metadata comes from here — edit this file, not the components.
 *
 * Optional fields are hidden on the site while they are null.
 */
export const profile = {
  name: "Roman Fedorov",
  role: "Senior Android Engineer",
  specialization: "AI agents",

  /** The h1. Reads as one sentence: "<name>, <headline>" */
  headline: "senior Android engineer who builds AI agents.",
  intro:
    "Day job: large modular Android apps in production and the high-load features inside them. Alongside it I build agents that review specifications, plan implementation and check code against requirements.",

  /** Three short columns under the hero: the 30-second read. */
  snapshot: [
    {
      label: "Day job",
      text: "Senior Android engineer on large production apps. Kotlin, Compose, Coroutines / Flow, modular architecture, CI/CD, code review, technical interviews.",
    },
    {
      label: "Alongside",
      text: "Three agent systems: requirements review, an AI-assisted development workflow and a spec ↔ implementation audit.",
    },
    {
      label: "House rule",
      text: "If a requirement is unclear, the agent asks. It never fills the gap with product behavior nobody decided on.",
    },
  ],

  /** Roles this portfolio targets; shown in the contact section. */
  openTo: ["AI Engineer", "AI Agent Engineer", "LLM Engineer", "Senior Android / Software Engineer"],

  /** Put a PDF into public/resume/ and set e.g. "/resume/roman-fedorov-resume.pdf". */
  resumeUrl: null as string | null,
  /** e.g. "Remote · Europe". */
  location: null as string | null,
  /** e.g. "8+". Shown as a large figure in the background section only when set. */
  yearsOfExperience: null as string | null,
};

export type Profile = typeof profile;
