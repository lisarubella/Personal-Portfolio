'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGetInTouch = () => {
    router.push('/contact');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-20">
      <div className="max-w-4xl mx-auto w-full">
        {/* Availability Badge */}
        <div className={`flex items-center justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="glass rounded-full px-4 py-2 flex items-center gap-2 hover:scale-110 transition-transform duration-300 float-animation">
            <div className="pulse-indicator" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for new opportunities
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-center mb-6 leading-tight font-jakarta text-gray-900 dark:text-white transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          Hi I'm{' '}
          <span className="text-primary-pink">Mona</span>
          {' / '}
          <span className="italic">Agentic AI Developer</span>
        </h1>

        {/* Bio Text */}
        <p
          className={`text-lg sm:text-xl text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.2s', lineHeight: '1.6' }}
        >
          Passionate web development enthusiast and lifelong learner, dedicated to
          building responsive, user-focused digital experiences while continuously
          exploring new technologies.
        </p>

        {/* CTA Button */}
        <div
          className={`flex justify-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          <button onClick={handleGetInTouch} className="btn-primary">
            Get in Touch
            <span className="arrow-icon">→</span>
          </button>
        </div>

        {/* Social Proof */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="glass rounded-lg px-6 py-4 inline-block hover:scale-105 transition-transform duration-300 animate-float">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Driven by continuous learning, building 100% user-focused digital web concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
