'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { LuArrowDown } from 'react-icons/lu';
import Link from 'next/link';
import { personalInfo } from '@/data';
import clsx from 'clsx';

type HeroProps = HTMLMotionProps<'section'>;

const Hero = ({ className, ...props }: HeroProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        'flex min-h-screen flex-col items-center justify-center px-4',
        className,
      )}
      data-testid="hero"
      {...props}
    >
      <div className="py-16">
        <div className="mb-4" data-testid="hero-intro">
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
          <Link
            href="#about"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Learn more
            <LuArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
