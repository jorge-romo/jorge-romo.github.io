import { Book, Coffee, Music, Users } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaPlaystation,
  FaTwitter,
  FaWalking,
} from 'react-icons/fa';
import { getYears } from '@/utilities';

export const personalInterests: {
  icon: IconType;
  label: string;
}[] = [
  { icon: Coffee, label: 'Coffee' },
  { icon: Music, label: 'Music' },
  { icon: Book, label: 'Book' },
  { icon: FaPlaystation, label: 'Game' },
  { icon: FaWalking, label: 'Hiking' },
  { icon: Users, label: 'Family Time' },
];

export const personalInfo = {
  photo: '/images/profile.png',
  resume: '/pdfs/Resume.pdf',
  name: 'Jorge Romo',
  title: 'Sr. Frontend Developer',
  bio: 'Building modern front-end applications with React, Next.js, and TypeScript to deliver clean, scalable, and high-performance user experiences.',
  summary: `With over ${getYears('2018-09')} years of hands-on experience, I’ve been building scalable, user-focused web applications while leveraging modern technologies like React, Next.js, and TypeScript. I’m passionate about enhancing user experiences and delivering maintainable code through effective collaboration within agile teams.\n Alongside front-end development, I’ve also worked in environments with microservices architecture, contributing to front-end integrations and supporting modern practices such as implementing design systems and CI/CD workflows. My focus is always on balancing code quality, performance, and scalability to create applications that drive impactful results and solve real-world challenges.\n Beyond technical skills, I value clear communication, teamwork, and a growth-oriented mindset. I excel in collaborating across cross-functional teams to align on goals, promote efficient workflows, and continuously learn new technologies to improve both as a developer and a team contributor.`,
  from: '2018-09',
};

export const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jorge-romo-50261b240',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jorge-romo',
    icon: FaGithub,
  },
  {
    name: 'Twitter',
    href: '',
    icon: FaTwitter,
  },
  {
    name: 'Gmail',
    href: 'mailto:romo.jorge126@gmail.com',
    icon: FaGoogle,
  },
];

export const contactInfo = {
  phone: '',
  email: 'romo.jorge126@gmail.com',
};
