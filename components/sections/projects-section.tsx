'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  url: string;
  gradient: string;
  icon: string;
  tags: Array<{ label: string; color: string }>;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: 'Clothing Brand',
      description:
        'A modern e-commerce platform showcasing premium clothing collections with seamless shopping experience.',
      url: 'https://monefirstwebsite.vercel.app',
      gradient: 'from-pink-200 to-purple-200',
      icon: '🛍️',
      tags: [
        { label: 'E-Commerce', color: 'bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300' },
        { label: 'Frontend', color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' },
      ],
    },
    {
      title: 'Birthday Wish Web',
      description:
        'A creative and interactive celebration platform with animations and personalized birthday messages.',
      url: 'https://happy-birthday-opal-eight.vercel.app',
      gradient: 'from-yellow-200 to-orange-200',
      icon: '🎉',
      tags: [
        { label: 'Creative Web', color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' },
        { label: 'Interactive', color: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' },
      ],
    },
    {
      title: 'Game Landing Page',
      description:
        'An engaging gaming experience landing page with dynamic visuals and immersive user interface design.',
      url: 'https://proximity-ten.vercel.app/',
      gradient: 'from-blue-200 to-cyan-200',
      icon: '⚡',
      tags: [
        { label: 'UI Design', color: 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300' },
        { label: 'Web App', color: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300' },
      ],
    },
    {
      title: 'Music Player',
      description:
        'A fully functional audio player application with playlist management and intuitive playback controls.',
      url: 'https://music-player-lac-iota.vercel.app',
      gradient: 'from-green-200 to-teal-200',
      icon: '🎵',
      tags: [
        { label: 'Audio UI', color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300' },
        { label: 'JavaScript App', color: 'bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300' },
      ],
    },
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white font-jakarta">
          Selected Works
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover fade-in-up animate-float"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-card glass rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:scale-105 transition-all duration-500 dark:hover:shadow-gray-900/50">
                {/* Project Image Placeholder */}
                <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center relative overflow-hidden group`}>
                  <span className="text-6xl opacity-40 group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white font-jakarta">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${tag.color}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
