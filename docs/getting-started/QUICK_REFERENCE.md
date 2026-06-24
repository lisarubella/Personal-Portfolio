# Mona's Portfolio - Quick Reference

## One-Liner Commands

```bash
# Development
npm run dev                    # Start dev server (http://localhost:3000)

# Testing
npm run type-check            # Check TypeScript types
npm run lint                  # Run ESLint
npm run build                 # Build for production
npm start                     # Start production server

# Deployment
vercel                        # Deploy to Vercel (after `npm i -g vercel`)
```

## File Locations

**Update Email**: 
- `components/sections/contact-section.tsx` (line ~20)
- `components/sections/footer.tsx` (line ~20)

**Update Social Links**: 
- `components/sections/footer.tsx` (lines ~24-34)

**Update Projects**: 
- `components/sections/projects-section.tsx` (lines ~9-50)

**Update Expertise**: 
- `components/sections/expertise-section.tsx` (lines ~7-12)

**Update Process**: 
- `components/sections/process-section.tsx` (lines ~7-27)

**Update Colors**: 
- `tailwind.config.ts` (lines ~13-18)

## Component Structure

```
Hero Section
├── Availability Badge (pulse animation)
├── Main Headline
├── Bio Description
├── CTA Button
└── Social Proof Card

Expertise Section
├── Philosophy Headline
└── Tag Bubbles (3 skills with icons)

Process Section
└── Process Cards (3 steps with numbers)

Projects Section
└── Project Grid (4 projects with links)

Contact Section
├── Call-to-Action Headline
├── Description
└── Email Button

Footer
├── Copyright
└── Social Links
```

## Key CSS Classes

**Glassmorphism**:
- `.glass` - White frosted glass effect
- `.glass-dark` - Dark frosted glass effect

**Buttons**:
- `.btn-primary` - Main CTA button with gradient

**Cards**:
- `.card-hover` - Project card hover effect
- `.process-card` - Process workflow card

**Animations**:
- `.fade-in-up` - Fade in from bottom
- `.pulse-indicator` - Pulsing dot animation
- `.tag-bubble` - Hover shimmer effect

**Text**:
- `.text-gradient` - Pink gradient text
- `.font-jakarta` - Plus Jakarta Sans heading font
- `.font-inter` - Inter body font

## Tailwind Color System

```tsx
// Primary Colors
bg-primary-pink              // #ff6b9d (brand color)
bg-primary-light-pink        // #ffe4e9 (light background)
bg-primary-lighter-pink      // #fff5f7 (lighter background)

// Status Colors
text-gray-900                // Dark text
text-gray-600                // Medium text
text-gray-400                // Light text
```

## Environment Setup

### First Time Setup
```bash
cd "F:\personal portfolio"
npm install
npm run dev
```

### Check Everything Works
```bash
npm run type-check
npm run lint
npm run build
```

## Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

Mobile menu appears on screens < 768px (md: breakpoint)

## Performance Tips

1. **Images**: Use Next.js Image component
2. **Fonts**: Already optimized with display=swap
3. **Code**: Use dynamic imports for heavy components
4. **SEO**: Metadata configured in layout.tsx

## Common Edits Checklist

- [ ] Update email: `mona@example.com` → your email
- [ ] Update LinkedIn: Add your profile URL
- [ ] Update GitHub: Add your profile URL
- [ ] Review project descriptions
- [ ] Update expertise areas if needed
- [ ] Verify all project links work
- [ ] Test on mobile (iPhone, Android)
- [ ] Test dark mode toggle
- [ ] Check all navigation links scroll

## Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] No ESLint warnings (`npm run lint`)
- [ ] Tested locally (`npm start`)
- [ ] All links verified
- [ ] Email configured
- [ ] Social links updated
- [ ] Vercel account created
- [ ] Project name decided
- [ ] Domain configured (optional)

## Useful Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Docs](https://react.dev)

## Troubleshooting Quick Fixes

| Issue | Fix |
|-------|-----|
| Dev server won't start | `rm -rf .next && npm run dev` |
| Styles not updating | Restart dev server, check Tailwind config |
| Build fails | Run `npm run type-check` to see errors |
| Port 3000 in use | `npx kill-port 3000` (Windows: use Task Manager) |
| Theme not switching | Check localStorage enabled, no console errors |
| Components not rendering | Check `'use client'` directive at top of file |

## Git Commands

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/username/repo
git push -u origin main

# Later updates
git add .
git commit -m "Update portfolio content"
git push
```

---

**Status**: ✅ Production Ready
**Framework**: Next.js 14 + TypeScript + Tailwind CSS
**Deployment**: Ready for Vercel
**Last Updated**: June 22, 2026
