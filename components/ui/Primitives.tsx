import type { ReactNode } from "react";
import { sectionIndex } from "../navigation";

/**
 * Page section with the document-style margin: "§n Label" sits in the left
 * column (sticky on desktop), everything else in the main column.
 */
export function Section({
  id,
  label,
  title,
  intro,
  tone = "paper",
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "paper" | "ink";
  children: ReactNode;
}) {
  const index = sectionIndex(id);

  return (
    <section className={`section section--${tone}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="shell section__layout">
        <p className="section__mark">
          {index && <span className="section__index">§{index}</span>}
          {label}
        </p>
        <div className="section__main">
          <header className="section-head">
            <h2 className="section-title" id={`${id}-title`}>
              {title}
            </h2>
            {intro && <div className="section-intro">{intro}</div>}
          </header>
          {children}
        </div>
      </div>
    </section>
  );
}

/** Inline list separated by middle dots — for stacks and short enumerations. */
export function DotList({ items, label, className }: { items: string[]; label?: string; className?: string }) {
  return (
    <ul className={className ? `dot-list ${className}` : "dot-list"} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
