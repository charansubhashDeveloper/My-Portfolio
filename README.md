# Charan Subhash — Premium Developer Portfolio

A futuristic, AI-themed developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- Dark/light mode with smooth transitions
- Glassmorphism UI with neon gradients & particle background
- Animated hero with typing effect
- Skills with animated progress bars
- Project showcase with filtering & expandable details
- GitHub API integration for dynamic repositories
- Contact form with validation & toast notifications
- Experience timeline, achievements, certifications
- Custom cursor, loading screen, SEO metadata
- Fully responsive (mobile → ultra-wide)
- Accessibility & reduced-motion support

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── api/github/      # GitHub repos API route
│   ├── api/contact/     # Contact form API route
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── layout/          # Navbar, Footer, Theme toggle
│   ├── sections/        # Page sections
│   ├── effects/         # Particles, cursor, aurora, loading
│   ├── shared/          # Reusable UI blocks
│   └── providers/
├── lib/data/            # Content (edit here!)
│   ├── personal.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   └── achievements.ts
├── hooks/
└── types/
public/
├── projects/            # Project banner images
└── resume.pdf           # Replace with your resume
```

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or pnpm

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
GITHUB_USERNAME=charansubhashDeveloper
GITHUB_TOKEN=                    # Optional — increases API rate limit
CONTACT_EMAIL=charansubhash1106@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_USERNAME=charansubhashDeveloper
```

### 3. Add your resume

Replace `public/resume.pdf` with your actual resume PDF.

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import your repository.
4. Framework preset: **Next.js** (auto-detected).
5. Add environment variables in **Settings → Environment Variables**:
   - `GITHUB_USERNAME`
   - `GITHUB_TOKEN` (optional)
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (your production URL, e.g. `https://yourname.vercel.app`)
   - `NEXT_PUBLIC_GITHUB_USERNAME`
6. Click **Deploy**.

Vercel will run `npm run build` automatically on each push to main.

## GitHub API Integration

The portfolio fetches your latest public repositories via `/api/github`.

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_USERNAME` | Yes | Your GitHub username |
| `GITHUB_TOKEN` | No | Personal access token for higher rate limits |

**Without `GITHUB_USERNAME`:** The repos section shows a setup message.

**With token:** Create a token at GitHub → Settings → Developer settings → Personal access tokens (public repo scope is enough).

## Customize Content

### Personal info
Edit `src/lib/data/personal.ts` — name, links, email, typing texts, socials.

### Projects
Edit `src/lib/data/projects.ts`. To add a new project:

```ts
{
  id: "my-new-project",
  title: "Project Name",
  description: "...",
  features: ["Feature 1", "Feature 2"],
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",  // optional
  category: "ai",          // ai | fullstack | web
  image: "/projects/my-project.svg",
}
```

Add a banner image to `public/projects/my-project.svg`.

### Skills, Experience, Education, Achievements
- `src/lib/data/skills.ts`
- `src/lib/data/experience.ts`
- `src/lib/data/education.ts`
- `src/lib/data/achievements.ts`

### Styling
Global styles: `src/app/globals.css`  
Theme colors use Tailwind cyan/violet gradients throughout components.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | Framework & SSR |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| shadcn/ui | UI components |
| Lucide React | Icons |
| next-themes | Dark/light mode |

## License

MIT — feel free to use and customize for your own portfolio.
