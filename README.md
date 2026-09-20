# lnanhkhoa.github.io

Personal portfolio site of **Khoa Le** — Senior Full-Stack Developer (Ho Chi Minh City, Vietnam).
Single-page React app built with Vite + Tailwind, deployed to GitHub Pages.

Live: https://lnanhkhoa.github.io

---

## Stack

| Layer    | Choice                                                     |
| -------- | ---------------------------------------------------------- |
| Build    | Vite 4, `@vitejs/plugin-react`                              |
| UI       | React 18, React Router 7 (`BrowserRouter`), lazy routes     |
| Styling  | Tailwind CSS 3, `class-variance-authority`, `tailwind-merge`|
| Icons    | `lucide-react`                                              |
| Content  | JS data modules + Markdown (`react-markdown`, `remark-gfm`, `rehype-raw`, `rehype-highlight`) |
| Deploy   | `gh-pages` → GitHub Pages                                   |

Dev server runs on **port 4000** (`vite.config.js`). `@` is aliased to `src/`.

---

## Getting started

```bash
bun install          # bun.lock is the committed lockfile
bun run dev          # http://localhost:4000
```

npm/yarn work too — the lockfile is just Bun's.

### Scripts

| Script       | What it does                                              |
| ------------ | --------------------------------------------------------- |
| `dev`        | Vite dev server on `:4000`                                 |
| `build`      | Production build → `dist/`                                 |
| `preview`    | Serve the built `dist/` locally                            |
| `deploy`     | `predeploy` builds, then publishes `dist/` to `gh-pages`   |
| `format`     | Prettier over `src/`                                       |
| `new-post`   | Scaffold a new blog post Markdown file                     |
| `lint`       | ESLint (see *Known gaps* below)                            |

---

## Project layout

```
src/
  main.jsx            entry
  App.jsx             router, aurora background, footer
  index.css           Tailwind layers + custom animations/utilities
  pages/
    Home.jsx          Hero → About → Skills → Experience → Projects → Contact
    Blog.jsx          blog index   (route currently disabled)
    BlogPost.jsx      post detail  (route currently disabled)
  components/         Hero, About, Skills, Experience, Projects,
                      PersonalProjects, Contact, Header, Terminal,
                      TechStack, Section, Reveal, FeatureList, ScrollToTop
  content/            site data — edit these, not the components
    profile.js        name, title, tagline, contacts, resume URL
    experience.js     work history
    projects.js       client / company work
    personalProjects.js  side projects
    skills.js         skill categories + levels
    blog/*.md         blog posts with YAML frontmatter
  lib/
    blogLoader.js     import.meta.glob over content/blog, frontmatter parser
    blogData.js       blog data helpers
    utils.js          `cn()` class merge helper
public/
  2026-khoale-resume.pdf        served at /2026-khoale-resume.pdf
  khoale-senior-resume.pdf
scripts/
  new-blog-post.js    CLI post scaffolder
```

---

## Editing content

All copy lives in `src/content/` — no component edits needed for routine updates.

- **Profile / contact / resume link** → `src/content/profile.js`
  (`profile` for identity, `workPreferences` for the hiring signals in the Contact section).
- **Work history** → `src/content/experience.js`
- **Projects** → `src/content/projects.js` (company work), `personalProjects.js` (side projects)
- **Skills** → `src/content/skills.js` (`{ name, level }`, level is the bar percentage)
- **Resume PDF** → drop the file in `public/`, point `profile.resumeUrl` at it.

### Blog posts

```bash
bun run new-post "Your Post Title"
```

Creates `src/content/blog/<slug>.md` with frontmatter:

```yaml
---
title: "Your Post Title"
excerpt: "Short description"
date: "2026-09-20"
readTime: "5 min read"
tags: ["React", "Vite"]
featured: false
---
```

`blogLoader.js` picks the file up automatically via `import.meta.glob` — no registration step.
Posts are sorted by `date`, newest first, and the slug comes from the filename.

> The `/blog` and `/blog/:id` routes are **commented out** in `src/App.jsx`.
> Uncomment the two `Route` entries and the two lazy imports to publish the blog.

---

## Deployment

```bash
bun run deploy
```

`predeploy` runs the Vite build, then `gh-pages -d dist` pushes `dist/` to the `gh-pages`
branch, which GitHub Pages serves. Source stays on `main`.

Because the app uses `BrowserRouter`, deep links only resolve once the blog routes are
live if GitHub Pages has an SPA fallback (`404.html` copy of `index.html`). The current
single-route setup (`/`) is unaffected.

---

## Known gaps

- `bun run lint` fails: `eslint` 8 is installed but no `.eslintrc*` config is committed.
- `predeploy` hardcodes `yarn build`; running `bun run deploy` still shells out to yarn.
- `PersonalProjects` is built and populated but not rendered — it is commented out in
  `src/pages/Home.jsx`.
- `blogLoader.js` ships a large `fallbackBlogPosts` array that duplicates content in
  `src/content/blog/`.
