'use client';

import { motion } from 'framer-motion';
import { LuArrowDown } from 'react-icons/lu';
import Link from 'next/link';
import { personalInfo } from '@/data';
import DownloadResumeButton from '@/components/DownloadResumeButton';

const Hero = () => {
  return (
    <section
      data-testid="hero"
      className="mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div data-testid="hero-intro">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Hello,&nbsp;
            <br />
            My name is {personalInfo.nameShort}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {personalInfo.bio}
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
    </section>
  );
};

export default Hero;
