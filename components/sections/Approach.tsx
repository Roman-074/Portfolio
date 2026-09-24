import { approach } from "../../content/approach";
import { SectionHeader } from "../ui/Primitives";

// Steps are numbered continuously across phases: 01–03, 04–07, 08–10.
const phaseOffsets = approach.phases.map((_, i) =>
  approach.phases.slice(0, i).reduce((count, phase) => count + phase.steps.length, 0),
);

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-title">
      <div className="shell approach">
        <div className="approach__aside">
          <SectionHeader id="approach-title" index="02" eyebrow="Approach" title="How I build AI systems">
            <p>{approach.intro}</p>
          </SectionHeader>
          <p className="approach__statement">{approach.statement}</p>
        </div>

        <div className="approach__phases">
          {approach.phases.map((phase, phaseIndex) => (
            <div className="phase reveal" key={phase.title}>
              <h3 className="phase__title">{phase.title}</h3>
              <ol className="phase__steps" start={phaseOffsets[phaseIndex] + 1}>
                {phase.steps.map((step, stepIndex) => (
                  <li key={step.title}>
                    <span className="phase__index" aria-hidden>
                      {String(phaseOffsets[phaseIndex] + stepIndex + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <strong>{step.title}</strong>
                      <p>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
