import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects as _projects } from '@/data';

const projects = [..._projects];
const featuredProjectIndex = projects.findIndex((p) => p.featured === true);
const featuredProject =
  featuredProjectIndex >= 0
    ? projects.splice(featuredProjectIndex, 1)[0]
    : null;

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="transition-colors-custom bg-white py-20 dark:bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 mt-8 text-center text-3xl font-medium text-primary-dark dark:text-zinc-50">
          Projects
        </h2>

        <ul className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {featuredProject && (
            <ProjectCard
              as="li"
              project={featuredProject}
              className="col-span-2"
            />
          )}
          {projects.map((project, index) => (
            <ProjectCard
              as="li"
              key={index}
              project={project}
              data-sub-testid=""
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
