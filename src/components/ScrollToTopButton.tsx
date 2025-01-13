'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import clsx from 'clsx';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 500);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={clsx(
        'fixed bottom-8 right-8 rounded-full bg-white p-3 shadow-lg dark:bg-zinc-800 dark:shadow-zinc-800/20',
        'text-secondary hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 dark:text-zinc-300',
        'group z-50 transition-all duration-300 focus:ring-zinc-300 dark:focus:ring-zinc-700',
        {
          'pointer-events-none opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
      )}
      style={{ transition: 'opacity 0.3s ease' }}
      aria-label="Scroll to top"
      role="button"
    >
      <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
    </button>
  );
};

export default ScrollToTopButton;
