import { render, screen } from '@testing-library/react';
import { personalInfo } from '@/data';
import Hero from '../Hero';

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

describe('Hero Component', () => {
  it('renders hero section with correct test ID', () => {
    render(<Hero />);
    const section = screen.getByTestId('hero');
    expect(section).toBeInTheDocument();
  });

  it('renders hero intro with name and title', () => {
    render(<Hero />);
    const intro = screen.getByTestId('hero-intro');
    expect(intro).toBeInTheDocument();
    expect(screen.getByText(personalInfo.name)).toBeInTheDocument();
    expect(screen.getByText(personalInfo.title)).toBeInTheDocument();
  });

  it('renders hero social links section', () => {
    render(<Hero />);
    const socialLinks = screen.getByTestId('hero-social-links');
    expect(socialLinks).toBeInTheDocument();
  });

  it('renders download resume button and learn more link', () => {
    render(<Hero />);
    expect(screen.getByText('Learn more')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });
});
