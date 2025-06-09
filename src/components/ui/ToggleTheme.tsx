'use client';

import React, { useEffect, useState } from 'react';
import { LuMoon as Moon, LuSunDim as Sun } from 'react-icons/lu';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const ToggleTheme: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        'relative h-5 w-12 rounded-full transition-colors duration-300',
        resolvedTheme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200',
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        className={clsx(
          'absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full',
          resolvedTheme === 'dark' ? 'bg-zinc-100' : 'bg-zinc-800',
        )}
        animate={{
          x: resolvedTheme === 'dark' ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="h-6 w-6 text-zinc-800" />
        ) : (
          <Sun className="h-6 w-6 text-zinc-200" />
        )}
      </motion.div>
    </button>
  );
};

export default ToggleTheme;
