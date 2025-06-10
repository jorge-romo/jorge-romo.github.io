'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuShare2 } from 'react-icons/lu';
import clsx from 'clsx';
import { socialLinks } from '@/data/personal';

const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const validLinks = socialLinks.filter((link) => link.url);

  return (
    <>
      {/* Desktop View */}
      <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col gap-4">
          {validLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                'flex items-center justify-center rounded-full bg-white p-4 text-primary shadow-md transition-all dark:bg-gray-800',
                'hover:bg-[--hover-color] hover:text-white hover:shadow-lg dark:hover:text-[--hover-color]',
              )}
              style={{ '--hover-color': link.color } as React.CSSProperties}
            >
              <link.icon className="h-5 w-5" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <motion.button
          onClick={toggleMenu}
          className={clsx(
            'fixed bottom-24 right-8 z-50 flex items-center justify-center rounded-full bg-white p-4 text-primary shadow-md transition-all dark:bg-gray-800 dark:text-gray-200',
            'hover:bg-gray-100 hover:shadow-lg dark:hover:bg-gray-700',
          )}
        >
          <LuShare2 className="h-5 w-5" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
              variants={containerVariants}
              className="fixed bottom-40 right-8 z-50"
            >
              <div className="flex flex-col gap-4">
                {validLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={clsx(
                      'flex items-center justify-center rounded-full bg-white p-4 text-primary shadow-md transition-all dark:bg-gray-800',
                      'hover:bg-[--hover-color] hover:text-white hover:shadow-lg dark:hover:text-[--hover-color]',
                    )}
                    style={
                      { '--hover-color': link.color } as React.CSSProperties
                    }
                  >
                    <link.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SocialLinks;
