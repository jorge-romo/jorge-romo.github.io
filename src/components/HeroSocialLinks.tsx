import React from 'react';
import { socialLinks } from '@/data/personal';
import DownloadResumeButton from '@/components/DownloadResumeButton';

const HeroSocialLinks: React.FC = () => {
  return (
    <div className="flex flex-row gap-4" data-testid="hero-social-links">
      {socialLinks
        .filter((link) => !!link.href)
        .map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm text-secondary transition-colors duration-custom hover:bg-zinc-200 dark:bg-zinc-700/50 dark:text-zinc-300 dark:hover:bg-zinc-700/80"
          >
            {React.createElement(link.icon, { className: 'w-4 h-4' })}
            <span>{link.name}</span>
          </a>
        ))}
      <DownloadResumeButton />
    </div>
  );
};

export default HeroSocialLinks;
