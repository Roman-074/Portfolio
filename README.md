# Roman Fedorov — Portfolio

Personal portfolio of a Senior Software Engineer / AI Agent Engineer. A single
server-rendered page built with Next.js (App Router) on
[vinext](https://github.com/cloudflare/vinext), published to GitHub Pages as a
static export.

## Editing content

All text lives in `content/` — components only render it.

| File                    | What it holds                                                        |
| ----------------------- | -------------------------------------------------------------------- |
| `content/profile.ts`    | Name, headline, intro, hero snapshot, resume, location, years         |
| `content/contacts.ts`   | Email, Telegram, LinkedIn, GitHub (`null` hides a channel)            |
| `content/projects.ts`   | Case studies, architecture diagrams, hero example output             |
| `content/approach.ts`   | "How I build AI systems" process                                      |
| `content/skills.ts`     | Stack grouped by category                                            |
| `content/experience.ts` | Engineering background, carry-over to AI work, optional role history |
| `content/site.ts`       | Site URL, SEO title and description                                  |

Optional values (`resumeUrl`, `location`, `yearsOfExperience`, `roles`, empty
contact channels) stay hidden until they are filled in. For a resume, put the
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

`public/og.png` (1200×630) is the Open Graph image. Regenerate it whenever the
headline in `content/profile.ts` changes.
