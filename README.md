# Mona's Portfolio - Next.js Project

Production-ready Next.js 14 portfolio website for Mona, an Agentic AI Developer & Web Designer.

## Features

- **Modern Stack**: Next.js 14 + TypeScript + Tailwind CSS + shadcn/ui
- **Theme Toggle**: View Transition API with mask animation for smooth dark/light mode switching
- **Responsive Design**: Mobile-first approach with full mobile menu
- **Glassmorphism**: Beautiful frosted glass UI effects with backdrop blur
- **Smooth Animations**: Fade-in effects and hover interactions
- **SEO Optimized**: Metadata, structured data, and performance optimizations
- **Production Ready**: Security headers, image optimization, accessibility features

## Project Structure

```
F:\personal portfolio\
├── app/
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page component
│   ├── globals.css          # Global styles and Tailwind layers
├── components/
│   ├── header.tsx           # Navigation header with mobile menu
│   ├── theme-provider.tsx   # Next-themes configuration
│   ├── ui/
│   │   └── mask-view-transition-theme-toggle.tsx
│   └── sections/
│       ├── hero-section.tsx
│       ├── expertise-section.tsx
│       ├── process-section.tsx
│       ├── projects-section.tsx
│       ├── contact-section.tsx
│       └── footer.tsx
├── public/
│   └── manifest.json        # PWA manifest
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .eslintrc.json
└── .gitignore
```

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Configuration

### Environment Variables

Create a `.env.local` file if needed:

```env
# Example for future backend integration
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Customization

#### Update Contact Information
Edit `components/sections/contact-section.tsx` and `components/sections/footer.tsx`:
```tsx
href="mailto:your-email@example.com"
```

#### Update Social Links
Edit `components/sections/footer.tsx`:
```tsx
href="https://linkedin.com/in/yourprofile"
href="https://github.com/yourprofile"
```

#### Modify Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: {
    pink: '#ff6b9d',  // Main brand color
    'light-pink': '#ffe4e9',
    'lighter-pink': '#fff5f7',
  },
}
```

#### Update Projects
Edit `components/sections/projects-section.tsx` - modify the `projects` array with your projects.

## Key Components

### Header with Theme Toggle
- Sticky navigation bar with glassmorphism effect
- Mobile hamburger menu with smooth animations
- Integrated theme toggle with View Transition API
- Smooth scroll navigation

### Hero Section
- Animated availability badge with pulse effect
- Main headline with gradient text
- Bio description
- Call-to-action button
- Social proof card

### Expertise Section
- Tag bubbles with hover animations
- Philosophy statement
- Icon-based expertise areas

### Process Section
- 3-step workflow visualization
- Process cards with numbering
- Connecting flow lines
- Glassmorphism cards

### Projects Portfolio
- 4 featured projects grid
- Project cards with gradient backgrounds
- Tag badges for categorization
- External links to live projects
- Hover zoom animations

### Contact Section
- Call-to-action headline
- Email link
- Clean, minimalist design

### Footer
- Copyright information
- Social links (Email, LinkedIn, GitHub)
- Glassmorphism styling

## Styling & Design System

### Color Palette
- **Primary Pink**: #ff6b9d
- **Light Pink**: #ffe4e9
- **Lighter Pink**: #fff5f7
- **Dark Gray**: #1a1a1a
- **Medium Gray**: #666666
- **Light Gray**: #f0f0f0

### Typography
- **Heading Font**: Plus Jakarta Sans (font-jakarta)
- **Body Font**: Inter (font-inter)
- **Font Weights**: 300, 400, 500, 600, 700, 800

### Effects
- **Glassmorphism**: `backdrop-blur-10px` with white/transparent backgrounds
- **Animations**: Fade-in, pulse glow, hover transforms
- **Transitions**: Smooth 0.3-0.5s cubic-bezier easing

## Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Google Fonts with `display=swap` for fast rendering
- **Code Splitting**: Automatic with Next.js
- **Minification**: Enabled in production builds
- **Security Headers**: Configured in next.config.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Mobile-friendly touch targets

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to Other Platforms

The project is compatible with:
- Netlify
- AWS Amplify
- GitHub Pages (with configuration)
- Any Node.js hosting

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Style

- ESLint configured for Next.js best practices
- TypeScript strict mode enabled
- Prettier recommendations via ESLint

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Library**: Lucide React (icons)
- **Theme Management**: next-themes
- **Animations**: CSS Keyframes & Transitions

## Future Enhancements

- Blog section with MDX support
- Newsletter subscription
- Analytics integration (Google Analytics, Vercel Analytics)
- Contact form with email service (SendGrid, Resend)
- Dark mode optimizations
- Additional portfolio projects
- Performance monitoring

## License

All rights reserved. © 2026 Mona.

## Support

For questions or issues, contact: mona@example.com

---

**Last Updated**: June 2026
