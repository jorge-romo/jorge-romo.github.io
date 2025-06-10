'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { personalInfo, skills } from '@/data';
import clsx from 'clsx';

type AboutProps = HTMLMotionProps<'section'>;

const About = ({ className, ...props }: AboutProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx('min-h-screen px-4', className)}
      data-testid="about"
      {...props}
    >
      <div className="pb-16 pt-32">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {personalInfo.summary}
        </p>
        <div>
          <h3 className="mb-4 text-xl font-semibold">
            Technologies I work with:
          </h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
              >
                <skill.icon className="h-5 w-5" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
