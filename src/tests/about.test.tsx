jest.mock('@/data/personal', () => ({
  personalInfo: {
    summary: 'Summary 1\nSummary 2',
    bio: 'Personal Bio',
    from: '2019-01-01',
    name: 'Full Name',
    title: 'Current Job Title',
  },
  personalInterests: [
    { label: 'Interest 1', icon: () => <span>Icon 1</span> },
    { label: 'Interest 2', icon: () => <span>Icon 2</span> },
    { label: 'Interest 3', icon: () => <span>Icon 3</span> },
  ],
}));

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '@/components/About';
import { personalInterests } from '@/data/personal';

describe('About Component', () => {
  it('renders the About component without crashing', () => {
    render(<About />);
    const aboutSection = screen.getByTestId('about');
    expect(aboutSection).toBeInTheDocument();
  });

  it('renders section with the class transition-colors-custom', () => {
    render(<About />);
    const aboutSection = screen.getByTestId('about');
    expect(aboutSection).toHaveClass('transition-colors-custom');
  });

  it('renders all personal interests dynamically from the mock array', () => {
    render(<About />);

    personalInterests.forEach((interest) => {
      expect(screen.getByText(interest.label)).toBeInTheDocument();
    });
  });
});
