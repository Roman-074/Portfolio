import { ArrowUpRight } from "lucide-react";
import { projects } from "../../content/projects";
import type { CaseStudy, Diagram } from "../../content/types";
import { LayerFlow } from "../diagrams/LayerFlow";
import { StepFlow } from "../diagrams/StepFlow";
import { SectionHeader, TagList } from "../ui/Primitives";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        <SectionHeader id="projects-title" index="01" eyebrow="Selected work" title="AI systems I design and build">
          <p>
            Each case is an engineering system — inputs, context, agent workflow, validation and structured output —
            not a single clever prompt.
          </p>
        </SectionHeader>

        <div className="cases">
          {featured && <CaseStudyArticle project={featured} index={1} featured />}
          {rest.map((project, i) => (
            <CaseStudyArticle project={project} index={i + 2} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyArticle({ project, index, featured = false }: { project: CaseStudy; index: number; featured?: boolean }) {
  const titleId = `${project.id}-title`;

  return (
    <article className={featured ? "case case--featured reveal" : "case reveal"} id={project.id} aria-labelledby={titleId}>
      <header className="case__head">
        <p className="case__kicker">
          <span className="case__index">{String(index).padStart(2, "0")}</span>
          {featured ? `Featured case · ${project.kicker}` : project.kicker}
        </p>
        <h3 className="case__title" id={titleId}>
          {project.title}
        </h3>
        <p className="case__summary">{project.summary}</p>
      </header>

      <dl className="case__facts">
        <div>
          <dt>Built for</dt>
          <dd>{project.audience}</dd>
        </div>
        <div>
          <dt>My role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Stack</dt>
          <dd>
            <TagList items={project.stack} label={`${project.title} stack`} />
          </dd>
        </div>
      </dl>

      <div className="case__body">
        <div className="case__story">
          <div>
            <h4>Problem</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>Solution</h4>
            <p>{project.solution}</p>
          </div>
          <div>
            <h4>Result</h4>
            <p>{project.result}</p>
          </div>
        </div>

        <figure className="case__diagram">
          <figcaption>
            <span>{project.diagram.kind === "steps" ? "Workflow" : "Architecture"}</span>
            {project.diagram.title}
          </figcaption>
          <DiagramView diagram={project.diagram} />
        </figure>
      </div>

      {project.lists && (
        <div className="case__lists">
          {project.lists.map((list) => (
            <div key={list.title}>
              <h4>{list.title}</h4>
              <ul className="marker-list">
                {list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {project.notes && (
        <div className="case__notes">
          <h4>Engineering decisions</h4>
          <dl>
            {project.notes.map((note) => (
              <div key={note.title}>
                <dt>{note.title}</dt>
                <dd>{note.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {project.links && project.links.length > 0 && (
        <ul className="case__links">
          {project.links.map((link) => (
            <li key={link.href}>
              <a className="text-link" href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function DiagramView({ diagram }: { diagram: Diagram }) {
  return diagram.kind === "steps" ? (
    <StepFlow title={diagram.title} steps={diagram.steps} />
  ) : (
    <LayerFlow title={diagram.title} layers={diagram.layers} />
  );
}
