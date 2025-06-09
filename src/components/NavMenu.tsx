import React from 'react';
import Link from 'next/link';
import { ToggleTheme } from '@/components/ui';

export interface NavMenuProps {
  navItems: { href: string; label: string }[];
  isMobile?: boolean;
  onNavigate?: (event: { preventDefault: () => void }) => void;
}

const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  isMobile = false,
  onNavigate,
}) => {
  const mobileClasses =
    'mobile-menu-class flex flex-col gap-4 md:hidden py-4 px-4';
  const desktopClasses = 'hidden items-center gap-6 md:flex';

  return (
    <nav
      data-testid="nav-menu"
      className={isMobile ? mobileClasses : desktopClasses}
    >
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onNavigate={onNavigate}
          className="text-primary-dark text-sm font-medium transition-colors hover:text-primary/80 dark:text-zinc-100 dark:hover:text-zinc-100/80"
        >
          {item.label}
        </Link>
      ))}
      <ToggleTheme />
    </nav>
  );
};

export default NavMenu;
