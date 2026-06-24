# Web (React + TypeScript) Style Guide

Stack: React 18 + TypeScript, Vite, React Router, TanStack Query, `openapi-fetch`.

## Code style

- **Clean**: readable code that doesn't need comments; names self-document.
- **Derive, don't store**: anything computable from props/state/server data is a `const` in render (or `useMemo` if measurably expensive) — never a second `useState` kept in sync.
- **Single responsibility**: one job per component/hook. Extract a named hook the moment a component grows imperative wiring.
- **Early returns**: render guard clauses (`if (!user) return <…/>`) before the happy path.
- **Imports at top**: no dynamic `import()` for ordinary modules.

## Effects are a last resort

`useEffect` synchronizes a component with an **external system**. If no external system is involved, the effect is a bug waiting to happen — extra renders, stale closures, double-fires under StrictMode. Read [react.dev/learn/you-might-not-need-an-effect](https://react.dev/learn/you-might-not-need-an-effect).

**Pages and feature components must contain zero `useEffect`.** The only sanctioned effects live in a handful of audited primitive hooks in `src/lib/` that wrap a browser API React has no declarative form for (global `keydown`/`pointerdown` listeners, focus trapping, scroll lock — see `useOverlay`, `useDismiss`). If you reach for an effect anywhere else, the table below has your answer.

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
| notify the parent of a change | call the parent callback in the same handler that sets local state, or lift state up / make the component controlled |
| fetch data | **React Query** (see below) — never fetch in an effect |
| read a value from an external store | `useSyncExternalStore` (see below) |
| run once at app load | do it at module scope, or in `main.tsx` before `createRoot` |

## Data fetching → React Query, never effects

- Every server read is a `useQuery`; every write is a `useMutation`. All of them live in `src/lib/queries.ts` behind named hooks (`useFeed`, `usePostMessage`, …) with keys from the `qk` factory. Components call hooks; they never call `client` or `fetch` directly.
- Mutations invalidate the affected query keys in `onSuccess`. UI reacts to the refreshed cache — do not copy server data into local `useState`.
- Auth/session state is server data too: `/auth/me` and `/sellers/me` are queries gated on token presence, not an effect-driven bootstrap.

## External stores → `useSyncExternalStore`

For state that lives outside React and mutates imperatively (auth tokens in `localStorage`, the pipeline board, cross-tab `storage` events), expose a store with `subscribe` / `getSnapshot` and read it with `useSyncExternalStore`. This replaces both the "write to storage on every change" effect and the "listen for `storage` events" effect.

`getSnapshot` **must** return a referentially-stable value when nothing changed — cache the parsed object and return the same reference until the underlying string changes, or you get an infinite render loop.

## Networking / generated client

- The wire contract is the OpenAPI spec. `npm run gen:api` regenerates `src/lib/schema.gen.ts` (via `openapi-typescript`) from `../openapi.yaml`; the typed `client` in `src/lib/api.ts` is the only thing that talks HTTP.
- Adding an endpoint is backend-first: add the FastAPI route → `python -m scripts.export_openapi` → the webapp picks it up on the next `gen:api`. Never hand-type request/response shapes that the generator owns.
- App-facing types live in `src/lib/types.ts`; map generated `components["schemas"][…]` into them there, so views work with app models.

## Components & state

- One source of truth per fact. If two pieces of state can disagree, one of them is derived — delete it.
- Lift state only as far as the lowest common parent that needs it; prefer passing data **down** over children pushing data **up** through callbacks-in-effects.
- Keep `useState` for genuinely local, user-driven UI state (a draft string, an open/closed flag). Everything server-derived belongs to React Query; everything cross-tab/persistent belongs to a store.
