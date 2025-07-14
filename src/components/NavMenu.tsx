import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import ToggleTheme from '@/components/ui/ToggleTheme';

export interface NavMenuProps {
  navItems: { href: string; label: string }[];
  isMobile?: boolean;
  onNavigate?: (event: { preventDefault: () => void }) => void;
  activeId?: string | null;
  children?: React.ReactNode;
}

const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  isMobile = false,
  onNavigate,
  activeId,
  children,
}) => {
  const mobileClasses =
    'mobile-menu-class flex flex-col justify-center items-center gap-8 md:hidden py-4 px-4';
  const desktopClasses = 'hidden items-center gap-6 md:flex';

  return (
    <nav
      data-testid="nav-menu"
      className={isMobile ? mobileClasses : desktopClasses}
    >
      {navItems.map((item) => {
        const isActive =
          typeof activeId === 'string' && item.href === `#${activeId}`;
        return (
          <Link
            key={item.href}
            href={item.href}
            onNavigate={onNavigate}
            className={clsx(
              'relative text-sm font-medium transition-colors hover:text-primary',
              'after:absolute after:-bottom-1 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-primary after:transition-all after:duration-300 hover:after:w-1/2',
              isActive
                ? 'font-bold text-primary'
                : 'text-muted-foreground hover:text-primary',
            )}
            style={{ display: 'inline-block' }}
          >
            {item.label}
            {!isMobile && isActive && (
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-primary"
                style={{ content: '""' }}
              />
            )}
          </Link>
        );
      })}
      {children}
      <ToggleTheme />
    </nav>
  );
};

export default NavMenu;
