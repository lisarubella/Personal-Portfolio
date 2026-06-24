import { Header } from '@/components/header';
import { AboutEditorialSection } from '@/components/sections/about-editorial-section';
import { Footer } from '@/components/sections/footer';
import Aurora from '@/components/Aurora';

export const metadata = {
  title: 'About - Mona',
  description: 'Learn more about Mona and her expertise in web development and design.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={['#c94184', '#a78bfa', '#6366f1']}
          blend={0.6}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <AboutEditorialSection />
        <Footer />
      </div>
    </main>
  );
}
