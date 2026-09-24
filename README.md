# Roman Fedorov — Portfolio

Personal portfolio of a senior Android engineer who builds AI agents. A single
server-rendered page built with Next.js (App Router) on
[vinext](https://github.com/cloudflare/vinext), published to GitHub Pages as a
static export.

## Design

The page reads like a reviewed engineering document: warm paper, ink, and one
review colour (red) that always means either "the agent marked this" or "you
are here". Section numbers (§1–§4) sit in a sticky margin column and in the
header, which highlights the section currently on screen.

- **Hero** — the h1 is one sentence with the name in it. Next to it, a spec
  excerpt marked up by the requirements agent; hovering a note highlights its
  marks and vice versa (CSS `:has()`, no JS).
- **§1 Work** — three case studies, each with its own layout: the featured
  pipeline case, the ownership-lanes workflow, the compact audit case.
- **§2 Background**, **§3 Method** (ink band), **§4 Contact**.
- Type: Schibsted Grotesk for text, JetBrains Mono for labels and references.
  Only CSS animation: a short review pass in the hero and scroll reveals, both
  off under `prefers-reduced-motion`.

## Editing content

All text lives in `content/` — components only render it.

| File                    | What it holds                                                        |
| ----------------------- | -------------------------------------------------------------------- |
| `content/profile.ts`    | Name, h1, intro, hero snapshot, "open to" roles, resume, years        |
| `content/contacts.ts`   | Email, Telegram, LinkedIn, GitHub (`null` hides a channel)            |
| `content/projects.ts`   | Case studies, their diagrams, the marked-up spec shown in the hero    |
| `content/approach.ts`   | §3 Method: statement and the Frame / Build / Ship steps               |
| `content/skills.ts`     | Stack grouped by where it is used (shown at the end of §2)           |
| `content/experience.ts` | §2 Background: competencies, carry-over to agent work, role history  |
| `content/site.ts`       | Site URL, SEO title and description                                  |

A case study's layout follows its `diagram.kind`: `layers` renders the full
featured case, `steps` the ownership lanes, `crosscheck` the compact audit.

Optional values (`resumeUrl`, `location`, `yearsOfExperience`, `roles`, empty
contact channels) stay hidden until they are filled in. `yearsOfExperience`
renders as a large figure in §2, `roles` as a timeline. For a resume, put the
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

`public/og.png` (1200×630) is the Open Graph image: the h1 and a piece of the
marked-up spec, in the site's type and colours. Regenerate it whenever the
headline in `content/profile.ts` changes.
