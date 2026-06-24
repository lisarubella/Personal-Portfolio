'use client';

import CardSwap, { Card } from '@/components/CardSwap';

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
          <div className="relative h-96 md:h-80 flex justify-center lg:justify-end">
            <CardSwap
              width={300}
              height={200}
              cardDistance={50}
              verticalDistance={60}
              delay={4000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
            >
              {expertise.map((item, index) => (
                <Card key={index} className="expertise-card">
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-pink-400/20 to-purple-400/20 dark:from-pink-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-white/20 dark:border-white/10">
                    <span className="text-2xl font-cravelo text-gray-900 dark:text-white text-center">
                      {item.label}
                    </span>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}
