# Testing

## Current Setup

No test framework is configured yet. The project relies on:

- **TypeScript** (`npm run build`) — type checking catches errors at build time
- **ESLint** (`npm run lint`) — enforces code quality and catches common mistakes

## Conventions

- Run `npm run build` before pushing to ensure the site compiles and exports cleanly
- Run `npm run lint` to check for linting issues
- Verify changes locally with `npm run dev` before committing

## Adding Tests (future)

When tests are added, the recommended stack is:

- **Vitest** for unit tests
- **Playwright** for end-to-end tests

Tests should live alongside the code they test (e.g., `component.test.tsx` next to `component.tsx`).
