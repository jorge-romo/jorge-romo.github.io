import {
  SiApollographql,
  SiExpress,
  SiJavascript,
  SiJest,
  SiMaterialdesign,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiReduxsaga,
  SiSass,
  SiStorybook,
  SiTypescript,
} from 'react-icons/si';

export const projects = [
  {
    title: 'Passion List',
    role: 'Javascript Developer',
    description:
      "PassionList is a curated platform for car enthusiasts, showcasing the most intriguing cars for sale daily. It's more than just a marketplace—it's a community for those passionate about cars. I collaborated with a team of developers to design and implement the company’s main webpage using the JavaScript stack, delivering a seamless and engaging user experience.",
    image: '/images/projects/passionlist.png',
    technologies: [
      { icon: SiJavascript, name: 'Javascript' },
      { icon: SiReact, name: 'React' },
      { icon: SiExpress, name: 'Express.js' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiSass, name: 'SCSS' },
      { icon: SiJest, name: 'Jest' },
      { icon: SiRedux, name: 'Redux' },
      { icon: SiReduxsaga, name: 'Redux Saga' },
    ],
    github: '',
    website: 'https://dev.passionlist.com',
    featured: false,
  },
  {
    title: 'FOUNDRY',
    role: 'Sr. Frontend Developer',
    description:
      'Foundry is a component foundation project designed to deliver a scalable, reusable, and efficient library of UI components. The project focuses on enhancing Foundry’s web page elements. I collaborated with a team of developers to create and refine various components, including text fields, radio buttons, and more, ensuring optimal functionality and usability.',
    image: '/images/projects/foundry.png',
    technologies: [
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiSass, name: 'SCSS' },
      { icon: SiJest, name: 'Jest' },
      { icon: SiStorybook, name: 'Storybook' },
    ],
    github: '',
    website: '',
    featured: false,
  },
  {
    title: 'Matisse Exchange',
    role: 'Frontend Developer',
    description:
      'Matisse Exchange is a personal project—a crypto exchange platform designed to provide a user-friendly environment for trading digital assets.',
    image: '/images/projects/matisse-exchange.png',
    technologies: [
      { icon: SiReact, name: 'React' },
      { icon: SiNextdotjs, name: 'Next.js' },
      { icon: SiTypescript, name: 'TypeScript' },
      { icon: SiMaterialdesign, name: 'Material UI' },
      { icon: SiApollographql, name: 'Apollo GraphQL' },
      { icon: SiNodedotjs, name: 'Node.js' },
    ],
    github: '',
    website: '',
    featured: false,
  },
];
