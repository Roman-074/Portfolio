import { ArrowRight } from "lucide-react";
import { background } from "../../content/experience";
import { profile } from "../../content/profile";
import { SectionHeader } from "../ui/Primitives";

export function Background() {
  return (
    <section className="section" id="background" aria-labelledby="background-title">
      <div className="shell">
        <SectionHeader id="background-title" index="04" eyebrow="Background" title="Engineering background">
          <p>{background.lead}</p>
        </SectionHeader>

        <div className="background">
          <div className="background__profile reveal">
            <h3>
              {background.title}
              {profile.yearsOfExperience && (
                <span className="background__years"> · {profile.yearsOfExperience} years</span>
              )}
            </h3>
            <p>{background.intro}</p>

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
            <h3>How it carries over to AI engineering</h3>
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
      </div>
    </section>
  );
}
