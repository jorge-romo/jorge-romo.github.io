import {
  SiApollographql,
  SiEslint,
  SiExpress,
  SiFramer,
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
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const projects = [
  {
    title: 'Passion List',
    role: 'Frontend Developer',
    description:
      "Passion List is a curated platform for car enthusiasts, showcasing the most intriguing cars for sale daily. From vintage classics and rare exotics to quirky oddities and hidden barn finds, Passion List is the go-to destination for car aficionados to discover, share, and discuss unique automobiles currently on the market. It's more than just a marketplace—it's a community for those passionate about cars.",
    image: '/images/project-passionlist.jpg',
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
    website: 'https://passionlist.com',
    featured: false,
  },
  {
    title: 'Solid Design',
    role: 'Sr. Frontend Developer',
    description:
      'Solid Design is a components foundation project aimed at providing a scalable, reusable, and efficient library of UI components. Designed to streamline development workflows, it offers a cohesive set of building blocks for creating modern, responsive, and consistent user interfaces. With a focus on flexibility and customization, Solid Design empowers developers to craft seamless user experiences across various applications.',
    image: '/images/project-soliddesign.jpg',
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
      'Matisse Exchange is a cutting-edge cryptocurrency trading platform designed to provide secure, efficient, and user-friendly trading experiences. The platform offers real-time market analysis, seamless transactions, and support for a wide range of cryptocurrencies. Built with a focus on innovation and security, Matisse Exchange caters to both novice and experienced traders, empowering users to navigate the evolving digital asset market confidently.',
    image: '/images/project-matisseexchange.jpg',
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

export const techsUsedThisProject = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'JavaScript/ESLint', icon: SiEslint },
  { name: 'Jest', icon: SiJest },
];
