import React from 'react';
import { skills } from '@/data';

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      data-testid="skills"
      className="transition-colors-custom bg-white py-20 dark:bg-zinc-800"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 mt-8 text-center text-3xl font-medium text-primary-dark dark:text-zinc-50">
            Tech Skills
          </h2>

          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {skills.map(({ name, icon: Icon }, index) => (
              <li
                key={index}
                className="group flex flex-col items-center rounded-lg bg-zinc-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-200 dark:bg-zinc-700/30 dark:hover:bg-zinc-700/50"
              >
                <span className="relative mb-4">
                  <Icon
                    className="h-8 w-8 text-secondary transition-transform duration-300 group-hover:scale-110 dark:text-zinc-300"
                    aria-hidden="true"
                  />
                </span>

                <span className="text-center text-sm font-medium text-primary-dark dark:text-zinc-100">
                  {name}
                </span>

                {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-zinc-200/0 to-zinc-200/20 dark:from-zinc-600/0 dark:to-zinc-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
