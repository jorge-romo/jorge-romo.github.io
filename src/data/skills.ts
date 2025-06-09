import type { IconType } from 'react-icons';
import { VscAzure } from 'react-icons/vsc';
import { FaAws } from 'react-icons/fa6';
import { TbAutomation } from 'react-icons/tb';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiDatadog,
  SiGit,
  SiDotnet,
  SiAngular,
  SiJest,
  SiCypress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';

export interface ISkill {
  name: string;
  icon: IconType;
}

export const skills: ISkill[] = [
  // Frontend
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Angular', icon: SiAngular },
  { name: 'Tailwind CSS', icon: SiTailwindcss },

  // Backend
  { name: 'Node.js', icon: SiNodedotjs },
  { name: '.NET Core', icon: SiDotnet },
  { name: 'Python', icon: SiPython },

  // Databases
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql },

  // DevOps & Cloud
  { name: 'Docker', icon: SiDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: VscAzure },
  { name: 'Terraform', icon: SiTerraform },
  { name: 'Datadog', icon: SiDatadog },
  { name: 'Git', icon: SiGit },
  { name: 'CI/CD', icon: TbAutomation },

  // Testing
  { name: 'Jest', icon: SiJest },
  { name: 'Cypress', icon: SiCypress },
];
