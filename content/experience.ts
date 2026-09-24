import type { Carryover, Competency, Role } from "./types";

export const background = {
  title: "Production Android is the day job.",
  intro:
    "I build and maintain large modular Android apps and own features from the spec to the release: architecture, implementation, CI, review and support. The agents above target problems from exactly this kind of work: unclear specs, code drifting from requirements, slow reviews.",

  competencies: [
    {
      title: "Production mobile",
      text: "Large modular Android apps in production and the high-load features inside them. Kotlin, Coroutines / Flow, Jetpack Compose; Flutter.",
    },
    {
      title: "Architecture",
      text: "Modularization, DI, concurrency and async flows, API integrations, performance.",
    },
    {
      title: "Delivery",
      text: "Features owned from spec to release. CI/CD on GitLab, debugging, code review.",
    },
    {
      title: "Team",
      text: "Technical interviews and code review. Daily work with analysts, QA, design and backend on requirements.",
    },
  ] satisfies Competency[],

  /** How the engineering background maps onto AI engineering work. */
  carryover: [
    { from: "Owning features from the spec", to: "Framing the business problem and defining what correct output means" },
    { from: "Concurrency & async flows", to: "Multi-step agent workflows, tool calls and failure handling" },
    { from: "Code review", to: "Validating model output instead of trusting it" },
    { from: "Modular architecture", to: "Agents as components with clear boundaries and tool interfaces" },
    { from: "CI/CD", to: "Repeatable checks before anything reaches the team" },
  ] satisfies Carryover[],

  /**
   * Employment history, newest first. Rendered as a compact timeline only
   * when non-empty, e.g.
   * { period: "2022 — now", company: "Company", title: "Senior Android Engineer", summary: "…" }
   */
  roles: [] as Role[],
};
