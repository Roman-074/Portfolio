import { ArrowUpRight } from "lucide-react";
import { projects } from "../../content/projects";
import type { CaseStudy } from "../../content/types";
import { CrossCheck } from "../diagrams/CrossCheck";
import { LayerFlow } from "../diagrams/LayerFlow";
import { OwnershipLanes } from "../diagrams/OwnershipLanes";
import { DotList, Section, TagList } from "../ui/Primitives";

export function Projects() {
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
          const number = String(i + 1).padStart(2, "0");
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

function CaseHead({ project, number, featured = false }: { project: CaseStudy; number: string; featured?: boolean }) {
  return (
    <header className="case__head">
      <p className="case__kicker">
        <span className="case__index">{number}</span>
        {featured ? `Featured case · ${project.kicker}` : project.kicker}
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
    <dl className="case__facts">
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
          <TagList items={project.stack} label={`${project.title} stack`} />
        </dd>
      </div>
    </dl>
  );
}

function CaseStory({ project, stacked = false }: { project: CaseStudy; stacked?: boolean }) {
  return (
    <div className={stacked ? "case__story case__story--stacked" : "case__story"}>
      <div>
        <h4>Problem</h4>
        <p>{project.problem}</p>
      </div>
      <div>
        <h4>What I built</h4>
        <p>{project.solution}</p>
      </div>
      <div>
        <h4>Result</h4>
        <p>{project.result}</p>
      </div>
    </div>
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
   01 — the full case: story, pipeline, counts, decisions
   ------------------------------------------------------------------------ */

function FeaturedCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "layers") return null;

  return (
    <article className="case case--featured reveal" id={project.id} aria-labelledby={`${project.id}-title`}>
      <CaseHead project={project} number={number} featured />
      <CaseFacts project={project} />

      <div className="case__body">
        <CaseStory project={project} />
        <figure className="case__diagram">
          <figcaption>
            <span>Architecture</span>
            {project.diagram.title}
          </figcaption>
          <LayerFlow title={project.diagram.title} layers={project.diagram.layers} />
        </figure>
      </div>

      {project.lists && (
        <div className="counts">
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

      <CaseLinks project={project} />
    </article>
  );
}

/* ---------------------------------------------------------------------------
   02 — the ownership lanes carry the case
   ------------------------------------------------------------------------ */

function LanesCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "steps") return null;
  const [usedFor, ownership] = project.lists ?? [];

  return (
    <article className="case reveal" id={project.id} aria-labelledby={`${project.id}-title`}>
      <CaseHead project={project} number={number} />
      <CaseFacts project={project} />

      <figure className="case__diagram">
        <figcaption>
          <span>Workflow</span>
          {project.diagram.title}
        </figcaption>
        <OwnershipLanes title={project.diagram.title} steps={project.diagram.steps} />
      </figure>

      <CaseStory project={project} />

      <div className="case__lists">
        {ownership && (
          <div>
            <h4>{ownership.title}</h4>
            <p className="ownership">{asSentence(ownership.items)}</p>
          </div>
        )}
        {usedFor && (
          <div>
            <h4>{usedFor.title}</h4>
            <DotList items={usedFor.items} className="used-for" />
          </div>
        )}
      </div>

      <CaseLinks project={project} />
    </article>
  );
}

/* ---------------------------------------------------------------------------
   03 — compact: story on one side, the cross-check figure on the other
   ------------------------------------------------------------------------ */

function AuditCase({ project, number }: { project: CaseStudy; number: string }) {
  if (project.diagram.kind !== "crosscheck") return null;
  const { diagram } = project;

  return (
    <article className="case reveal" id={project.id} aria-labelledby={`${project.id}-title`}>
      <CaseHead project={project} number={number} />
      <CaseFacts project={project} />

      <div className="audit">
        <CaseStory project={project} stacked />

        <figure className="case__diagram audit__figure">
          <figcaption>
            <span>Architecture</span>
            {diagram.title}
          </figcaption>
          <CrossCheck title={diagram.title} sources={diagram.sources} agent={diagram.agent} />
          <div className="audit__findings">
            <h4>Reports</h4>
            <ul className="marker-list">
              {diagram.findings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          </div>
          <p className="audit__rule">{diagram.rule}</p>
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
