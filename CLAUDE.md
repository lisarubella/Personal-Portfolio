# Claude Project Guide - Mona's Portfolio

## Project Overview
Next.js 14 portfolio website for Mona (Agentic AI Developer & Web Designer).
- **Framework**: Next.js 14 + TypeScript + Tailwind CSS
- **Status**: Production-ready, deployed to Vercel
- **Key Features**: Dark mode with View Transition API, glassmorphism UI, responsive design

## Tech Stack
- **Runtime**: Node.js 18+
- **Build**: Next.js 14.2.3 with App Router
- **Styling**: Tailwind CSS 3.4.3 + PostCSS
- **Type Safety**: TypeScript 5.4.5
- **UI**: shadcn/ui patterns, lucide-react icons
- **Theme**: next-themes with View Transition API
- **Animations**: GSAP, CSS transitions

## Project Structure
```
app/                    # Next.js App Router
├── layout.tsx         # Root layout, metadata
├── page.tsx           # Homepage
└── globals.css        # Global styles & Tailwind layers

components/
├── header.tsx         # Navigation + theme toggle
├── theme-provider.tsx # next-themes config
└── sections/          # Hero, expertise, projects, contact, footer
```

## Key Commands
```bash
npm run dev            # Local dev (http://localhost:3000)
npm run build          # Production build
npm run type-check     # TypeScript validation
npm run lint           # ESLint checks
vercel                 # Deploy to Vercel
```

## Content Customization
- **Email**: `components/sections/contact-section.tsx` (line 20) + `footer.tsx` (line 20)
- **Social Links**: `components/sections/footer.tsx` (lines 24-34)
- **Projects**: `components/sections/projects-section.tsx` (lines 9-50)
- **Expertise Tags**: `components/sections/expertise-section.tsx` (lines 7-12)
- **Brand Colors**: `tailwind.config.ts` (lines 13-18) — primary pink #ff6b9d

## Code Patterns
- Use TypeScript strict mode everywhere
- Match glassmorphism styling: `backdrop-blur-10` + `bg-white/10`
- Animations: fade-in on scroll, hover transforms with 0.3s transitions
- Mobile-first responsive design with Tailwind breakpoints

## Before You Deploy
- Run `npm run build && npm run type-check` — verify zero errors
- Test locally: `npm run dev`
- Check Vercel deployment: `vercel --prod`

## See Also
- Full setup: `docs/getting-started/SETUP_GUIDE.md`
- Deployment: `docs/guides/DEPLOYMENT.md`
- Project completion summary: `docs/project/PROJECT_SUMMARY.md`
