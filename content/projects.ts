import type { CaseStudy } from "./types";

/**
 * Case studies, in display order. The first one is rendered as the featured
 * case with the full architecture diagram; the rest use the compact layout.
 *
 * Only state what is true: no invented metrics, clients or deployments.
 * Add public repositories or demos to `links` when they exist.
 */
export const projects: CaseStudy[] = [
  {
    id: "requirements-agent",
    kicker: "AI agent system",
    title: "Requirements & Specification Agent",
    summary:
      "An agent that reviews requirements and technical specifications before development starts — finds contradictions, gaps and risks, and turns the spec into questions, acceptance criteria and platform-specific tasks.",
    audience: "Product teams: analysts, Android, iOS and backend developers, QA and design",
    role: "Designed and built end-to-end: pipeline architecture, context strategy, analysis workflow, output schema and integration design.",
    problem:
      "Specifications arrive with contradictions, vague wording, missing states and unhandled edge cases. These gaps are usually found late — during implementation, in QA or after release — when fixing them costs the most. Reviewing a large spec by hand for every platform is slow, and its quality depends on who happens to read it.",
    solution:
      "The agent reads the specification together with project documentation and domain context, runs a staged analysis workflow and returns typed results instead of free-form text: findings linked to the requirement they came from, questions for analysts and the customer, acceptance criteria, and a task breakdown per platform.",
    result:
      "Requirement gaps surface before development instead of during QA. Analysts get a concrete list of questions, and the team starts from a decomposed, platform-split backlog with acceptance criteria and a traceability matrix back to the spec.",
    stack: ["LLM APIs", "Structured output", "Context engineering", "Agent workflow", "Jira / YouTrack"],
    diagram: {
      kind: "layers",
      title: "Requirements agent pipeline",
      layers: [
        { label: "Input", nodes: ["Requirements / specification", "Previous spec version"] },
        { label: "Context", nodes: ["Project documentation", "Knowledge base", "Repository"] },
        {
          label: "Agent",
          nodes: ["Decompose requirements", "Analysis passes", "Cross-check against context"],
          accent: true,
        },
        {
          label: "Validation",
          nodes: ["Output schema", "Source references", "Ambiguity → question"],
        },
        {
          label: "Output",
          nodes: ["Risks & findings", "Questions", "Acceptance criteria", "Tasks by platform", "Traceability"],
        },
        { label: "Delivery", nodes: ["Jira / YouTrack", "Analysts & customer", "Dev & QA team"] },
      ],
    },
    lists: [
      {
        title: "Detects",
        items: [
          "Contradictions",
          "Ambiguities",
          "Missing scenarios",
          "Corner cases",
          "Missing requirements",
          "Missing system states",
          "Dependencies",
          "Risks",
        ],
      },
      {
        title: "Produces",
        items: [
          "Acceptance criteria",
          "Questions for analysts and the customer",
          "Android, iOS, backend, QA and design tasks",
          "Technical decomposition",
          "Complexity estimate",
          "Traceability matrix",
          "Comparison between spec versions",
        ],
      },
    ],
    notes: [
      {
        title: "Ask, don't invent",
        text: "When the spec is ambiguous, the agent raises a question instead of assuming product behavior. Unresolved points stay visible until a person answers them.",
      },
      {
        title: "Structured output, not prose",
        text: "Findings, questions and tasks follow a fixed schema, so results can be validated, compared between runs and mapped onto tracker entities.",
      },
      {
        title: "Traceable to the source",
        text: "Every finding and task points back to the requirement it came from — the basis for the traceability matrix and for diffing spec versions.",
      },
      {
        title: "People decide",
        text: "The output is a reviewed draft. Analysts and the team decide what becomes a question to the customer or a task in Jira or YouTrack.",
      },
    ],
    sampleOutput: {
      command: "requirements-agent review",
      source: "checkout-spec v3 + project docs",
      findings: [
        {
          type: "contradiction",
          label: "Contradiction",
          ref: "§4.2 ↔ §6.1",
          text: "Refund window is 14 days in one section and 30 days in another.",
        },
        {
          type: "ambiguity",
          label: "Ambiguity",
          ref: "§3.5",
          text: "“Order can be cancelled” — until payment, or until dispatch?",
        },
        {
          type: "missing",
          label: "Missing state",
          ref: "§5",
          text: "No behavior defined for a payment that times out.",
        },
        {
          type: "question",
          label: "Question → analyst",
          ref: "§4",
          text: "Are partial refunds in scope for this release?",
        },
      ],
      outputs: ["Acceptance criteria", "Android · iOS · Backend · QA tasks", "Traceability"],
    },
  },
  {
    id: "ai-assisted-development",
    kicker: "Engineering workflow",
    title: "AI-assisted development workflow",
    summary:
      "Coding agents and LLMs built into day-to-day software engineering as a controlled workflow with explicit checkpoints — not as autocomplete.",
    audience: "Development teams working on large, long-lived codebases",
    role: "Designed the workflow and apply it in real engineering work: analysis, implementation, debugging, review and documentation.",
    problem:
      "Much of engineering time goes into reading unfamiliar code, tracing bugs, reviewing branches, cross-checking specs and writing repetitive code and documentation. Used ad hoc, AI tools speed this up — and also introduce plausible-looking, unreviewed mistakes.",
    solution:
      "A structured workflow where agents do the heavy reading and drafting — codebase analysis, implementation plans, first implementations, bug analysis, branch review, documentation — while the developer owns every decision point and the final result.",
    result:
      "Faster ramp-up on unfamiliar code and faster first drafts, while architecture, correctness and production quality stay under engineering control.",
    stack: ["Claude Code", "OpenAI Codex", "LLM APIs", "Git", "GitLab CI/CD"],
    diagram: {
      kind: "steps",
      title: "Development loop with ownership per step",
      steps: [
        { title: "Frame", detail: "Task, constraints, acceptance criteria", owner: "developer" },
        { title: "Analyze", detail: "Relevant modules, dependencies, existing patterns", owner: "agent" },
        { title: "Plan", detail: "Structured implementation plan, reviewed and approved", owner: "shared" },
        { title: "Implement", detail: "Changes within the approved plan, tests, docs", owner: "agent" },
        { title: "Validate", detail: "Code review, spec check, tests, production quality", owner: "developer" },
      ],
    },
    lists: [
      {
        title: "Used for",
        items: [
          "Codebase analysis",
          "Feature implementation",
          "Debugging and bug analysis",
          "Specification review",
          "Branch and code review",
          "Spec vs implementation gaps",
          "Implementation planning",
          "Technical documentation",
          "Repetitive engineering tasks",
        ],
      },
      {
        title: "Developer stays responsible for",
        items: ["Architecture", "Decisions", "Validation", "Production quality", "Correctness"],
      },
    ],
  },
  {
    id: "spec-implementation-audit",
    kicker: "Audit agent",
    title: "Specification ↔ Implementation Audit",
    summary:
      "An agent that compares what was specified, what is documented and what is actually implemented — and reports exactly where they diverge.",
    audience: "Teams maintaining products whose code and specs evolve separately",
    role: "Designed and built the audit workflow: source selection, comparison passes and the report format.",
    problem:
      "Over time code drifts away from the specification: behavior gets added, dropped or changed without being documented. Finding these gaps by cross-reading spec, docs and code is slow and rarely done systematically.",
    solution:
      "The agent cross-checks the specification, the documentation and the implementation, and reports missing behavior, deviations from the spec, potentially incorrect assumptions, undocumented implementation decisions and unhandled edge cases.",
    result:
      "Discrepancies become explicit, reviewable items before release — instead of bugs, or arguments about what the expected behavior was.",
    stack: ["LLM APIs", "Structured output", "Repository context", "Specification analysis"],
    diagram: {
      kind: "layers",
      title: "Specification, documentation and implementation cross-check",
      layers: [
        { label: "Sources", nodes: ["Specification", "Documentation", "Implementation"], linked: true },
        { label: "Agent", nodes: ["Cross-check sources"], accent: true },
        {
          label: "Findings",
          nodes: [
            "Missing behavior",
            "Deviations from spec",
            "Incorrect assumptions",
            "Undocumented decisions",
            "Edge cases",
          ],
        },
        { label: "If unclear", nodes: ["Flag and ask — never decide product behavior"] },
      ],
    },
  },
];
