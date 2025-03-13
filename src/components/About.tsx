import React from 'react';
import { personalInfo, personalInterests } from '@/data';

const About: React.FC = () => {
  return (
    <section
      id="about"
      data-testid="about"
      className="transition-colors-custom bg-zinc-100 py-20 dark:bg-zinc-900"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="prose dark:prose-dark mb-16">
            <h2 className="mb-16 mt-8 text-center text-3xl font-medium text-primary-dark dark:text-zinc-50">
              About Me
            </h2>
            <div className="space-y-4">
              {personalInfo.summary.split('\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-secondary dark:text-zinc-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="prose dark:prose-dark mb-16">
            <h3 className="mb-16 mt-8 text-center text-xl font-medium text-primary-dark dark:text-zinc-50">
              When I&apos;m Not Coding
            </h3>
            <ul className="grid grid-cols-3 gap-5 md:grid-cols-6">
              {personalInterests.map((interest, index) => (
                <li
                  key={index}
                  className="group flex flex-col items-center rounded-lg bg-zinc-50 p-5 transition-all duration-custom hover:-translate-y-1 hover:bg-zinc-200/50 dark:bg-zinc-700/30 dark:hover:bg-zinc-700/50"
                >
                  <span className="mb-3 text-secondary transition-transform duration-300 group-hover:scale-110 dark:text-zinc-300">
                    {React.createElement(interest.icon, {
                      className: 'w-6 h-6 md:w-7 md:h-7',
                    })}
                  </span>
                  <span className="text-center text-sm text-primary-dark dark:text-zinc-100">
                    {interest.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
