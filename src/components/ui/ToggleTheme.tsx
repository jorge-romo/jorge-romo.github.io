'use client';

import React, { useEffect, useState } from 'react';
import { LuMoon as Moon, LuSunDim as Sun } from 'react-icons/lu';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

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
      className="relative h-6 w-12 rounded-full bg-zinc-200 transition-colors duration-300 dark:bg-zinc-700"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md"
        animate={{
          x: resolvedTheme === 'dark' ? 24 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="h-3 w-3 text-zinc-700" />
        ) : (
          <Sun className="h-3 w-3 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};

export default ToggleTheme;
