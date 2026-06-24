# Mona's Portfolio - Setup & Deployment Guide

**Project**: Mona's Professional Portfolio
**Framework**: Next.js 14 + TypeScript + Tailwind CSS
**Status**: Production Ready
**Last Updated**: June 22, 2026

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Development](#development)
5. [Building & Testing](#building--testing)
6. [Deployment](#deployment)
7. [Configuration & Customization](#configuration--customization)
8. [Troubleshooting](#troubleshooting)

---

## Project Overview

This is a production-ready Next.js portfolio website for Mona showcasing:

- **Agentic AI Developer & Web Designer** professional brand
- **4 Featured Projects** with live links
- **Expertise Areas**: Graphic Design, Web Development, Motion Design
- **3-Step Process Workflow** visualization
- **Theme Toggle** with View Transition API for smooth dark/light mode switching
- **Baby Pink Glassmorphism** aesthetic with modern animations
- **Fully Responsive** mobile-first design
- **SEO Optimized** with proper metadata and structured data
- **Accessibility Compliant** WCAG 2.1 AA standards

### Key Features

✓ Next.js 14 with App Router
✓ TypeScript for type safety
✓ Tailwind CSS for styling
✓ Dark mode support with next-themes
✓ Responsive mobile menu
✓ Smooth animations and transitions
✓ Optimized performance
✓ Security headers configured
✓ View Transition API integration
✓ Production-ready deployment

---

## Prerequisites

Before starting, ensure you have:

- **Node.js** 18.17 or later (check with `node --version`)
- **npm** 9+ or **yarn** 3.6+ or **pnpm** 8+ (check with `npm --version`)
- **Git** for version control
- A code editor (VS Code recommended)
- Vercel account (for deployment) - https://vercel.com

### Verify Installation

```bash
node --version    # Should be v18.17.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Should be installed
```

---

## Local Setup

### Step 1: Clone or Set Up the Project

If you have the files already:

```bash
cd "F:\personal portfolio"
```

If starting from scratch:

```bash
npx create-next-app@latest mona-portfolio --typescript --tailwind --eslint
cd mona-portfolio
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`:
- next@14.2.3
- react@18.3.1
- tailwindcss@3.4.3
- typescript@5.4.5
- next-themes@0.2.1
- lucide-react@0.408.0
- And other development dependencies

### Step 3: Verify Installation

```bash
npm run type-check
```

This should complete without errors, confirming TypeScript compilation works.

---

## Development

### Start Development Server

```bash
npm run dev
```

This will:
- Start the Next.js dev server on http://localhost:3000
- Enable hot module reloading (HMR)
- Show compilation errors in terminal and browser
- Watch for file changes

### Open in Browser

Navigate to: **http://localhost:3000**

You should see:
- Sticky navigation header with theme toggle
- Hero section with "Hi I'm Mona" headline
- Availability badge with pulse animation
- Expertise tag bubbles
- Process workflow cards
- Projects portfolio grid
- Contact section
- Footer

### Development Workflow

1. **Edit Components**: Changes in `/components` and `/app` auto-refresh
2. **Edit Styles**: Tailwind CSS changes apply instantly
3. **Check Console**: Browser DevTools shows any runtime errors
4. **Terminal Output**: Shows build/compilation status

### Create New Components

Example: To add a testimonials section:

```tsx
// components/sections/testimonials-section.tsx
'use client';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 font-jakarta">
          What People Say
        </h2>
        {/* Content here */}
      </div>
    </section>
  );
}
```

Then import in `app/page.tsx`:

```tsx
import { TestimonialsSection } from '@/components/sections/testimonials-section';

export default function Home() {
  return (
    <main>
      {/* ... existing sections ... */}
      <TestimonialsSection />
      {/* ... */}
    </main>
  );
}
```

---

## Building & Testing

### Run Type Checking

```bash
npm run type-check
```

Validates TypeScript without emitting files. Catches type errors before deployment.

### Run ESLint

```bash
npm run lint
```

Checks code quality and style consistency.

### Build for Production

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize React components
- Generate static files
- Report any build errors
- Output to `.next` directory (ignored in git)

**Expected Output**:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Creating an optimized production build
✓ Collecting page data
✓ Finalizing page optimization
Route (app)                                Size     First Load JS
┌ ○ /                                      142 B          82.4 kB
└ ○ /_not-found                            882 B          83.1 kB
```

### Test Production Build Locally

```bash
npm run build
npm start
```

Open http://localhost:3000 to verify production build works correctly.

---

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the optimal platform for Next.js applications.

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI (one time)
npm i -g vercel

# Deploy from project directory
cd "F:\personal portfolio"
vercel
```

Follow prompts to:
- Link to Vercel account
- Confirm project settings
- Deploy

#### Option B: GitHub + Vercel Dashboard

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git remote add origin https://github.com/yourusername/mona-portfolio
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click "Add New..." → "Project"
   - Select GitHub repository
   - Click "Import"
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to `main` branch triggers automatic deployment
   - Get a unique preview URL for each branch

#### Option C: Deploy to Other Platforms

**Netlify**:
```bash
npm run build
# Upload `out` folder to Netlify
```

**AWS Amplify**:
- Connect GitHub repository
- Select Next.js framework
- Amplify auto-configures build settings

**Docker/Self-Hosted**:
```bash
npm run build
npm start  # Runs on port 3000
```

### Environment Variables for Deployment

Create `.env.local` for local development (never commit):

```env
# Example - not needed for current setup
NEXT_PUBLIC_API_URL=https://api.example.com
CONTACT_EMAIL=mona@example.com
```

For Vercel:
1. Dashboard → Project Settings → Environment Variables
2. Add variables
3. Redeploy

### Post-Deployment Checks

After deploying, verify:

- [ ] Home page loads without errors
- [ ] Navigation links scroll smoothly
- [ ] Theme toggle switches dark/light mode
- [ ] Mobile menu works on small screens
- [ ] Project links open correctly
- [ ] Email link works (`mailto:`)
- [ ] No console errors in DevTools
- [ ] Page loads in <3 seconds
- [ ] SEO metadata displays in page source

---

## Configuration & Customization

### Update Contact Information

**Email in Contact Section**:
```tsx
// components/sections/contact-section.tsx
<a href="mailto:your-email@example.com">
```

**Email in Footer**:
```tsx
// components/sections/footer.tsx
<a href="mailto:your-email@example.com">
```

### Add Social Links

Update footer links:
```tsx
// components/sections/footer.tsx
<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
  GitHub
</a>
```

### Customize Colors

Edit `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: {
        pink: '#ff6b9d',           // Main brand color
        'light-pink': '#ffe4e9',   // Light background
        'lighter-pink': '#fff5f7', // Lighter background
      },
    },
  },
}
```

Then use in components:
```tsx
<div className="bg-primary-pink text-white">
  Primary Pink
</div>
```

### Update Projects

Edit `components/sections/projects-section.tsx`:

```tsx
const projects: Project[] = [
  {
    title: 'New Project',
    description: 'Project description here',
    url: 'https://project-url.vercel.app',
    gradient: 'from-blue-200 to-purple-200',
    icon: '🎨',
    tags: [
      { label: 'Category', color: 'bg-blue-100 text-blue-700' },
    ],
  },
  // Add more projects...
];
```

### Modify Expertise Areas

Edit `components/sections/expertise-section.tsx`:

```tsx
const expertise = [
  { icon: '🎨', label: 'Graphic Designing' },
  { icon: '💻', label: 'Website Development' },
  { icon: '✨', label: 'Motion Design' },
  { icon: '🚀', label: 'New Skill' }, // Add here
];
```

### Update Process Steps

Edit `components/sections/process-section.tsx`:

```tsx
const processes = [
  {
    number: '01',
    title: 'Step Title',
    description: 'Step description...',
  },
  // Modify or add steps...
];
```

### Change Typography

Edit `app/layout.tsx` to swap Google Fonts:

```tsx
import { Poppins, Roboto } from 'next/font/google';

const poppins = Poppins({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});
```

---

## Troubleshooting

### Common Issues & Solutions

#### "npm: command not found"
- **Cause**: Node.js/npm not installed
- **Solution**: Download from https://nodejs.org (LTS version)

#### Port 3000 Already in Use
```bash
# Kill process on port 3000
# Windows (PowerShell):
Get-Process -Name node | Stop-Process -Force

# Then try again:
npm run dev
```

#### Build Fails with TypeScript Errors
```bash
npm run type-check
```
Review errors and fix them in source files.

#### Changes Not Reflecting
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

#### CSS Not Applying
- Check class names match `tailwind.config.ts`
- Verify Tailwind content paths include your files
- Restart dev server after config changes

#### Theme Toggle Not Working
- Ensure `ThemeProvider` wraps the app in `layout.tsx`
- Check browser allows localStorage (not private mode)
- Check console for errors with `next-themes`

#### Vercel Deployment Fails
```bash
# Test build locally first
npm run build
npm start
```

Then check:
- All env variables are set
- No hardcoded absolute paths
- Dependencies are in `package.json`
- No build warnings that became errors

#### Images Not Loading
- Check `public/` folder has images
- Verify image paths are correct
- Use Next.js `Image` component for optimization

### Performance Issues

**Slow Page Load**:
```bash
npm run build
# Check output for large chunks
# Optimize heavy components or break into dynamic imports
```

**High Memory Usage During Dev**:
- Restart dev server: `npm run dev`
- Close other applications
- Clear `.next` folder

### Browser Console Errors

**Hydration Mismatch**:
- Cause: Server/client HTML mismatch
- Solution: Check for `useEffect` initialization of UI state

**Theme Flash**:
- Cause: Theme loads after page renders
- Solution: Already configured with `suppressHydrationWarning`

---

## File Reference

### Core Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS customization |
| `next.config.js` | Next.js app configuration |
| `postcss.config.js` | PostCSS plugins |

### Source Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, metadata |
| `app/page.tsx` | Home page composition |
| `app/globals.css` | Global styles and Tailwind layers |
| `components/header.tsx` | Navigation and mobile menu |
| `components/theme-provider.tsx` | Theme context setup |
| `components/ui/mask-view-transition-theme-toggle.tsx` | Theme toggle button |
| `components/sections/*.tsx` | Page sections |

---

## Next Steps

1. **Customize Content**:
   - Update email addresses
   - Modify project links
   - Update social profiles
   - Change colors if desired

2. **Add Content**:
   - Add project descriptions
   - Update expertise areas
   - Customize process steps

3. **Set Up Analytics** (Optional):
   - Add Google Analytics
   - Set up Vercel Analytics

4. **Add Features** (Optional):
   - Newsletter subscription form
   - Blog with MDX
   - Contact form with email service
   - Image gallery

5. **Deploy**:
   - Push to GitHub
   - Connect to Vercel
   - Monitor performance

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vercel Deployment**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs
- **React Documentation**: https://react.dev

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-06-22 | Initial production release |

---

**Ready to launch!** Follow the deployment section to get your portfolio live. 🚀
