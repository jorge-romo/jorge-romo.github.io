import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { githubRepoLink, personalInfo } from '@/data/personal';
import { techsUsedThisProject } from '@/data/projects';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="transition-colors-custom border-t border-zinc-100 bg-white py-8 dark:border-zinc-700/50 dark:bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {techsUsedThisProject.map((tech, index) => (
              <div key={index} title={tech.name}>
                {React.createElement(
                  tech.icon as React.ComponentType<{ className: string }>,
                  {
                    className: 'w-6 h-6 text-secondary dark:text-zinc-300',
                  },
                )}
              </div>
            ))}
          </div>

          <div className="my-6 w-full border-t border-zinc-300 dark:border-zinc-600"></div>

          <div className="flex flex-col items-center justify-center gap-2 text-sm text-secondary dark:text-zinc-400 md:flex-row">
            <span>© {currentYear} All rights reserved</span>
            <span className="hidden md:inline">•</span>
            <span>
              {' '}
              Developed with ❤️ by <strong>{personalInfo.name}</strong>
            </span>
            <span className="hidden md:inline">•</span>

            <a
              href={githubRepoLink}
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              title="GitHub Repository"
            >
              <FaGithub className="h-5 w-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
