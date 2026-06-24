'use client';

import { useEffect, useState } from 'react';

export function AboutEditorialSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Database Design', 'APIs'] },
    { category: 'Design', items: ['UI/UX Design', 'Figma', 'Prototyping', 'Brand Strategy'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'DevTools', 'CI/CD'] },
  ];

  const values = [
    { title: 'User-Centered Design', description: 'Every pixel serves a purpose. I build with empathy.' },
    { title: 'Clean Code', description: 'Maintainable, scalable, and elegant solutions.' },
    { title: 'Continuous Learning', description: 'Staying ahead with emerging technologies and best practices.' },
    { title: 'Problem Solving', description: 'Turning complex challenges into intuitive experiences.' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* SECTION 1: About Hero */}
        <div className={`mb-32 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-jakarta leading-tight">
              About Me
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-pink to-transparent rounded-full" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              I'm a passionate developer and designer crafting digital experiences that blend strategy, aesthetics, and functionality.
            </p>
          </div>
        </div>

        {/* SECTION 2: Who I Am - Two Column Layout */}
        <div className={`mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-jakarta mb-4 leading-tight">
                  Who I Am
                </h2>
                <div className="w-12 h-0.5 bg-primary-pink rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm Mona, an agentic AI developer and web designer with a passion for creating beautiful, functional digital experiences. My journey started with a curiosity about how things work, and it evolved into a mission to build solutions that matter.
                </p>
                <p>
                  What drives me is the intersection of technology and human experience—crafting interfaces that feel intuitive, code that's maintainable, and designs that inspire. I believe the best digital products are those that solve real problems while delighting users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, experimenting with AI tools, or diving deep into whatever technology catches my curiosity.
                </p>
              </div>
            </div>

            {/* Right: Image Placeholder / Visual Element */}
            <div className="relative h-96 sm:h-full min-h-96">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {/* Portrait Image */}
                <img
                  src="https://i.pinimg.com/1200x/cd/b4/39/cdb439d8bd8e4c35ef99acc1e1f3375a.jpg"
                  alt="Mona's Portrait"
                  className="w-full h-full object-cover rounded-2xl border border-gray-200 dark:border-gray-700/30"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/40 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-32 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

        {/* SECTION 3: Values & Approach - Cards Grid */}
        <div className={`mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-jakarta mb-4 leading-tight">
              My Approach
            </h2>
            <div className="w-12 h-0.5 bg-primary-pink rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700/50 hover:border-primary-pink/50 transition-all duration-300 hover:-translate-y-1"
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-32 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

        {/* SECTION 4: Skills - Two Column with Cards */}
        <div className={`mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Skills Description */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-jakarta mb-4 leading-tight">
                  Skills & Expertise
                </h2>
                <div className="w-12 h-0.5 bg-primary-pink rounded-full" />
              </div>

              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I specialize in building modern web applications with a focus on user experience and performance. My toolkit spans the full stack, from elegant frontends to robust backends.
                </p>
                <p>
                  Whether it's crafting pixel-perfect interfaces, optimizing performance, or architecting scalable systems, I bring a detail-oriented approach to every project.
                </p>
              </div>
            </div>

            {/* Right: Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-5 bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700/30 hover:border-primary-pink/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ transitionDelay: `${0.4 + index * 0.08}s` }}
                >
                  <h3 className="text-sm font-semibold text-primary-pink mb-3 uppercase tracking-wider">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-pink rounded-full mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-32 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

        {/* SECTION 5: CTA */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
          <div className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white font-jakarta leading-tight">
              Let's Create Something<br />
              <span className="text-primary-pink">Amazing Together</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="/#contact"
              className="inline-block btn-primary mt-6"
            >
              Get In Touch
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
