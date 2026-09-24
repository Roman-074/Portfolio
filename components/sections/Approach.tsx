import { approach } from "../../content/approach";
import { Section } from "../ui/Primitives";

// Steps are numbered continuously across phases: 01–03, 04–07, 08–10.
const phaseOffsets = approach.phases.map((_, i) =>
  approach.phases.slice(0, i).reduce((count, phase) => count + phase.steps.length, 0),
);

export function Approach() {
  return (
    <Section id="approach" tone="ink" label="Method" title={approach.statement} intro={<p>{approach.intro}</p>}>
      <div className="phases">
        {approach.phases.map((phase, phaseIndex) => (
          <div className="phase reveal" key={phase.title}>
            <h3 className="phase__title">{phase.title}</h3>
            <ol className="phase__steps" start={phaseOffsets[phaseIndex] + 1}>
              {phase.steps.map((step, stepIndex) => (
                <li key={step.title}>
                  <span className="phase__index" aria-hidden>
                    {String(phaseOffsets[phaseIndex] + stepIndex + 1).padStart(2, "0")}
                  </span>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
