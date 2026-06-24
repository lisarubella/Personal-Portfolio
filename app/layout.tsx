import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mona - Agentic AI Developer & Web Designer',
  description:
    'Passionate web development enthusiast and lifelong learner, dedicated to building responsive, user-focused digital experiences.',
  keywords: [
    'web developer',
    'web designer',
    'AI developer',
    'freelance',
    'portfolio',
    'responsive design',
  ],
  authors: [{ name: 'Mona' }],
  creator: 'Mona',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mona-portfolio.vercel.app',
    title: 'Mona - Agentic AI Developer & Web Designer',
    description:
      'Passionate web development enthusiast and lifelong learner, dedicated to building responsive, user-focused digital experiences.',
    siteName: 'Mona Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mona - Agentic AI Developer & Web Designer',
    description:
      'Passionate web development enthusiast and lifelong learner, dedicated to building responsive, user-focused digital experiences.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ff6b9d" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-inter bg-gradient-to-br from-white via-primary-light-pink to-primary-lighter-pink min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="mona-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
