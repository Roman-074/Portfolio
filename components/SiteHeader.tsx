import { profile } from "../content/profile";
import { HeaderNav } from "./HeaderNav";
import { navigation } from "./navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <a className="brand" href="#top" aria-label={`${profile.name} — back to top`}>
          {profile.name}
        </a>
        <HeaderNav items={navigation} />
      </div>
    </header>
  );
}
