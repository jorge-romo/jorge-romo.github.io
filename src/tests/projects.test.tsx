jest.mock('@/data/projects', () => ({
  projects: [
    {
      title: 'Project 1 - Role 1',
      description: 'Project 1 description',
      image: null,
      technologies: [
        { icon: () => <span>Icon 1</span>, name: 'Tech 1' },
        { icon: () => <span>Icon 2</span>, name: 'Tech 2' },
      ],
      github: 'https://github.com/username/project1.git',
      website: 'https://project1.com',
      featured: true,
    },
    {
      title: 'Project 2 - Role 2',
      description: 'Project 2 description',
      image: 'https://via.placeholder.com/400x300',
      technologies: [
        { icon: () => <span>Icon 1</span>, name: 'Tech 1' },
        { icon: () => <span>Icon 2</span>, name: 'Tech 2' },
        { icon: () => <span>Icon 3</span>, name: 'Tech 3' },
      ],
      github: 'https://github.com/username/project2.git',
      website: 'https://project2.com',
    },
  ],
}));

import React from 'react';
import {
  render,
  screen,
  queryHelpers,
  getByText,
  getByRole,
} from '@testing-library/react';
import Projects from '@/components/Projects';
import { projects } from '@/data/projects';

describe('Projects Component', () => {
  it('renders the section title', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('applies the "transition-colors-custom" class to the section', () => {
    render(<Projects />);
    const sectionElement = screen.getByTestId('projects-section');
    expect(sectionElement).toHaveClass('transition-colors-custom');
  });

  it('renders the project', () => {
    const { container } = render(<Projects />);
    const queryByProjectName = (projectName: string) =>
      queryHelpers.queryByAttribute(
        'data-project-name',
        container,
        projectName,
      );

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      const projectContainer = queryByProjectName(project.title)!;
      project.technologies.forEach((technology) => {
        expect(
          getByText(projectContainer, technology.name),
        ).toBeInTheDocument();
      });
      const githubLink = getByRole(projectContainer, 'link', {
        name: 'GitHub',
      });
      expect(githubLink).toHaveAttribute('href', project.github);
      const websiteLink = getByRole(projectContainer, 'link', {
        name: 'Visit Site',
      });
      expect(websiteLink).toHaveAttribute('href', project.website);
    });
  });
});
