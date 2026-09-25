import type { ApproachPhase } from "./types";

export const approach = {
  statement: "It starts with the business problem, not with choosing a model.",
  intro:
    "An AI agent is a software system with an LLM inside it. It gets the same treatment as any production system: clear requirements, an architecture, explicit integrations, validation and iteration on real inputs.",
  phases: [
    {
      title: "Frame",
      steps: [
        { title: "Business problem", text: "What costs time or money today, for whom, and what a good outcome looks like." },
        { title: "Requirements", text: "Inputs, outputs, constraints, cost of a wrong answer, and what “correct” means." },
        { title: "Architecture", text: "Where an LLM adds value and where plain code is better. Data flow, boundaries, integration points." },
      ],
    },
    {
      title: "Build",
      steps: [
        { title: "Context & knowledge", text: "Which documents, code and domain knowledge the agent needs, and how it gets them." },
        { title: "Tools & APIs", text: "Trackers, repositories and internal services behind explicit, narrow interfaces." },
        { title: "Agent workflow", text: "Steps, prompts, structured output schemas and reasoning passes." },
        { title: "Validation & guardrails", text: "Schema checks, source references, “ask instead of assume”, human review points." },
      ],
    },
    {
      title: "Ship",
      steps: [
        { title: "Prototype", text: "The smallest end-to-end version, run on real inputs." },
        { title: "Demo", text: "Shown to the people who will use it; feedback on actual output, not slides." },
        { title: "Production iteration", text: "Edge cases, reliability, cost and latency — improved on real usage." },
      ],
    },
  ] satisfies ApproachPhase[],
};
