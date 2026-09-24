import type { CaseStudy } from "./types";

/**
 * Case studies, in display order. Each one has its own layout on the page,
 * driven by its diagram kind: "layers" → the full featured case,
 * "steps" → ownership lanes, "crosscheck" → the compact audit case.
 *
 * Only state what is true: no invented metrics, clients or deployments.
 * Add public repositories or demos to `links` when they exist.
 */
export const projects: CaseStudy[] = [
  {
    id: "requirements-agent",
    kicker: "Agent system",
    title: "Requirements & Specification Agent",
    summary:
      "Reads a specification before development starts and reports what is wrong with it: contradictions, gaps and risks. Then turns it into questions, acceptance criteria and tasks for every platform.",
    audience: "Analysts, Android, iOS and backend developers, QA, design",
    role: "Designed and built it end to end: pipeline, context strategy, analysis passes, output schema, tracker integration.",
    problem:
      "Specs arrive with contradictions, vague wording, missing states and unhandled edge cases. Teams usually find these during implementation or QA, when a fix costs the most. Reviewing a large spec by hand for every platform is slow, and the result depends on who reads it.",
    solution:
      "The agent reads the spec together with project documentation and domain context, runs staged analysis passes and returns typed results: findings tied to the requirement they came from, questions for analysts and the customer, acceptance criteria and a task breakdown per platform.",
    result:
      "Gaps surface before development starts. Analysts get a concrete list of questions, and the team starts from a split backlog with acceptance criteria and a traceability matrix back to the spec.",
    stack: ["LLM APIs", "Structured output", "Context engineering", "Agent workflow", "Jira / YouTrack"],
    diagram: {
      kind: "layers",
      title: "Requirements agent pipeline",
      layers: [
        { label: "Input", nodes: ["Specification", "Previous spec version"] },
        { label: "Context", nodes: ["Project documentation", "Knowledge base", "Repository"] },
        {
          label: "Agent",
          nodes: ["Decompose requirements", "Analysis passes", "Cross-check against context"],
          accent: true,
        },
        { label: "Validation", nodes: ["Output schema", "Source references", "Ambiguity → question"] },
        {
          label: "Output",
          nodes: ["Findings", "Questions", "Acceptance criteria", "Tasks by platform", "Traceability"],
        },
        { label: "Delivery", nodes: ["Jira / YouTrack", "Analysts & customer", "Dev & QA"] },
      ],
    },
    lists: [
      {
        title: "Finds",
        countLabel: "kinds of problems it finds",
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
        countLabel: "artefacts it produces",
        items: [
          "Acceptance criteria",
          "Questions for analysts and the customer",
          "Android, iOS, backend, QA and design tasks",
          "Technical decomposition",
          "Complexity estimate",
          "Traceability matrix",
          "Diff between spec versions",
        ],
      },
    ],
    notes: [
      {
        title: "Ask, don’t invent",
        text: "An ambiguous requirement becomes a question for a person. Unresolved points stay visible until someone answers them.",
      },
      {
        title: "Schema over prose",
        text: "Findings, questions and tasks follow a fixed schema, so a run can be validated, compared with the previous one and mapped onto tracker entities.",
      },
      {
        title: "Every finding has a source",
        text: "Each finding and task points to the requirement it came from. That is what makes the traceability matrix and spec-version diffs possible.",
      },
      {
        title: "People make the call",
        text: "The output is a draft for review. Analysts and the team decide what goes to the customer and what becomes a Jira or YouTrack task.",
      },
    ],
    sampleOutput: {
      file: "checkout-spec.md",
      version: "v3",
      lines: [
        { ref: "§3.5", spans: ["An order ", { text: "can be cancelled", note: 1 }, " by the customer."] },
        {
          ref: "§4.2",
          spans: [{ text: "A refund", note: 4 }, " can be requested within ", { text: "14 days", note: 2 }, " of delivery."],
        },
        { ref: "§5.1", spans: ["Payment status is one of: pending, paid, failed."], insert: 3 },
        { ref: "§6.1", spans: ["Refund requests are accepted for ", { text: "30 days", note: 2 }, " after delivery."] },
      ],
      findings: [
        { n: 1, type: "ambiguity", label: "Ambiguity", ref: "§3.5", text: "Cancellable until payment, or until dispatch?" },
        {
          n: 2,
          type: "contradiction",
          label: "Contradiction",
          ref: "§4.2 ↔ §6.1",
          text: "Refund window is 14 days in one section and 30 in another.",
        },
        { n: 3, type: "missing", label: "Missing state", ref: "§5.1", text: "No behavior defined for a payment that times out." },
        { n: 4, type: "question", label: "Question → analyst", ref: "§4.2", text: "Are partial refunds in scope for this release?" },
      ],
      outputs: ["Acceptance criteria", "Android · iOS · backend · QA tasks", "Traceability"],
    },
  },
  {
    id: "ai-assisted-development",
    kicker: "Engineering workflow",
    title: "AI-assisted development workflow",
    summary:
      "How I use coding agents on a large, long-lived codebase. Agents do the reading and the first drafts; every decision point stays with the developer.",
    audience: "Development teams on large, long-lived codebases",
    role: "Designed the workflow and use it in daily work: analysis, implementation, debugging, review and documentation.",
    problem:
      "A lot of engineering time goes into reading unfamiliar code, tracing bugs, reviewing branches and writing repetitive code and docs. Used ad hoc, AI tools speed this up and also add plausible-looking mistakes that nobody reviewed.",
    solution:
      "A fixed loop with an owner for every step. Agents analyse the codebase and draft the plan and the first implementation. The developer frames the task, approves the plan and validates the result.",
    result:
      "Faster ramp-up on unfamiliar modules and faster first drafts, while architecture, correctness and production quality stay under engineering control.",
    stack: ["Claude Code", "OpenAI Codex", "LLM APIs", "Git", "GitLab CI/CD"],
    diagram: {
      kind: "steps",
      title: "Development loop with an owner for every step",
      steps: [
        { title: "Frame", detail: "Task, constraints, acceptance criteria", owner: "developer" },
        { title: "Analyze", detail: "Relevant modules, dependencies, existing patterns", owner: "agent" },
        { title: "Plan", detail: "Implementation plan, reviewed and approved", owner: "shared" },
        { title: "Implement", detail: "Changes within the approved plan, tests, docs", owner: "agent" },
        { title: "Validate", detail: "Review, spec check, tests, production quality", owner: "developer" },
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
        title: "Stays with the developer",
        items: ["Architecture", "Decisions", "Validation", "Production quality", "Correctness"],
      },
    ],
  },
  {
    id: "spec-implementation-audit",
    kicker: "Audit agent",
    title: "Specification ↔ Implementation Audit",
    summary:
      "Compares what was specified, what is documented and what the code actually does, and reports exactly where the three disagree.",
    audience: "Teams whose code and specs evolve separately",
    role: "Designed and built the audit workflow: source selection, comparison passes, report format.",
    problem:
      "Code drifts away from its spec. Behavior gets added, dropped or changed and nobody updates the documents. Cross-reading spec, docs and code to catch this is slow, so it rarely happens systematically.",
    solution:
      "The agent cross-checks all three sources and reports missing behavior, deviations from the spec, questionable assumptions, undocumented implementation decisions and unhandled edge cases.",
    result:
      "Discrepancies become explicit, reviewable items before release, instead of bugs or arguments about what the expected behavior was.",
    stack: ["LLM APIs", "Structured output", "Repository context", "Specification analysis"],
    diagram: {
      kind: "crosscheck",
      title: "Specification, documentation and implementation cross-check",
      sources: ["Specification", "Documentation", "Implementation"],
      agent: "Audit agent",
      findings: [
        "Missing behavior",
        "Deviations from the spec",
        "Questionable assumptions",
        "Undocumented decisions",
        "Unhandled edge cases",
      ],
      rule: "Unclear source? Flag it and ask. The agent never decides product behavior.",
    },
  },
];
