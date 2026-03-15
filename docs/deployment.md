# Deployment

The site is deployed to **GitHub Pages** via GitHub Actions.

## How it works

1. Push to the `main` branch triggers the GitHub Actions workflow
2. The workflow runs `npm run build` which produces a static export in `out/`
3. The built output is deployed to GitHub Pages

## Custom Domain

- Domain: `www.ashishneupane.com` (managed through Squarespace)
- The `public/CNAME` file tells GitHub Pages which domain to serve

### DNS Records (Squarespace)

| Type  | Host  | Value                      |
|-------|-------|----------------------------|
| A     | @     | `185.199.108.153`          |
| A     | @     | `185.199.109.153`          |
| A     | @     | `185.199.110.153`          |
| A     | @     | `185.199.111.153`          |
| CNAME | www   | `ash-neupane.github.io`    |

### GitHub Pages Settings

- Source: GitHub Actions
- Custom domain: `www.ashishneupane.com`
- Enforce HTTPS: enabled

## Build locally

```bash
npm run build
```

Output goes to `out/` (static export configured in `next.config.ts`).
