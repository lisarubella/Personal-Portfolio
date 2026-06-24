'use client';

export function ProcessSection() {
  const processes = [
    {
      number: '01',
      title: 'Discover & Research',
      description:
        'Carefully reviewing your ideas and conducting thorough research to create a web design that best matches your vision.',
    },
    {
      number: '02',
      title: 'Design & Implementation',
      description:
        'Creating your website to deliver the best possible results with attention to every detail and interaction.',
    },
    {
      number: '03',
      title: 'Deliver & Outcome',
      description:
        'Delivering the best possible outcomes for your business and ensuring your success in the digital space.',
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white font-jakarta">
          Here's how it works
        </h2>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {processes.map((process, index) => (
            <div key={index} className="process-card fade-in-up animate-float hover:scale-105 transition-transform duration-500" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="glass rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-bold text-gradient mb-4 group-hover:scale-110 transition-transform">
                  {process.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-jakarta">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
