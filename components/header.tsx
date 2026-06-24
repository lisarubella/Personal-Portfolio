'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MaskViewTransitionThemeToggle } from '@/components/ui/mask-view-transition-theme-toggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('hamburger-btn');

      if (menu && button && !menu.contains(e.target as Node) && !button.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white font-jakarta">
            Mona
          </div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#process"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#work"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <MaskViewTransitionThemeToggle />

            {/* Mobile Menu Button */}
            <button
              id="hamburger-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-16 z-30 bg-black/95 dark:bg-gray-950 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col justify-center items-center gap-8 h-full">
            <a
              href="#home"
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-primary-pink transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-primary-pink transition-colors"
            >
              About
            </a>
            <a
              href="#process"
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-primary-pink transition-colors"
            >
              Process
            </a>
            <a
              href="#work"
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-primary-pink transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="text-white text-2xl font-semibold hover:text-primary-pink transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
}
