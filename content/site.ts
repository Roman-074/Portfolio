import { profile } from "./profile";

// GitHub Pages serves the static export from /Portfolio (see next.config.ts);
// every other build is served from the domain root.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export const site = {
  url: isGitHubPages
    ? "https://roman-074.github.io/Portfolio"
    : "https://android-systems-portfolio.romanf.chatgpt.site",
  basePath: isGitHubPages ? "/Portfolio" : "",
  title: `${profile.name} — ${profile.role} building ${profile.specialization}`,
  description:
    "Roman Fedorov, senior Android engineer who builds AI agents: requirements review, an AI-assisted development workflow and spec-to-code audits.",
  locale: "en_US",
  themeColor: "#f2f0ea",
  /** Month the site was built, shown in the footer. */
  updated: new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" }),
};

/** Prefixes a public/ asset path with the deployment base path. */
export function asset(path: string): string {
  return `${site.basePath}${path}`;
}
