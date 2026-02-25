# AGENTS.md

## Cursor Cloud specific instructions

### Overview

Alt-Wealth Citadel is a static Next.js 14 marketing site for an alternative investments platform. It is purely frontend — no backend, database, API routes, or environment variables are required.

### Commands

See `package.json` scripts. Key commands:

- **Dev server**: `npm run dev` (serves on `localhost:3000`)
- **Lint**: `npm run lint`
- **Build**: `npm run build`

### Gotchas

- The codebase had no `.eslintrc.json` originally. One was added with `next/core-web-vitals` extending config. Without it, `next lint` prompts interactively and blocks CI.
- `react/no-unescaped-entities` is set to `"warn"` in `.eslintrc.json` because there are many pre-existing unescaped quote characters across ~30 page files. If set to `"error"` (the default in `core-web-vitals`), `npm run build` fails during the linting step.
- ESLint 8 and `eslint-config-next@14` are required. ESLint 9+ is incompatible with Next.js 14's lint integration.
- No test framework is configured. There are no unit, integration, or e2e tests in the repo.
- No `.env` files or secrets are needed.
