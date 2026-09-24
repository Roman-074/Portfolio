import { ArrowUpRight } from "lucide-react";
import { projects } from "../../content/projects";
import type { CaseStudy } from "../../content/types";
import { CrossCheck } from "../diagrams/CrossCheck";
import { LayerFlow } from "../diagrams/LayerFlow";
import { OwnershipLanes } from "../diagrams/OwnershipLanes";
import { sectionIndex } from "../navigation";
import { DotList, Section } from "../ui/Primitives";

export function Projects() {
  const index = sectionIndex("projects");

  return (
    <Section
      id="projects"
      label="Work"
      title="Three agent systems, as case studies."
      intro={
        <p>
          Each one is a pipeline with inputs, context, validation and a fixed output format. What I built, why, and
          which decisions mattered.
        </p>
      }
    >
      <div className="cases">
        {projects.map((project, i) => {
          const number = `${index}.${i + 1}`;
          switch (project.diagram.kind) {
            case "layers":
              return <FeaturedCase project={project} number={number} key={project.id} />;
            case "steps":
              return <LanesCase project={project} number={number} key={project.id} />;
            case "crosscheck":
              return <AuditCase project={project} number={number} key={project.id} />;
          }
        })}
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------------------
   Shared pieces
   ------------------------------------------------------------------------ */

function CaseHead({ project, number }: { project: CaseStudy; number: string }) {
  return (
    <header className="case__head">
      <p className="case__kicker">
        <span className="case__number">§{number}</span>
        {project.kicker}
      </p>
      <h3 className="case__title" id={`${project.id}-title`}>
        {project.title}
      </h3>
      <p className="case__summary">{project.summary}</p>
    </header>
  );
}

function CaseFacts({ project }: { project: CaseStudy }) {
  return (
    <dl className="facts">
      <div>
        <dt>My role</dt>
        <dd>{project.role}</dd>
      </div>
      <div>
        <dt>Built for</dt>
        <dd>{project.audience}</dd>
      </div>
      <div>
        <dt>Stack</dt>
        <dd>
          <DotList items={project.stack} label={`${project.title} stack`} className="facts__stack" />
        </dd>
      </div>
    </dl>
  );
}

function CaseStory({ project }: { project: CaseStudy }) {
  return (
    <dl className="story">
      <div>
        <dt>Problem</dt>
        <dd>{project.problem}</dd>
      </div>
      <div>
        <dt>What I built</dt>
        <dd>{project.solution}</dd>
      </div>
      <div className="story__result">
        <dt>Result</dt>
        <dd>{project.result}</dd>
      </div>
    </dl>
  );
}

function CaseLinks({ project }: { project: CaseStudy }) {
  if (!project.links?.length) return null;
  return (
    <ul className="case__links">
      {project.links.map((link) => (
        <li key={link.href}>
          <a className="text-link" href={link.href} target="_blank" rel="noreferrer">
            {link.label} <ArrowUpRight aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------------------------------------------------------------------------
   §1.1 — the full case: story next to the pipeline, counts, decisions
   ------------------------------------------------------------------------ */

function FeaturedCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "layers") return null;

  return (
    <article className="case case--featured" id={project.id} aria-labelledby={`${project.id}-title`}>
      <CaseHead project={project} number={number} />
      <CaseFacts project={project} />

      <div className="case__split">
        <CaseStory project={project} />
        <figure className="case__figure reveal">
          <figcaption>{project.diagram.title}</figcaption>
          <LayerFlow title={project.diagram.title} layers={project.diagram.layers} />
        </figure>
      </div>

      {project.lists && (
        <div className="counts reveal">
          {project.lists.map((list) => (
            <div className="count" key={list.title}>
              <p className="count__figure" aria-hidden>
                {list.items.length}
              </p>
              <div>
                <h4 className="count__title">
                  <span className="visually-hidden">{list.items.length} </span>
                  {list.countLabel ?? list.title}
                </h4>
                <DotList items={list.items} className="count__items" />
              </div>
            </div>
          ))}
        </div>
      )}

      {project.notes && (
        <div className="decisions reveal">
          <h4 className="decisions__title">Engineering decisions</h4>
          <ol>
            {project.notes.map((note) => (
              <li key={note.title}>
                <strong>{note.title}</strong>
                <p>{note.text}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      <CaseLinks project={project} />
    </article>
  );
}

/* ---------------------------------------------------------------------------
   §1.2 — the lanes diagram carries the case; text is secondary
   ------------------------------------------------------------------------ */

function LanesCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "steps") return null;
  const [usedFor, ownership] = project.lists ?? [];

  return (
    <article className="case case--lanes" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="case__intro">
        <CaseHead project={project} number={number} />
        <CaseFacts project={project} />
      </div>

      <figure className="case__figure case__figure--wide reveal">
        <figcaption>{project.diagram.title}</figcaption>
        <OwnershipLanes title={project.diagram.title} steps={project.diagram.steps} />
      </figure>

      <div className="case__columns">
        <CaseStory project={project} />
        <div className="case__aside">
          {ownership && (
            <div className="ownership">
              <h4>{ownership.title}</h4>
              <p>{asSentence(ownership.items)}</p>
            </div>
          )}
          {usedFor && (
            <div className="used-for">
              <h4>{usedFor.title}</h4>
              <DotList items={usedFor.items} />
            </div>
          )}
        </div>
      </div>

      <CaseLinks project={project} />
    </article>
  );
}

/* ---------------------------------------------------------------------------
   §1.3 — compact: text on one side, the cross-check figure on the other
   ------------------------------------------------------------------------ */

function AuditCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "crosscheck") return null;
  const { diagram } = project;

  return (
    <article className="case case--audit" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="audit">
        <div className="audit__text">
          <CaseHead project={project} number={number} />
          <CaseFacts project={project} />
          <CaseStory project={project} />
        </div>

        <figure className="audit__figure reveal">
          <figcaption>{diagram.title}</figcaption>
          <CrossCheck title={diagram.title} sources={diagram.sources} agent={diagram.agent} />
          <div className="audit__findings">
            <h4>Reports</h4>
            <ul className="marker-list">
              {diagram.findings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          </div>
          <p className="margin-note">{diagram.rule}</p>
        </figure>
      </div>

      <CaseLinks project={project} />
    </article>
  );
}

/** ["Architecture", "Decisions"] → "Architecture, decisions." */
function asSentence(items: string[]): string {
  return `${items.map((item, i) => (i === 0 ? item : item.toLowerCase())).join(", ")}.`;
}
