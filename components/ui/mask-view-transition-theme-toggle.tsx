'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';

export function MaskViewTransitionThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  const handleThemeChange = (newTheme: string) => {
    if (newTheme === theme) {
      setIsOpen(false);
      return;
    }

    if (typeof document !== 'undefined' && document.startViewTransition) {
      // Use View Transition API with expo-in timing for smooth theme switching
      document.startViewTransition(() => {
        setTheme(newTheme);
      });
    } else {
      setTheme(newTheme);
    }

    setIsOpen(false);
  };

  return (
    <div className="theme-dropdown relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass rounded-full p-2 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center"
        aria-label="Toggle theme"
        aria-expanded={isOpen}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-gray-900 dark:text-gray-100" />
        ) : (
          <Moon className="w-5 h-5 text-gray-900" />
        )}
      </button>

      {/* Theme Dropdown Menu */}
      {isOpen && (
        <div className="theme-menu absolute top-full right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-max overflow-hidden">
          <button
            onClick={() => handleThemeChange('light')}
            className={`theme-option w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
              theme === 'light'
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            aria-current={theme === 'light' ? 'true' : 'false'}
          >
            <span className="flex items-center gap-2">
              <Sun className="w-4 h-4" />
              Light
            </span>
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className={`theme-option w-full px-4 py-2 text-left text-sm font-medium transition-colors duration-200 ${
              theme === 'dark'
                ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
            aria-current={theme === 'dark' ? 'true' : 'false'}
          >
            <span className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              Dark
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
