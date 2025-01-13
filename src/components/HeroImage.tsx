import React from 'react';
import Image from 'next/image';
import { personalInfo } from '@/data/personal';

const HeroImage: React.FC = () => {
  return (
    <div
      className="relative h-64 w-64 md:h-80 md:w-80"
      data-testid="hero-image"
    >
      <div className="absolute inset-0 -rotate-6 transform rounded-full bg-zinc-100/50 transition-all duration-custom group-hover:rotate-6 dark:bg-zinc-700/30" />

      <div className="relative h-full w-full rounded-full bg-gradient-to-tr from-zinc-200/60 via-zinc-300/40 to-transparent p-[2px] dark:from-zinc-600/40 dark:via-zinc-700/20 dark:to-transparent">
        <div className="h-full w-full rounded-full bg-white p-[2px] dark:bg-zinc-800">
          <Image
            src={personalInfo.photo}
            alt="Profile"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-full ring-1 ring-zinc-100 dark:ring-zinc-700"
          />
        </div>
      </div>

      <div className="absolute -bottom-2 -right-2 h-3 w-3 rounded-full bg-zinc-200/80 dark:bg-zinc-600/50" />
      <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-zinc-100/80 dark:bg-zinc-700/50" />
    </div>
  );
};

export default HeroImage;
