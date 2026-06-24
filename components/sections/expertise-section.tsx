'use client';

import CardSwap, { Card } from '@/components/CardSwap';
import BorderGlow from '@/components/BorderGlow';

export function ExpertiseSection() {
  const expertise = [
    { icon: '🎨', label: 'Graphic Designing' },
    { icon: '💻', label: 'Website Development' },
    { icon: '✨', label: 'Motion Design' },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/30 dark:via-gray-900/30 via-30% to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Section Headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-jakarta leading-tight">
              Focus is on blending clear strategy, thoughtful design, and user empathy to
              craft experiences that solve real problems
            </h2>
          </div>

          {/* Right: CardSwap Animation */}
          <div className="relative h-96 md:h-full flex justify-center lg:justify-end">
            <CardSwap
              width={380}
              height={280}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {expertise.map((item, index) => (
                <Card key={index} className="expertise-card">
                  <BorderGlow
                    borderRadius={16}
                    glowColor="280 100 50"
                    backgroundColor="transparent"
                    colors={['#c084fc', '#f472b6', '#60a5fa']}
                    glowIntensity={1.0}
                    edgeSensitivity={30}
                  >
                    <div className="w-full h-full flex flex-col items-center justify-center p-6">
                      <span className="text-2xl font-cravelo text-gray-900 dark:text-white text-center">
                        {item.label}
                      </span>
                    </div>
                  </BorderGlow>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
