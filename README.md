# Kareem Mohamed — Portfolio

Personal portfolio site. React + TypeScript + Vite, Tailwind CSS v4.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Content

All copy lives in `src/data.ts`.

- **`projects`** — placeholder entries (titles inferred from local project files). Replace `summary`, `tags`, and add `link` for each before publishing.
- **`profile.github`** — empty; add your GitHub URL to show the icon in the nav rail.
- Contact section intentionally omits a phone number; add one in `src/data.ts` if you want it public.

## Deploy

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`.
