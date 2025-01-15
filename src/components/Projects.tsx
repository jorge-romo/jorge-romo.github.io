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
      className="transition-colors-custom bg-zinc-50 py-20 dark:bg-zinc-900/95"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-16 mt-8 text-center text-3xl font-medium text-primary-dark dark:text-zinc-50">
          Projects
        </h2>

        {featuredProject && (
          <div className="mx-auto mb-20 max-w-6xl">
            <ProjectCard
              image={featuredProject.image}
              title={featuredProject.title}
              description={featuredProject.description}
              technologies={featuredProject.technologies}
              github={featuredProject.github}
              website={featuredProject.website}
            />
          </div>
        )}

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project?.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
