import { ArrowRight } from "lucide-react";
import { background } from "../../content/experience";
import { profile } from "../../content/profile";
import { stack } from "../../content/skills";
import { Section, TagList } from "../ui/Primitives";

export function Background() {
  return (
    <Section id="background" label="Background" title={background.title} intro={<p>{background.intro}</p>}>
      <div className="background">
        <div className="background__profile reveal">
          {profile.yearsOfExperience && (
            <p className="years">
              <span className="years__figure">{profile.yearsOfExperience}</span>
              <span className="years__label">years in production engineering</span>
            </p>
          )}
          <dl className="competencies">
            {background.competencies.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="carryover reveal">
          <h3>What carries over into agent work</h3>
          <ul>
            {background.carryover.map((item) => (
              <li key={item.from}>
                <span className="carryover__from">{item.from}</span>
                <ArrowRight aria-hidden />
                <span className="carryover__to">{item.to}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {background.roles.length > 0 && (
        <ol className="roles reveal" aria-label="Roles">
          {background.roles.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <span className="roles__period">{role.period}</span>
              <div>
                <strong>{role.title}</strong>
                <span className="roles__company">{role.company}</span>
                {role.summary && <p>{role.summary}</p>}
              </div>
            </li>
          ))}
        </ol>
      )}

      <div className="stack-block reveal" id="stack">
        <h3 className="sub-title">Stack</h3>
        <dl className="stack">
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
    </Section>
  );
}
