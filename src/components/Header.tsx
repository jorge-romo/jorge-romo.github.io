'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuMenu } from 'react-icons/lu';
import { Button } from '@/components/ui';
import MobileMenu from '@/components/MobileMenu';
import NavMenu from '@/components/NavMenu';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('bg-background/80', 'backdrop-blur-sm');
        } else {
          header.classList.remove('bg-background/80', 'backdrop-blur-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-primary-dark dark:text-primary-light text-xl font-bold"
          >
            JR
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="default"
            size="sm"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden"
            rounded="full"
          >
            <LuMenu className="h-5 w-5" />
          </Button>
          <NavMenu navItems={navItems} />
        </div>
      </div>

      <MobileMenu
        isMobileMenuOpen={isMenuOpen}
        setIsMobileMenuOpen={setIsMenuOpen}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
