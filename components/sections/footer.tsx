'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 glass py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Mona. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="mailto:lisarubella2010@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300 text-sm font-medium"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
