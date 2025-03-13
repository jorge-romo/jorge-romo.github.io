'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import clsx from 'clsx';
import { Button } from './ui';

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
    <Button
      onClick={scrollToTop}
      rounded="full"
      variant="text"
      className={clsx(
        'group fixed bottom-8 right-8 z-50 bg-white p-4 shadow-lg dark:bg-zinc-800 dark:shadow-zinc-800/20',
        'transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700',
        {
          'pointer-events-none opacity-0': !isVisible,
          'opacity-100': isVisible,
        },
      )}
      style={{ transition: 'opacity 0.3s ease' }}
      aria-label="Scroll to top"
      role="button"
    >
      <ArrowUp className="h-5 w-5 transition-transform group-hover:scale-110" />
    </Button>
  );
};

export default ScrollToTopButton;
