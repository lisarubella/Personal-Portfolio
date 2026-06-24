# Getting Started - Mona's Portfolio

Welcome! This is your complete Next.js portfolio. Follow these steps to get started.

## ⚡ Quick Start (5 minutes)

```bash
# 1. Navigate to project
cd "F:\personal portfolio"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

That's it! Your portfolio is now running locally.

## 📋 Checklist Before Deployment

### Content Updates
- [ ] Update email: `mona@example.com` → your email
  - File: `components/sections/contact-section.tsx` (line 20)
  - File: `components/sections/footer.tsx` (line 20)

- [ ] Update social links
  - File: `components/sections/footer.tsx` (lines 24-34)
  - Add LinkedIn URL
  - Add GitHub URL

- [ ] Verify projects
  - File: `components/sections/projects-section.tsx`
  - All 4 project links correct ✓
  - Descriptions accurate

- [ ] Check expertise areas
  - File: `components/sections/expertise-section.tsx`
  - Graphic Designing ✓
  - Website Development ✓
  - Motion Design ✓

### Pre-Deployment Tests
```bash
# 1. Type check
npm run type-check
# Should complete with no errors

# 2. Lint check
npm run lint
# Should complete with no warnings

# 3. Build test
npm run build
# Should complete successfully

# 4. Production test
npm start
# Visit http://localhost:3000
# Test all features
# Ctrl+C to stop
```

### Manual Testing
- [ ] Desktop view (1920x1080) - All sections visible
- [ ] Tablet view (768x1024) - Mobile menu appears
- [ ] Mobile view (375x667) - Content readable
- [ ] Theme toggle - Dark mode works
- [ ] Navigation - All links scroll smoothly
- [ ] Projects - All links open in new tabs
- [ ] Email - Link works (opens mail client)

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI (Easiest)

```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy from project directory
cd "F:\personal portfolio"
vercel

# Follow prompts:
# ✓ Link to existing project? No
# ✓ Project name: mona-portfolio
# ✓ Framework: Next.js
# ✓ Deploy

# Your site will be live in 2-3 minutes!
```

### Option 2: GitHub + Vercel Dashboard

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/yourusername/mona-portfolio
git push -u origin main

# 2. Go to https://vercel.com/dashboard
# 3. Click "Add New..." → "Project"
# 4. Select GitHub repo
# 5. Click "Deploy"
# 6. Done! Auto-deploys on every push
```

## 📁 Project Structure

```
Your portfolio is organized as:

app/
├── layout.tsx          ← Root page setup
├── page.tsx            ← Main page composition
└── globals.css         ← Global styles

components/
├── header.tsx          ← Navigation header
├── theme-provider.tsx  ← Dark mode setup
└── sections/
    ├── hero-section.tsx
    ├── expertise-section.tsx
    ├── process-section.tsx
    ├── projects-section.tsx
    ├── contact-section.tsx
    └── footer.tsx

Configuration files:
├── package.json        ← Dependencies
├── tsconfig.json       ← TypeScript settings
├── tailwind.config.ts  ← Styling config
├── next.config.js      ← App settings
```

## 🎨 Customizing Your Portfolio

### Change Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: {
    pink: '#ff6b9d',           // Main color
    'light-pink': '#ffe4e9',   // Light background
    'lighter-pink': '#fff5f7', // Lighter background
  },
}
```

### Update Expertise

Edit `components/sections/expertise-section.tsx`:

```tsx
const expertise = [
  { icon: '🎨', label: 'Graphic Designing' },
  { icon: '💻', label: 'Website Development' },
  { icon: '✨', label: 'Motion Design' },
  { icon: '🎯', label: 'Your New Skill' },  // Add here
];
```

### Add/Edit Projects

Edit `components/sections/projects-section.tsx`:

```tsx
{
  title: 'Project Name',
  description: 'Project description here',
  url: 'https://project-link.com',
  gradient: 'from-color-200 to-color-200',
  icon: '🎨',
  tags: [
    { label: 'Tag', color: 'bg-color-100 text-color-700' },
  ],
}
```

## 🔧 Common Commands

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm start                # Run production build
npm run type-check       # Check TypeScript
npm run lint             # Check code quality
npm run lint -- --fix    # Auto-fix linting issues
vercel                   # Deploy to Vercel
```

## 📚 Documentation Files

- **README.md** - Full project overview
- **SETUP_GUIDE.md** - Detailed setup instructions
- **QUICK_REFERENCE.md** - Command cheat sheet
- **DEPLOYMENT.md** - Deployment checklist
- **PROJECT_SUMMARY.md** - Project summary

## ⚙️ What's Installed

- **Next.js 14** - React framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first styling
- **next-themes** - Dark mode support
- **lucide-react** - Beautiful icons
- **ESLint** - Code quality
- **Prettier** - Code formatting

## ✅ Features Included

✓ Responsive mobile-first design
✓ Dark mode with theme toggle
✓ Glassmorphism UI effects
✓ Smooth animations
✓ SEO optimized
✓ Accessibility compliant
✓ Performance optimized
✓ Type-safe with TypeScript
✓ Easy to customize
✓ Production ready

## 🆘 Troubleshooting

**Dev server won't start?**
```bash
rm -rf .next
npm run dev
```

**Styles not updating?**
```bash
# Restart the dev server
# Ctrl+C then npm run dev
```

**Build fails?**
```bash
npm run type-check
# Review any TypeScript errors
```

**Port 3000 in use?**
```bash
# Windows PowerShell:
Get-Process -Name node | Stop-Process -Force
npm run dev
```

## 📞 Next Steps

1. **Customize**: Update email, links, colors
2. **Test**: Run `npm run build` then `npm start`
3. **Deploy**: Run `vercel` command
4. **Share**: Send your live portfolio URL!

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [React Documentation](https://react.dev)

---

**Status**: ✅ Ready to Deploy
**Framework**: Next.js 14 + TypeScript + Tailwind CSS
**Last Updated**: June 22, 2026

**Ready? Start with**: `npm install && npm run dev`
