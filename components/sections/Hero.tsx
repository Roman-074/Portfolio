import { ArrowRight, FileText } from "lucide-react";
import { profile } from "../../content/profile";
import { projects } from "../../content/projects";
import { asset } from "../../content/site";
import type { CaseStudy, SampleOutput } from "../../content/types";
import { hasContactSection } from "../navigation";

export function Hero() {
  const showcase = projects.find((project) => project.sampleOutput);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="hero__byline">
            <strong>{profile.name}</strong>
            <span>
              {profile.role} · {profile.specialization}
            </span>
          </p>
          <h1 id="hero-title" className="hero__title">
            {profile.headline}
          </h1>
          <p className="hero__intro">{profile.intro}</p>

          <ul className="hero__focus" aria-label="Focus areas">
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View AI projects <ArrowRight aria-hidden />
            </a>
            <a className="button" href="#background">
              Engineering background
            </a>
            {profile.resumeUrl && (
              <a className="text-link" href={asset(profile.resumeUrl)}>
                <FileText aria-hidden /> Resume
              </a>
            )}
            {hasContactSection && (
              <a className="text-link" href="#contact">
                Contact
              </a>
            )}
          </div>
        </div>

        {showcase?.sampleOutput && <AgentOutputPanel project={showcase} output={showcase.sampleOutput} />}
      </div>

      <div className="shell">
        <dl className="snapshot">
          {profile.snapshot.map((item) => (
            <div className="snapshot__item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function AgentOutputPanel({ project, output }: { project: CaseStudy; output: SampleOutput }) {
  return (
    <figure className="agent-panel" aria-label={`Example output of the ${project.title}`}>
      <div className="agent-panel__bar">
        <span className="agent-panel__dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <code>{output.command}</code>
      </div>
      <div className="agent-panel__body">
        <p className="agent-panel__source">
          <span>input</span> {output.source}
        </p>
        <ul className="findings">
          {output.findings.map((finding) => (
            <li className={`finding finding--${finding.type}`} key={finding.ref + finding.label}>
              <div className="finding__meta">
                <span className="finding__type">{finding.label}</span>
                <span className="finding__ref">{finding.ref}</span>
              </div>
              <p>{finding.text}</p>
            </li>
          ))}
        </ul>
        <p className="agent-panel__outputs">
          <span>also generates</span> {output.outputs.join(" · ")}
        </p>
      </div>
      <figcaption className="agent-panel__caption">
        Illustrative output format ·{" "}
        <a href={`#${project.id}`}>
          {project.title} <ArrowRight aria-hidden />
        </a>
      </figcaption>
    </figure>
  );
}
