import React from 'react';
import Link from 'next/link';
import { ToggleTheme } from '@/components/ui';

export interface NavMenuProps {
  navItems: { href: string; label: string }[];
  isMobile?: boolean;
  onNavigate?: (event: { preventDefault: () => void }) => void;
  activeId?: string | null;
}

const NavMenu: React.FC<NavMenuProps> = ({
  navItems,
  isMobile = false,
  onNavigate,
  activeId,
}) => {
  const mobileClasses =
    'mobile-menu-class flex flex-col gap-4 md:hidden py-4 px-4';
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
            className={
              `relative px-1 text-base transition-colors duration-200 ` +
              (isActive
                ? 'font-bold text-primary'
                : 'text-muted-foreground hover:text-primary')
            }
            style={{ display: 'inline-block' }}
          >
            {item.label}
            {isActive && (
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full rounded bg-primary"
                style={{ content: '""' }}
              />
            )}
          </Link>
        );
      })}
      <ToggleTheme />
    </nav>
  );
};

export default NavMenu;
