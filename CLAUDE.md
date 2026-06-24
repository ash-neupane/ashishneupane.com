# CLAUDE.md

Personal portfolio site for Ashish Neupane — a Next.js (App Router) static site deployed to GitHub Pages.

## Key Commands

- `npm run dev` — start dev server
- `npm run build` — build static export (must pass before pushing)
- `npm run lint` — run ESLint

## Architecture

- Personal data lives in `src/data/resume.ts` — edit this file to update content
- Research manifest in `src/data/research.json` + reports in `public/research/<slug>/report.html` are owned by a publish script — do NOT hand-edit; read via the typed accessor in `src/data/research.ts`
- Pages: About Me (`/`), Research Reading (`/research`, `/research/[slug]`)
- Static export to `out/`, deployed via GitHub Actions to GitHub Pages
- Custom domain `www.ashishneupane.com` via Squarespace DNS

## Code style

- Web (React/TS) style guide: [docs/patterns/web-style.md](docs/patterns/web-style.md)
- **No `useEffect` in pages/components.** Derive in render, put user-action logic in handlers. Enforced by ESLint (`no-restricted-syntax` + import ban in `eslint.config.mjs`).

## Docs

- [Deployment](docs/deployment.md) — GitHub Pages setup, DNS records, build process
- [Testing](docs/testing.md) — Testing conventions and quality checks
