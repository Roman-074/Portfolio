import type { ApproachPhase } from "./types";

export const approach = {
  statement: "First the business problem and what a wrong answer costs. The model comes later.",
  intro:
    "An agent is a production system with an LLM inside, so it gets what any production system gets: requirements, an architecture, explicit integrations, validation, and iteration on real inputs.",
  phases: [
    {
      title: "Frame",
      steps: [
        { title: "Business problem", text: "What costs time or money today, for whom, and what a good outcome looks like." },
        { title: "Requirements", text: "Inputs, outputs, constraints, the cost of a wrong answer, and what “correct” means." },
        { title: "Architecture", text: "Where an LLM adds value and where plain code does the job better. Data flow, boundaries, integration points." },
      ],
    },
    {
      title: "Build",
      steps: [
        { title: "Context", text: "Which documents, code and domain knowledge the agent needs, and how it gets them." },
        { title: "Tools & APIs", text: "Trackers, repositories and internal services behind narrow, explicit interfaces." },
        { title: "Workflow", text: "Steps, prompts, structured output schemas and review passes." },
        { title: "Guardrails", text: "Schema checks, source references, “ask instead of assume”, human review points." },
      ],
    },
    {
      title: "Ship",
      steps: [
        { title: "Prototype", text: "The smallest end-to-end version, run on real inputs." },
        { title: "Demo", text: "Shown to the people who will use it. Feedback on actual output." },
        { title: "Iterate", text: "Edge cases, reliability, cost and latency, improved on real usage." },
      ],
    },
  ] satisfies ApproachPhase[],
};
