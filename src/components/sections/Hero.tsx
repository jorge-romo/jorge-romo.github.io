'use client';

import { motion } from 'framer-motion';
import { LuArrowDown } from 'react-icons/lu';
import Link from 'next/link';
import { personalInfo } from '@/data';
import DownloadResumeButton from '@/components/DownloadResumeButton';

const Hero = () => {
  return (
    <section data-testid="hero" className="mx-auto min-h-screen px-4 py-16">
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 text-center"
        >
          <div data-testid="hero-intro">
            <h1 className="text-4xl font-bold md:text-6xl">
              {personalInfo.name}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {personalInfo.title}
            </p>
          </div>
          <div
            data-testid="hero-social-links"
            className="flex justify-center gap-4"
          >
            <DownloadResumeButton />
            <Link
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Learn more
              <LuArrowDown className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
