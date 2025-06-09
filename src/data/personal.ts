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
  title: 'Senior Full Stack Engineer',
  bio: `A passionate Full Stack Developer specializing in building exceptional digital experiences`,
  summary: `I specialize in developing robust full-stack applications using modern technologies like React, TypeScript, .NET Core, and Node.js, while leveraging cloud platforms such as AWS and Azure. My expertise extends to implementing serverless architectures, establishing coding standards, and fostering team growth through comprehensive documentation and mentorship.\n\nBeyond technical skills, I'm passionate about improving development processes, implementing effective peer-review systems, and ensuring high code quality through automated testing and monitoring solutions.`,
  from: '2018-05',
  location: 'Odessa, TX 79763',
  phone: '1 432 231 0759',
};

export type ISocialLink = {
  name: string;
  url: string;
  icon: IconType;
};

export const socialLinks: ISocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jorge-romo',
    icon: SiLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jorge-romo',
    icon: SiGithub,
  },
  {
    name: 'X',
    url: 'https://x.com/jorge_romo',
    icon: SiX,
  },
  {
    name: 'Email',
    url: 'mailto:jorge.romo.692@gmail.com',
    icon: SiGoogle,
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
