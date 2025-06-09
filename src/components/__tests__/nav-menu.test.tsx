import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NavMenu from '../NavMenu';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('NavMenu Component', () => {
  const mockNavItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  const mockOnItemClick = jest.fn();

  beforeEach(() => {
    mockOnItemClick.mockClear();
  });

  it('renders correctly with navigation items', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={false}
        onNavigate={mockOnItemClick}
      />,
    );
    const menu = screen.getByTestId('nav-menu');
    expect(menu).toBeInTheDocument();
  });

  it('displays all navigation links with correct labels and hrefs', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={false}
        onNavigate={mockOnItemClick}
      />,
    );

    mockNavItems.forEach((item) => {
      const link = screen.getByText(item.label);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', item.href);
    });
  });

  it.only('triggers onItemClick callback when a nav item is clicked', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={false}
        onNavigate={mockOnItemClick}
      />,
    );

    const firstLink = screen.getByText(mockNavItems[0].label);
    fireEvent.click(firstLink);
    expect(mockOnItemClick).toHaveBeenCalledTimes(1);
  });

  it('renders with mobile-specific styles when isMobile is true', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={true}
        onNavigate={mockOnItemClick}
      />,
    );

    const menu = screen.getByTestId('nav-menu');
    expect(menu).toHaveClass('mobile-menu-class');
  });

  it('renders with desktop-specific styles when isMobile is false', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={false}
        onNavigate={mockOnItemClick}
      />,
    );

    const menu = screen.getByTestId('nav-menu');
    expect(menu).toHaveClass('hidden', 'md:flex');
  });

  it('renders theme toggle button', () => {
    render(
      <NavMenu
        navItems={mockNavItems}
        isMobile={false}
        onNavigate={mockOnItemClick}
      />,
    );

    const themeToggle = screen.getByRole('button', { name: /toggle theme/i });
    expect(themeToggle).toBeInTheDocument();
  });
});
