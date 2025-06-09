import {
  SiEslint,
  SiFramer,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiSwc,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { personalInfo } from './personal';
import { IconType } from 'react-icons';

export type IConfig = {
  title: string;
  description: {
    long: string;
    short: string;
  };
  url: string;
  repo: string;
  technologies: { name: string; icon: IconType };
  keywords: string[];
  screenshot: { url: string; width: number; height: number };
};

export const config = {
  title: `Jorge Romo | Portfolio`,
  description: {
    long: `Personal portfolio website of Jorge Romo, showcasing projects and skills in web development.`,
    short: `Personal portfolio website of Jorge Romo, showcasing projects and skills in web development.`,
  },
  url: 'https://jorge-romo.github.io',
  repo: 'https://github.com/jorge-romo/jorge-romo.github.io',
  technologies: [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'TailwindCSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'ESLint', icon: SiEslint },
    { name: 'SWC', icon: SiSwc },
    { name: 'Jest', icon: SiJest },
  ],
  keywords: [
    personalInfo.name,
    'portfolio',
    'front-end developer',
    'react',
    'next.js',
  ],
  screenshot: {
    url: '/images/screenshot.png',
    width: 800,
    height: 387,
  },
};
