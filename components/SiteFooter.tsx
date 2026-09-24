import { profile } from "../content/profile";
import { site } from "../content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p className="site-footer__name">
          {profile.name} <span>· {profile.role}, {profile.specialization}</span>
        </p>
        <p className="colophon">
          Set in Schibsted Grotesk and JetBrains Mono, the editor font of Android Studio. Updated {site.updated}.
        </p>
        <a className="site-footer__top" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
