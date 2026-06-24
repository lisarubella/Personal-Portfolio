import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { ExpertiseSection } from '@/components/sections/expertise-section';
import { ProcessSection } from '@/components/sections/process-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';
import Aurora from '@/components/Aurora';

export default function Home() {
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
        <HeroSection />
        <ExpertiseSection />
        <ProcessSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
