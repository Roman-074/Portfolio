# Roman Fedorov — Portfolio

Personal portfolio of a senior Android engineer who builds AI agents. A single
server-rendered page built with Next.js (App Router) on
[vinext](https://github.com/cloudflare/vinext), published to GitHub Pages as a
static export.

## Design

Dark, quiet UI with a single cyan accent; semantic tones (rose, amber, green)
appear only on finding types in the agent output.

- **Hero** — the h1 is one sentence with the name in it, a short intro, the
  roles the site targets, two CTAs, and an illustrative output panel of the
  requirements agent. A three-column snapshot closes the first screen.
- **01 Work** — three case studies, each with its own layout: the featured
  pipeline case (story, architecture, counts, decisions), the ownership-lanes
  workflow, and the audit case with the cross-check figure.
- **02 Background** (competencies, carry-over to agent work, stack),
  **03 Method**, **04 Contact**. The header highlights the section on screen.
- Motion is CSS only (scroll-driven reveals), off under
  `prefers-reduced-motion`.

## Editing content

All text lives in `content/` — components only render it.

| File                    | What it holds                                                        |
| ----------------------- | -------------------------------------------------------------------- |
| `content/profile.ts`    | Name, h1, intro, hero snapshot, "open to" roles, resume, years        |
| `content/contacts.ts`   | Email, Telegram, LinkedIn, GitHub (`null` hides a channel)            |
| `content/projects.ts`   | Case studies, their diagrams, the sample agent output in the hero     |
| `content/approach.ts`   | Method: title, statement and the Frame / Build / Ship steps           |
| `content/skills.ts`     | Stack grouped by where it is used (end of Background)           |
| `content/experience.ts` | Background: competencies, carry-over to agent work, role history     |
| `content/site.ts`       | Site URL, SEO title and description                                  |

A case study's layout follows its `diagram.kind`: `layers` renders the full
featured case, `steps` the ownership lanes, `crosscheck` the compact audit.

Optional values (`resumeUrl`, `location`, `yearsOfExperience`, `roles`, empty
contact channels) stay hidden until they are filled in. `yearsOfExperience`
renders as a large figure in Background, `roles` as a timeline. For a resume, put the
PDF into `public/resume/` and set `profile.resumeUrl`.

## Commands

```bash
npm install
npm run dev          # local dev server on http://localhost:3000
npm run build        # vinext production build
npm test             # vinext build + rendered HTML checks
npm run build:pages  # static export into out/ (what GitHub Pages deploys)
npm run lint
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy-pages.yml`, which builds the
static export with the `/Portfolio` base path and publishes it to
<https://roman-074.github.io/Portfolio/>.

The vinext / Cloudflare pieces (`worker/`, `db/`, `drizzle/`, `.openai/`,
`app/chatgpt-auth.ts`) come from the Sites starter and are kept for that
hosting target; the portfolio itself does not use a database or sign-in.

## Social preview

`public/og.png` (1200×630) is the Open Graph image: the h1 and the agent
pipeline, in the site's colours. Regenerate it whenever the
headline in `content/profile.ts` changes.
