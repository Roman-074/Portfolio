import { ArrowRight } from "lucide-react";
import type { CaseStudy, SampleOutput, SpecSpan } from "../content/types";

/**
 * A spec excerpt as the requirements agent returns it: marked-up text on the
 * left, numbered review notes on the right. Hovering a note highlights its
 * marks and vice versa (pure CSS, see `.review:has(...)` in globals.css).
 */
export function SpecReview({ project, output }: { project: CaseStudy; output: SampleOutput }) {
  const types = new Map(output.findings.map((finding) => [finding.n, finding.type]));
  const contradiction = output.findings.find((finding) => finding.type === "contradiction");
  const linked = contradiction
    ? output.lines.flatMap((line, i) => (line.spans.some((span) => isMark(span, contradiction.n)) ? [i] : []))
    : [];

  return (
    <figure className="review" aria-label={`Example output of the ${project.title}`}>
      <div className="review__bar">
        <span className="review__file">{output.file}</span>
        <span className="review__version">{output.version}</span>
        <span className="review__count">{output.findings.length} notes</span>
      </div>

      <div className="review__body">
        <ol className="review__doc">
          {linked.length > 1 && (
            <li
              className="review__bracket"
              aria-hidden
              data-note={contradiction?.n}
              style={{ gridRow: `${linked[0] + 1} / ${linked[linked.length - 1] + 2}` }}
            />
          )}
          {output.lines.map((line, i) => (
            <li className="review__line" key={line.ref} style={{ gridRow: i + 1 }}>
              <span className="review__ref">{line.ref}</span>
              <p>
                {line.spans.map((span, j) =>
                  typeof span === "string" ? (
                    span
                  ) : (
                    <mark className={`mark mark--${types.get(span.note)}`} data-note={span.note} key={j}>
                      {span.text}
                      <sup aria-hidden>{span.note}</sup>
                    </mark>
                  ),
                )}
                {line.insert !== undefined && (
                  <mark className="mark mark--missing" data-note={line.insert}>
                    <span aria-hidden>‸</span>
                    <sup aria-hidden>{line.insert}</sup>
                    <span className="visually-hidden"> (something is missing here, note {line.insert})</span>
                  </mark>
                )}
              </p>
            </li>
          ))}
        </ol>

        <ol className="review__notes">
          {output.findings.map((finding) => (
            <li className={`note note--${finding.type}`} data-note={finding.n} key={finding.n}>
              <span className="note__n" aria-hidden>
                {finding.n}
              </span>
              <p className="note__meta">
                {finding.label} <span>{finding.ref}</span>
              </p>
              <p className="note__text">{finding.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="review__caption">
        <span>Also generated: {output.outputs.join(" · ")}</span>
        <a href={`#${project.id}`}>
          Illustrative output · see the case <ArrowRight aria-hidden />
        </a>
      </figcaption>
    </figure>
  );
}

function isMark(span: SpecSpan, n: number): boolean {
  return typeof span !== "string" && span.note === n;
}
