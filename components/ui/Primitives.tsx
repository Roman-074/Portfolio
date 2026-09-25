import type { ReactNode } from "react";
import { sectionIndex } from "../navigation";

export function SectionHeader({
  id,
  index,
  eyebrow,
  title,
  children,
}: {
  /** Id of the heading, referenced by the section's aria-labelledby. */
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="section-head">
      <p className="eyebrow">
        <span className="eyebrow__index">{index}</span>
        {eyebrow}
      </p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {children && <div className="section-intro">{children}</div>}
    </header>
  );
}

/** Page section: eyebrow with the section number, title, intro, then content. */
export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="shell">
        <SectionHeader id={`${id}-title`} index={sectionIndex(id)} eyebrow={label} title={title}>
          {intro}
        </SectionHeader>
        {children}
      </div>
    </section>
  );
}

export function TagList({ items, label }: { items: string[]; label?: string }) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Inline list separated by middle dots — for short enumerations. */
export function DotList({ items, label, className }: { items: string[]; label?: string; className?: string }) {
  return (
    <ul className={className ? `dot-list ${className}` : "dot-list"} aria-label={label}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
