import { Header } from '@/components/header';
import { ProcessSection } from '@/components/sections/process-section';
import { Footer } from '@/components/sections/footer';
import Aurora from '@/components/Aurora';

export const metadata = {
  title: 'Services - Mona',
  description: 'Discover the services and process behind Mona\'s web development work.',
};

export default function ServicesPage() {
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
        <ProcessSection />
        <Footer />
      </div>
    </main>
  );
}
