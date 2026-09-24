import { ArrowDown, FileText } from "lucide-react";
import { profile } from "../../content/profile";
import { projects } from "../../content/projects";
import { asset } from "../../content/site";
import { hasContactSection } from "../navigation";
import { SpecReview } from "../SpecReview";

export function Hero() {
  const showcase = projects.find((project) => project.sampleOutput);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__name">{profile.name},</span> {profile.headline}
        </h1>

        <div className="hero__copy">
          <p className="hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Read the case studies <ArrowDown aria-hidden />
            </a>
            {hasContactSection && (
              <a className="button" href="#contact">
                Contact
              </a>
            )}
            {profile.resumeUrl && (
              <a className="text-link" href={asset(profile.resumeUrl)}>
                <FileText aria-hidden /> Resume
              </a>
            )}
          </div>
          <p className="hero__open">
            <span className="label">Open to</span> {profile.openTo.join(" · ")}
          </p>
        </div>

        {showcase?.sampleOutput && <SpecReview project={showcase} output={showcase.sampleOutput} />}
      </div>

      <div className="shell">
        <dl className="snapshot">
          {profile.snapshot.map((item) => (
            <div className="snapshot__item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
