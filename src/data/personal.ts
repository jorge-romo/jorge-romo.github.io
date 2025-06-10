import { StaticImageData } from 'next/image';
import { LuBook, LuCoffee, LuMusic, LuUsers } from 'react-icons/lu';
import type { IconType } from 'react-icons';
import { FaPlaystation, FaWalking } from 'react-icons/fa';
import { SiLinkedin, SiGithub, SiX, SiGoogle } from 'react-icons/si';
import profileImg from '@/assets/images/profile.png';

export interface IPersonalInterest {
  icon: IconType;
  label: string;
}

export const personalInterests: IPersonalInterest[] = [
  { icon: LuCoffee, label: 'Coffee' },
  { icon: LuMusic, label: 'Music' },
  { icon: LuBook, label: 'Reading' },
  { icon: FaPlaystation, label: 'Gaming' },
  { icon: FaWalking, label: 'Hiking' },
  { icon: LuUsers, label: 'Family Time' },
];

export type IPersonalInfo = {
  photo: string | StaticImageData;
  resume: string;
  name: string;
  nameShort: string;
  title: string;
  bio: string;
  summary: string;
  from: string;
  location: string;
  phone: string;
};

export const personalInfo: IPersonalInfo = {
  photo: profileImg,
  resume: '/pdfs/Resume.pdf',
  name: 'Jorge Manuel Romo Jr.',
  nameShort: 'Jorge',
  title: 'Senior Full Stack Engineer',
  bio: "I'm a Senior Full Stack Engineer at Hitachi Digital Services with over 6 years of experience in developing scalable applications. My expertise spans cloud infrastructure, serverless architectures, and full-stack development. I'm passionate about creating efficient solutions that enhance application performance and user experience while maintaining high code quality standards.",
  summary: `As a Senior Full Stack Engineer, I specialize in architecting and developing robust applications using modern technologies like React, TypeScript, .NET Core, Java, and Node.js. My experience includes implementing serverless architectures with AWS Lambda and Azure Functions, leading to significant performance improvements and reduced operational costs.\n\nI've successfully led the development of full-stack applications serving thousands of users, while establishing comprehensive coding standards and best practices. My focus on code quality and mentorship has resulted in improved team productivity and reduced technical debt. I'm particularly proud of creating detailed documentation and coding style guides that have become essential resources for team development and onboarding.`,
  from: '2018-05',
  location: 'Odessa, TX 79763',
  phone: '1 432 231 0759',
};

export type ISocialLink = {
  name: string;
  url?: string;
  icon: IconType;
  color: string;
};

export const socialLinks: ISocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jorge-romo',
    icon: SiLinkedin,
    color: '#0077B5',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jorge-romo',
    icon: SiGithub,
    color: '#181717',
  },
  {
    name: 'X',
    // url: 'https://x.com/jorge_romo',
    icon: SiX,
    color: '#000000',
  },
  {
    name: 'Email',
    url: 'mailto:jorge.romo.692@gmail.com',
    icon: SiGoogle,
    color: '#EA4335',
  },
];

export type IContactInformation = {
  phone: string;
  email: string;
  location: string;
};

export const contactInfo: IContactInformation = {
  phone: '1 432 231 0759',
  email: 'jorge.romo.692@gmail.com',
  location: 'Odessa, TX 79763',
};
