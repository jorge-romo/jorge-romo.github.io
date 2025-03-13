import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/ProjectCard';
import { IProject } from '@/data';

const mockProject: IProject = {
  image: '/test-image.png',
  title: 'Test Project',
  description: 'This is a test project description.',
  role: 'Frontend Developer',
  technologies: [{ icon: () => <svg></svg>, name: 'React' }],
  github: 'https://github.com/test',
  website: 'https://test.com',
};

describe('ProjectCard Component', () => {
  it('should render the project title', () => {
    render(<ProjectCard project={mockProject} />);
    const title = screen.getByText(mockProject.title);
    expect(title).toBeInTheDocument();
  });

  it('should render the project description', () => {
    render(<ProjectCard project={mockProject} />);
    const description = screen.getByText(mockProject.description);
    expect(description).toBeInTheDocument();
  });

  it('should render the GitHub link', () => {
    render(<ProjectCard project={mockProject} />);
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', mockProject.github);
  });

  it('should render the website link', () => {
    render(<ProjectCard project={mockProject} />);
    const websiteLink = screen.getByRole('link', { name: 'Visit Site' });
    expect(websiteLink).toHaveAttribute('href', mockProject.website);
  });

  it('should render the technology icons', () => {
    render(<ProjectCard project={mockProject} />);
    const techIcon = screen.getByText('React');
    expect(techIcon).toBeInTheDocument();
  });

  it('should render the image if provided', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText(mockProject.title);
    expect(image).toBeInTheDocument();
  });

  it('should render the placeholder if no image is provided', () => {
    const projectWithoutImage = { ...mockProject, image: undefined };
    render(<ProjectCard project={projectWithoutImage} />);
    const placeholder = screen.getByTestId('image-placeholder');
    expect(placeholder).toBeInTheDocument();
  });

  it('should apply the correct classes for styling', () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId('project-card');
    expect(card).toHaveClass('group rounded-xl');
  });
});
