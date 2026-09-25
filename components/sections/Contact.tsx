import { ArrowUpRight, FileText } from "lucide-react";
import { contactChannels } from "../../content/contacts";
import { profile } from "../../content/profile";
import { asset } from "../../content/site";
import { hasContactSection } from "../navigation";
import { SectionHeader } from "../ui/Primitives";

export function Contact() {
  if (!hasContactSection) return null;

  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="shell contact">
        <SectionHeader id="contact-title" index="05" eyebrow="Contact" title="Let’s talk">
          <p>
            Open to {formatList(profile.openTo)} roles, and to building AI agents for engineering and business
            workflows.
          </p>
        </SectionHeader>

        <ul className="channels">
          {contactChannels.map((channel) => {
            const external = channel.kind !== "email";
            return (
              <li key={channel.kind}>
                <a
                  className="channel"
                  href={channel.href}
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="channel__label">{channel.label}</span>
                  <span className="channel__value">{channel.value}</span>
                  <ArrowUpRight aria-hidden />
                </a>
              </li>
            );
          })}
          {profile.resumeUrl && (
            <li>
              <a className="channel" href={asset(profile.resumeUrl)}>
                <span className="channel__label">Resume</span>
                <span className="channel__value">
                  <FileText aria-hidden /> PDF
                </span>
                <ArrowUpRight aria-hidden />
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

function formatList(items: string[]): string {
  if (items.length < 2) return items.join("");
  return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
