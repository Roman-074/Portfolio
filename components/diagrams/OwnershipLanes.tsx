import type { CSSProperties } from "react";
import type { FlowOwner, FlowStep } from "../../content/types";

const ownerLabel: Record<FlowOwner, string> = {
  developer: "Developer",
  agent: "Agent",
  shared: "Agent drafts, developer approves",
};

/**
 * Swimlane process: one lane per owner, steps left to right. A shared step
 * spans both lanes. On narrow screens it collapses into a numbered list.
 */
export function OwnershipLanes({ title, steps }: { title: string; steps: FlowStep[] }) {
  return (
    <ol className="lanes" aria-label={title} style={{ "--steps": steps.length } as CSSProperties}>
      <li className="lanes__lane lanes__lane--developer" aria-hidden>
        Developer
      </li>
      <li className="lanes__lane lanes__lane--agent" aria-hidden>
        Agent
      </li>
      {steps.map((step, index) => (
        <li className={`lane-step lane-step--${step.owner}`} key={step.title} style={{ "--col": index + 2 } as CSSProperties}>
          <span className="lane-step__index">{String(index + 1).padStart(2, "0")}</span>
          <strong className="lane-step__title">{step.title}</strong>
          <span className="lane-step__detail">{step.detail}</span>
          <span className="lane-step__owner">{ownerLabel[step.owner]}</span>
        </li>
      ))}
    </ol>
  );
}
