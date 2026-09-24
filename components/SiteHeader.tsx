import { profile } from "../content/profile";
import { HeaderNav } from "./HeaderNav";
import { hasContactSection, navigation } from "./navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="brand__mark" aria-hidden>
            {profile.initials}
          </span>
          <span className="brand__name">{profile.name}</span>
        </a>
        <HeaderNav items={navigation} />
        {hasContactSection && (
          <a className="button button--small site-header__cta" href="#contact">
            Get in touch
          </a>
        )}
      </div>
    </header>
  );
}
