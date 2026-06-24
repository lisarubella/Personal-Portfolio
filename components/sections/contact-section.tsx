'use client';

import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 dark:text-white font-jakarta fade-in-up">
          Let's Create Something Amazing
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 fade-in-up" style={{ animationDelay: '0.1s' }}>
          Ready to bring your ideas to life? Get in touch and let's discuss your next
          project.
        </p>
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
