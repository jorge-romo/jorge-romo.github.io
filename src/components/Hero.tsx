import React from 'react';
import HeroImage from './HeroImage';
import HeroIntro from './HeroIntro';
import HeroSocialLinks from './HeroSocialLinks';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      data-testid="hero"
      className="transition-colors-custom flex min-h-screen items-center justify-center bg-white py-20 dark:bg-zinc-800"
    >
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        <HeroImage />

        <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
          <HeroIntro />
          <HeroSocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
