# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Arcade Vault — a platform to play games online and compete for the highest scores. Currently a fresh Next.js App Router scaffold (Create Next App); no game features implemented yet.

This project follows Spec Driven Design, based on `/spec` and `/spec-impl` workflows, using conventions from https://github.com/Klerith/fernando-skills (installed via `npx skills@latest add Klerith/fernando-skills`).

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`)

No test runner is configured yet.

## Architecture

- App Router (Next.js 16.3.6) with all routes under `app/`. No `src/` directory — `@/*` path alias resolves to the repo root.
- Styling via Tailwind CSS v4 (`@tailwindcss/postcss`), global styles in `app/globals.css`.
- TypeScript strict mode is enabled.

## Critical: this is not the Next.js you know

Per `AGENTS.md`, this Next.js version has breaking changes versus training data — APIs, conventions, and file structure may differ. Before writing any Next.js code, read the relevant guide under `node_modules/next/dist/docs/` (sections: `01-app`, `02-pages`, `03-architecture`, `04-community`) and heed deprecation notices.
