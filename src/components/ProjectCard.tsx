import Image from 'next/image';
import React, { HTMLAttributes, HTMLElementType } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ImageIcon } from 'lucide-react';
import type { IProject } from '@/data';
import clsx from 'clsx';
import { Button } from '@/components/ui';

export interface ProjectCardProps<AsTarget extends HTMLElementType = 'div'>
  extends HTMLAttributes<AsTarget> {
  as?: AsTarget;
  project: IProject;
}

const ImagePlaceholder = ({ className = '' }: { className?: string }) => (
  <div
    className={`relative h-full w-full ${className}`}
    data-testid="image-placeholder"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-700">
      <div
        className="absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <ImageIcon className="h-10 w-10 text-zinc-400 opacity-50 dark:text-zinc-500" />
    </div>
  </div>
);

const ProjectCard = React.memo(
  <AsTarget extends HTMLElementType = 'div'>(
    props: ProjectCardProps<AsTarget>,
  ) => {
    const {
      as = 'div',
      project: { image, title, description, technologies, github, website },
      className,
      ...rest
    } = props;

    const element = React.createElement(
      as,
      {
        'data-testid': 'project-card',
        ...rest,
        className: clsx(
          'transition-colors-custom group relative overflow-hidden rounded-xl border border-zinc-300 bg-zinc-100 shadow-sm hover:shadow-md dark:border-zinc-600 dark:bg-zinc-900/50',
          className,
        ),
        'data-component': 'card',
      },

      <div className="relative aspect-video overflow-hidden">
        {image ? (
          <Image
            className="transition-transform duration-500 group-hover:scale-105"
            src={image}
            fill
            sizes="240px"
            style={{ objectFit: 'contain' }}
            alt={title}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </div>,

      <div className="p-8">
        <h3 className="mb-4 text-2xl font-medium text-primary-dark dark:text-zinc-50">
          {title}
        </h3>
        <p className="mb-6 text-secondary dark:text-zinc-300">{description}</p>
        <div className="mb-6 flex flex-wrap items-center gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-1">
              {React.createElement(tech.icon, {
                className: 'w-5 h-5 text-secondary dark:text-zinc-300',
                'aria-hidden': 'true',
              })}
              <span className="hidden text-sm text-secondary dark:text-zinc-300 lg:inline">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        ,
        <div className="flex gap-4">
          {!!github && (
            <Button
              as="a"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
              <span>GitHub</span>
            </Button>
          )}

          {!!website && (
            <Button
              as="a"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt className="h-4 w-4" aria-hidden="true" />
              <span>Visit Site</span>
            </Button>
          )}
        </div>
      </div>,
    );
    return element;
  },
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
