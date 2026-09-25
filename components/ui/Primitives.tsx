import type { ReactNode } from "react";

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
  title: string;
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
