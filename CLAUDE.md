# CLAUDE.md

Personal portfolio site for Ashish Neupane — a Next.js (App Router) static site deployed to GitHub Pages.

## Key Commands

- `npm run dev` — start dev server
- `npm run build` — build static export (must pass before pushing)
- `npm run lint` — run ESLint

## Architecture

- All resume data lives in `src/data/resume.ts` — edit this file to update content
- Pages: Home (`/`) and Resume (`/resume`)
- Static export to `out/`, deployed via GitHub Actions to GitHub Pages
- Custom domain `www.ashishneupane.com` via Squarespace DNS

## Docs

- [Deployment](docs/deployment.md) — GitHub Pages setup, DNS records, build process
- [Testing](docs/testing.md) — Testing conventions and quality checks
