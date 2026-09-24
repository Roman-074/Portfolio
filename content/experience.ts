import type { Carryover, Competency, Role } from "./types";

export const background = {
  title: "Senior Software / Android Engineer",
  lead: "The AI work is an extension of production engineering, not a replacement for it.",
  intro:
    "Before LLM systems I built and maintained large production mobile applications — owning features end to end, from requirements and architecture to release and support.",

  competencies: [
    {
      title: "Production mobile",
      text: "Large modular Android applications in production. Kotlin, Coroutines / Flow, Jetpack Compose; Flutter.",
    },
    {
      title: "Architecture & systems",
      text: "Modular architecture, system design, concurrency and asynchronous flows, API integrations, performance.",
    },
    {
      title: "Delivery & quality",
      text: "Feature ownership end to end, CI/CD, debugging, code review.",
    },
    {
      title: "Team",
      text: "Technical interviewing and code review; working with analysts, QA, design and backend on requirements.",
    },
  ] satisfies Competency[],

  /** How the engineering background maps onto AI engineering work. */
  carryover: [
    { from: "Requirements & feature ownership", to: "Framing the business problem and defining what correct output means" },
    { from: "Concurrency & async systems", to: "Multi-step agent workflows, tool calls and failure handling" },
    { from: "Code review discipline", to: "Validating model output instead of trusting it" },
    { from: "Modular architecture & API integration", to: "Agents as components with clear boundaries and tool interfaces" },
    { from: "CI/CD", to: "Repeatable checks before anything reaches the team" },
  ] satisfies Carryover[],

  /**
   * Employment history, newest first. Rendered as a compact list only when
   * non-empty, e.g.
   * { period: "2022 — now", company: "Company", title: "Senior Android Engineer", summary: "…" }
   */
  roles: [] as Role[],
};
