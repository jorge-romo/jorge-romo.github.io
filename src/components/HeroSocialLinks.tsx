import React from 'react';
import { socialLinks } from '@/data';
import { Button } from '@/components/ui';

const HeroSocialLinks: React.FC = () => {
  return (
    <div
      className="flex flex-row flex-wrap gap-4"
      data-testid="hero-social-links"
    >
      {socialLinks
        .filter((link) => !!link.href)
        .map((link) => (
          <Button
            key={link.name}
            as="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variant="standard"
          >
            {React.createElement(link.icon, {
              className: 'w-4 h-4',
              'aria-hidden': 'true',
            })}
            <span>{link.name}</span>
          </Button>
        ))}
    </div>
  );
};

export default HeroSocialLinks;
