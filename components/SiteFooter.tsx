import { profile } from "../content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__inner">
        <p>
          <strong>{profile.name}</strong> · {profile.role} / {profile.specialization}
        </p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
