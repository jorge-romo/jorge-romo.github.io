import { PlayCircle } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiAngular,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMaterialdesign,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiSass,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export type ISkill = {
  icon: IconType;
  name: string;
};

export const skills: ISkill[] = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Javascript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Material UI', icon: SiMaterialdesign },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Redux', icon: SiRedux },
  { name: 'SASS', icon: SiSass },
  { name: 'Jest', icon: SiJest },
  { name: 'Storybook', icon: SiStorybook },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'CI/CD', icon: PlayCircle },
  { name: 'Git', icon: SiGit },
];
