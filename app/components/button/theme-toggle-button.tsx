'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="p-2 transition hover:scale-110 hover:text-neutral-800 dark:hover:text-neutral-200"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <Sun size={24} className="hidden dark:block" />
      <Moon size={24} className="block dark:hidden" />
    </button>
  );
};

export default ThemeToggleButton;
