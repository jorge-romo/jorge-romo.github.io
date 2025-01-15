'use client';

import React, { useState } from 'react';
import { Code, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import NavMenu from '@/components/NavMenu';
import MobileMenu from '@/components/MobileMenu';
import ToggleTheme from '@/components/ToggleTheme';
import DownloadResumeButton from '@/components/DownloadResumeButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <header
      className={`transition-colors-custom fixed top-0 z-50 w-full border-b border-zinc-100 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900 ${
        resolvedTheme === 'dark' ? 'dark' : ''
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="#home" className="flex items-center gap-2">
          <Code className="h-5 w-5 text-secondary dark:text-zinc-300" />
          <h3 className="text-xl font-medium text-primary-dark dark:text-zinc-50">
            JR
          </h3>
        </Link>

        <div className="hidden items-center space-x-6 md:flex">
          <NavMenu />
          <DownloadResumeButton />
          <ToggleTheme />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <DownloadResumeButton />
          <ToggleTheme />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="transition-colors-custom text-secondary hover:text-primary dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Header;
