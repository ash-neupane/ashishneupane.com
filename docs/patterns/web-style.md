# Web (Next.js + TypeScript) Style Guide

Stack: Next.js (App Router) + TypeScript, static export (`output: 'export'`) to GitHub Pages.

## Code style

- **Clean**: readable code that doesn't need comments; names self-document.
- **Derive, don't store**: anything computable from props/state is a `const` in render (or `useMemo` if measurably expensive) — never a second `useState` kept in sync.
- **Single responsibility**: one job per component/hook. Extract a named hook the moment a component grows imperative wiring.
- **Early returns**: render guard clauses (`if (RESEARCH.length === 0) return <…/>`) before the happy path.
- **Imports at top**: no dynamic `import()` for ordinary modules.

## Data is static — no fetching

Content lives in `src/data/*.ts` / `*.json` and is **imported at build time**. The site is a static export — there is **no data fetching, no React Query, no `fetch` at runtime**. Components read the imported modules directly (e.g. `import { RESEARCH } from "@/data/research"`).

If a future dynamic need arises, fetch in a **Server Component** or a route handler at build/request time — **never fetch in an effect**.

## Server Components by default

Components are Server Components by default. Add `"use client"` **only** when a component needs interactivity or client hooks (e.g. `usePathname` in the nav). Keep the client boundary as small as possible.

## Effects are a last resort

`useEffect` synchronizes a component with an **external system**. If no external system is involved, the effect is a bug waiting to happen — extra renders, stale closures, double-fires under StrictMode. Read [react.dev/learn/you-might-not-need-an-effect](https://react.dev/learn/you-might-not-need-an-effect).

**Pages and feature components must contain zero `useEffect`** (enforced by ESLint — `no-restricted-syntax` + import ban in `eslint.config.mjs`). If you reach for an effect, the table below has your answer.

| You're tempted to… | Do this instead |
|---|---|
| transform/filter data for render | compute it inline during render |
| cache an expensive transform | `useMemo(() => …, [deps])` |
| reset state when a prop changes | give the child a `key={prop}` so React remounts it |
| adjust some state when a prop changes | derive it in render; if truly needed, set state during render guarded by a `prev !== next` check |
| run a DOM action when data changes (scroll, measure) | trigger it from the event that changed the data, or `key` the node so its ref callback re-fires on mount |
| respond to a user action (submit, click, type) | put the logic in the event handler — "the user _did_ something" ⇒ handler, "the user _saw_ something" ⇒ (maybe) effect |
| debounce input | start the timer in `onChange` (a user action), store it in a `useRef`; no effect |
| share logic between handlers | extract a plain function, call it from each |
| read static content | import it from `src/data/*` at the top of the file |
| run once at app load | do it at module scope |

## Layout & design values — tokens + primitives, never magic numbers

- **No repeated arbitrary values.** A one-off `class="max-w-[1100px]"` is fine *once*; the same
  literal copied across files is a magic number with no source of truth. The moment a value is
  shared, extract it.
- **Shared dimensions are theme tokens.** Put them in `@theme` in `globals.css` (e.g.
  `--container-content: 1100px` → use the generated `max-w-content` utility). Reference the
  token, never the literal, at call sites.
- **Shared layouts are components.** The centered page column lives in one `<Container>`
  (`src/components/container.tsx`); the header, breadcrumb, pages, and the embedded report all
  go through it so margins stay identical. Don't re-implement `mx-auto max-w-… px-…` per file.
- **Colors/shadows/fonts** are the CSS-var tokens in `globals.css` (`--surface`, `--ink`,
  `--shadow-paper`, …) surfaced through Tailwind theme colors — use `bg-surface`, `text-ink`,
  never raw hexes in components.
- Prefer Tailwind's built-in scale (`max-w-md`, `px-6`, `gap-5`) over arbitrary brackets; reach
  for `[value]` only for genuinely one-off, unshared cases.

## Writing & content

- **Crisp content.** Cut the fat. No redundant captions, subtitles, or scene-setting paragraphs — if the page is obviously a list of research threads, it doesn't need a header explaining that.
- **Never use the classic AI "contrast" patterns.** No "It's not X, it's Y" and no "Is it X, or is it Y?". "It's Y" or "Is it X?" is sufficient — the negated half is fluff. Say the thing directly.

## Components & state

- One source of truth per fact. If two pieces of state can disagree, one of them is derived — delete it.
- Lift state only as far as the lowest common parent that needs it; prefer passing data **down** over children pushing data **up** through callbacks-in-effects.
- Keep `useState` for genuinely local, user-driven UI state (a draft string, an open/closed flag).
