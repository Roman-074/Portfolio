import { stack } from "../../content/skills";
import { SectionHeader, TagList } from "../ui/Primitives";

export function Stack() {
  return (
    <section className="section" id="stack" aria-labelledby="stack-title">
      <div className="shell">
        <SectionHeader id="stack-title" index="03" eyebrow="Stack" title="What I build with">
          <p>Grouped by where it is used. AI tooling sits on top of a conventional software engineering stack.</p>
        </SectionHeader>

        <dl className="stack reveal">
          {stack.map((group) => (
            <div className="stack__row" key={group.title}>
              <dt>{group.title}</dt>
              <dd>
                <TagList items={group.items} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
