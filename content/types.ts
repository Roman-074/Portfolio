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
};

export type FlowOwner = "developer" | "agent" | "shared";

export type FlowStep = {
  title: string;
  detail: string;
  owner: FlowOwner;
};

export type Diagram =
  | { kind: "layers"; title: string; layers: FlowLayer[] }
  | { kind: "steps"; title: string; steps: FlowStep[] }
  | {
      kind: "crosscheck";
      title: string;
      /** Exactly three sources, drawn as the corners of a triangle. */
      sources: [string, string, string];
      agent: string;
      findings: string[];
      /** What the agent does when a source is unclear. */
      rule: string;
    };

export type CaseNote = {
  title: string;
  text: string;
};

export type FindingType = "contradiction" | "ambiguity" | "missing" | "question";

export type SampleFinding = {
  /** Number shown on the mark in the spec text and on the note. */
  n: number;
  type: FindingType;
  label: string;
  ref: string;
  text: string;
};

/** A run of spec text; `note` marks it as the subject of a finding. */
export type SpecSpan = string | { text: string; note: number };

export type SpecLine = {
  ref: string;
  spans: SpecSpan[];
  /** Finding number for a missing piece, drawn as an insertion caret at the end of the line. */
  insert?: number;
};

/**
 * Illustrative agent output shown in the hero: a spec excerpt with review
 * marks and the matching notes. Always labelled as an example on the page.
 */
export type SampleOutput = {
  file: string;
  version: string;
  lines: SpecLine[];
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
  /**
   * Short labelled lists. In the featured case each is shown as a large count
   * followed by `countLabel`, e.g. "8 kinds of problems it finds".
   */
  lists?: { title: string; items: string[]; countLabel?: string }[];
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
