# Ron Lara — Portfolio

Personal portfolio site for Ron Lara, a Software Engineer with 4+ years of experience in full-stack development, system design, and scalable web applications. Built as a React + TypeScript single-page app and deployed on Vercel.

## Tech Stack

- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first config — no `tailwind.config.js`)
- **Routing**: React Router (`react-router-dom`)
- **Hosting**: Vercel

## Getting Started

Prerequisites: Node.js 18+

```bash
npm install
npm run dev       # starts the dev server at http://localhost:5173
npm run build     # type-checks and builds for production
npm run preview   # serves the production build locally
npm run lint      # eslint
```

## Project Structure

```
src/
├── components/
│   ├── sections/            # Landing page sections: Hero, Expertise, About, Projects, Contact
│   ├── Section.tsx          # Shared section layout wrapper (id, background, padding)
│   ├── Layout.tsx           # Nav/footer chrome for non-landing pages
│   ├── CurrentProjectCard.tsx
│   ├── LegacyProjectsCard.tsx
│   └── StatusBadge.tsx
├── pages/
│   ├── LandingPage.tsx
│   ├── ProjectDetailPage.tsx / ProjectDetailRoute.tsx
│   ├── LegacyProjectsPage.tsx
│   └── NotFoundPage.tsx
├── config.ts                 # Site content: nav links, current & legacy project data
├── types/                    # Shared TypeScript types
└── index.css                 # Tailwind v4 entry point + shared @layer components classes
```

## Routes

| Path | Renders |
|---|---|
| `/` | Landing page (Hero, Expertise, About, Projects, Contact) |
| `/projects/:slug` | Detail page for a current project |
| `/projects/legacy` | Compiled list of legacy (school/internship-era) projects |
| `*` | 404 |

## Content Model

Projects are split into two categories in `src/config.ts`:

- **`CURRENT_PROJECTS`** — actively maintained projects, each with a `status` of `"live"` or `"in-development"`, a tech stack, and its own detail page at `/projects/:slug`.
- **`PROJECTS`** — older school/internship-era projects, compiled into a single card on the landing page linking to `/projects/legacy` rather than shown individually.

## Deployment

Deployed on Vercel. `vercel.json` includes an SPA rewrite (`/(.*) → /index.html`) so client-side routes resolve correctly on refresh/direct navigation.
