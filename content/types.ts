export type Link = {
  label: string;
  href: string;
};

/** One row of a layered architecture diagram, rendered top to bottom. */
export type FlowLayer = {
  label: string;
  nodes: string[];
  /** Visually emphasised layer — normally the agent itself. */
  accent?: boolean;
  /** Draw nodes as peers linked in both directions (e.g. sources cross-checked against each other). */
  linked?: boolean;
};

export type FlowOwner = "developer" | "agent" | "shared";

export type FlowStep = {
  title: string;
  detail: string;
  owner: FlowOwner;
};

export type Diagram =
  | { kind: "layers"; title: string; layers: FlowLayer[] }
  | { kind: "steps"; title: string; steps: FlowStep[] };

export type CaseNote = {
  title: string;
  text: string;
};

export type SampleFinding = {
  type: "contradiction" | "ambiguity" | "missing" | "question";
  label: string;
  ref: string;
  text: string;
};

/** Illustrative agent output shown in the hero. Always labelled as an example on the page. */
export type SampleOutput = {
  command: string;
  source: string;
  findings: SampleFinding[];
  outputs: string[];
};

export type CaseStudy = {
  id: string;
  kicker: string;
  title: string;
  summary: string;
  audience: string;
  role: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  diagram: Diagram;
  /** Short labelled lists shown next to the diagram, e.g. "Detects" / "Produces". */
  lists?: { title: string; items: string[] }[];
  /** Engineering decisions and principles for technical readers. */
  notes?: CaseNote[];
  links?: Link[];
  sampleOutput?: SampleOutput;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ApproachPhase = {
  title: string;
  steps: { title: string; text: string }[];
};

export type Competency = {
  title: string;
  text: string;
};

export type Carryover = {
  from: string;
  to: string;
};

export type Role = {
  period: string;
  company: string;
  title: string;
  summary?: string;
};

export type ContactChannel = {
  kind: "email" | "telegram" | "linkedin" | "github";
  label: string;
  value: string;
  href: string;
};
