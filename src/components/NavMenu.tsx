import React from 'react';
import { Button } from '@/components/ui';
import Link from 'next/link';

const defaultNavItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#contact', label: 'Contact' },
];

export interface NavMenuProps {
  navItems?: { href: string; label: string }[];
  isMobile?: boolean;
  onItemClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({
  navItems = defaultNavItems,
  isMobile = false,
  onItemClick,
}) => {
  const mobileClasses =
    'mobile-menu-class flex flex-col gap-4 md:hidden py-4 px-4';
  const desktopClasses = 'hidden md:flex items-center space-x-6';

  return (
    <div
      data-testid="nav-menu"
      className={isMobile ? mobileClasses : desktopClasses}
    >
      {navItems.map(({ label, href }) => (
        <Button
          as={Link}
          key={label}
          href={href}
          variant="text"
          onClick={onItemClick}
        >
          {label}
        </Button>
      ))}
    </div>
  );
};

export default NavMenu;
