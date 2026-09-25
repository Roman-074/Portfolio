import type { FlowOwner, FlowStep } from "../../content/types";

const ownerLabel: Record<FlowOwner, string> = {
  developer: "Developer",
  agent: "Agent",
  shared: "Agent + developer",
};

/** Left-to-right process with an explicit owner for every step. */
export function StepFlow({ title, steps }: { title: string; steps: FlowStep[] }) {
  return (
    <ol className="step-flow" aria-label={title}>
      {steps.map((step, index) => (
        <li className={`step step--${step.owner}`} key={step.title}>
          <span className="step__owner">{ownerLabel[step.owner]}</span>
          <span className="step__index" aria-hidden>
            {String(index + 1).padStart(2, "0")}
          </span>
          <strong className="step__title">{step.title}</strong>
          <span className="step__detail">{step.detail}</span>
        </li>
      ))}
    </ol>
  );
}
