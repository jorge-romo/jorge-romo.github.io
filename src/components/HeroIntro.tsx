import { personalInfo } from '@/data/personal';
import React from 'react';

const HeroIntro: React.FC = () => {
  return (
    <>
      <div
        className="flex items-center gap-2 text-secondary dark:text-zinc-400"
        data-testid="hero-intro"
      >
        <span className="h-[2px] w-6 bg-zinc-300 dark:bg-zinc-600" />
        <span>Hi there, I&apos;m</span>
      </div>

      <h1 className="text-4xl font-bold text-primary-dark dark:text-zinc-50 md:text-5xl lg:text-6xl">
        {personalInfo.name}
      </h1>

      <p className="h-[40px] text-xl text-secondary dark:text-zinc-300 md:text-2xl lg:h-[48px] lg:text-3xl">
        {personalInfo.title}
      </p>

      <p className="max-w-2xl text-lg leading-relaxed text-secondary dark:text-zinc-300">
        {personalInfo.bio}
      </p>
    </>
  );
};

export default HeroIntro;
