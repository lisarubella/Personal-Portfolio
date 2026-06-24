import { Header } from '@/components/header';
import { ProjectsSection } from '@/components/sections/projects-section';
import { Footer } from '@/components/sections/footer';
import Aurora from '@/components/Aurora';

export const metadata = {
  title: 'Projects - Mona',
  description: 'View Mona\'s portfolio of web development and design projects.',
};

export default function ProjectsPage() {
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
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}
