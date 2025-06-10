'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { projects } from '@/data/projects';
import clsx from 'clsx';

type ProjectsProps = HTMLMotionProps<'section'>;

const Projects = ({ className, ...props }: ProjectsProps) => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx('min-h-screen px-4', className)}
      data-testid="projects"
      {...props}
    >
      <div className="pb-16 pt-32">
        <h2 className="mb-4 text-3xl font-bold">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg border bg-card"
            >
              {project.image && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    fill
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      <tech.icon className="h-4 w-4" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <SiGithub className="h-4 w-4" />
                      Source
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                    >
                      <FiExternalLink className="h-4 w-4" />
                      Visit
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
