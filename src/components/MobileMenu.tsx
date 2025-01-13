import React, { useEffect } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { ChevronUp, X } from 'lucide-react';
import NavMenu from './NavMenu';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navItems?: { href: string; label: string }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  navItems,
}) => {
  const handleSwipe = (_event: PointerEvent, info: PanInfo) => {
    if (info.offset.y < -50) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
      document.body.style.position = 'fixed';
      document.body.style.inset = '0';
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.style.position = '';
      document.body.style.inset = '';
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      document.body.style.position = '';
      document.body.style.inset = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 bg-white/70 backdrop-blur-md dark:bg-zinc-900/70"
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
          onPanEnd={handleSwipe}
        >
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute right-4 top-4 text-secondary hover:text-primary dark:text-zinc-50 dark:hover:text-zinc-400"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>

          <NavMenu
            isMobile
            onItemClick={() => {
              setIsMobileMenuOpen(false);
            }}
            navItems={navItems}
          />
          <div className="absolute inset-x-0 bottom-0 flex animate-bounce items-center justify-center">
            <ChevronUp className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
