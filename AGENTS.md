# Repository Guidelines

## Project Structure & Module Organization
This repository is a small Next.js 16 app using the App Router and TypeScript. Application code lives under `src/app/`, with the root layout in `src/app/layout.tsx`, the home page in `src/app/page.tsx`, and global styles in `src/app/globals.css`. Static assets belong in `public/`. Project-level configuration is kept at the root in files such as `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

Use the `@/*` TypeScript path alias for imports from `src`, for example `import Foo from "@/app/Foo"`.

## Build, Test, and Development Commands
- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the local development server on port 3000.
- `npm run build`: create a production build and catch build-time errors.
- `npm run start`: serve the production build locally after `npm run build`.
- `npm run lint`: run ESLint with the Next.js core-web-vitals and TypeScript rules.

Run `npm run lint` before opening a PR. For production-facing changes, also verify `npm run build`.

Agent rule: do not run `npm run build` or any test command unless the user explicitly asks for it.

## Coding Style & Naming Conventions
Follow the existing code style: TypeScript, strict mode, functional React components, and double quotes. Indentation is 2 spaces. Keep route files in the App Router convention (`page.tsx`, `layout.tsx`) and use PascalCase for component names. Prefer small, focused components and Tailwind utility classes in JSX over ad hoc inline styles.

Linting is configured in `eslint.config.mjs` via `eslint-config-next`. Fix warnings rather than suppressing them unless there is a clear justification.

## Testing Guidelines
There is no test framework configured yet. Until one is added, treat `npm run lint` as the minimum validation step for every change. Only run `npm run build` or other test commands when the user explicitly requests them. If you add tests, keep them close to the feature or in a dedicated `src/__tests__/` area, and use clear names such as `page.test.tsx` or `component-name.test.tsx`.

## Commit & Pull Request Guidelines
Git history is minimal and uses short, imperative commit subjects (example: `Initial commit from Create Next App`). Continue with concise subjects under about 72 characters, such as `Add hero section` or `Fix layout overflow`.

Pull requests should include:
- a short description of the change and its purpose
- linked issue or task reference when available
- screenshots or screen recordings for UI changes

## Rules for each prompt
- confirmation that `npm run lint` and `npm run build` pass only when explicitly requested
