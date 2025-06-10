export type IExperience = {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

export const experiences: IExperience[] = [
  {
    company: 'Hitachi Digital Services',
    position: 'Senior Full Stack Engineer',
    location: 'Remote',
    startDate: '2022-01',
    endDate: 'Present',
    description:
      'Lead development of full-stack applications and backend systems, focusing on scalability, performance, and code quality.',
    achievements: [
      'Architected and maintained 11 RESTful APIs leveraging .NET Core and Node.js; integrated AWS Lambda and Azure Functions to automate serverless workflows and improve system response time by 25%',
      'Led development of full-stack web applications using React, TypeScript, and Java backend, serving thousands of users',
      'Created comprehensive onboarding documentation and coding style guides, which became the most used resource for mentorship and reduced the reliance on senior developers by 40%',
      'Instituted a peer-review system, personally reviewing and providing feedback on 5000 lines of code per month, resulting in improved code maintainability and reduced technical debt by 10%',
      'Established comprehensive coding standards and best practices adopted team-wide, resulting in a 25% improvement in code quality scores as measured by static analysis tools and reduced onboarding time',
      'Defined clear acceptance criteria for user stories in collaboration with product owners and QA, decreasing the number of rejected builds by 15% and accelerating releases',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Java',
      'Node.js',
      '.NET Core',
      'AWS Lambda',
      'Azure Functions',
      'REST APIs',
      'Static Analysis Tools',
      'Git',
      'CI/CD',
    ],
  },
  {
    company: 'Hitachi Vantara LLC',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: '2020-11',
    endDate: '2021-12',
    description:
      'Developed and maintained full-stack applications, focusing on performance optimization and code quality.',
    achievements: [
      'Implemented responsive web design principles using React and TypeScript, achieving a 95% pass rate on accessibility audits and enhancing user experience across devices',
      'Engineered a serverless function using AWS Lambda to automate data processing tasks, saving the team approximately 15 hours per week and reducing manual errors',
      'Automated application deployments to Azure cloud using CI/CD pipelines, decreasing deployment time by 60% and increasing release frequency to bi-weekly',
      'Set up a robust error logging and monitoring system with Datadog, which helped the team detect and fix critical production issues faster, reducing resolution time by 40%',
      'Applied pair programming best practices, reducing integration conflicts by 20% and improving code maintainability scores by 30% through knowledge sharing across the team',
    ],
    technologies: [
      'React',
      'TypeScript',
      'AWS Lambda',
      'Azure',
      'CI/CD',
      'Datadog',
      'Accessibility',
      'Responsive Design',
      'Git',
      'Pair Programming',
    ],
  },
  {
    company: 'Hitachi Vantara LLC',
    position: 'Web Developer',
    location: 'Remote',
    startDate: '2018-05',
    endDate: '2020-11',
    description:
      'Developed and maintained web applications, focusing on frontend development and user experience.',
    achievements: [
      'Collaborated with senior engineers and identified database schema improvements, leading to a 10% reduction in data redundancy and a finding to fix the three biggest causes of crashes',
      'Engineered 12 reusable Angular components, rigorously tested using Jest and Cypress, which improved front-end module reusability and accelerated feature development cycles by 20%',
      'Enhanced software reliability by creating 75 Jest unit tests for JavaScript modules, increasing code maintainability and reducing debugging time by 30% within the assigned modules',
    ],
    technologies: [
      'Angular',
      'JavaScript',
      'Jest',
      'Cypress',
      'Database Design',
      'Component Architecture',
      'Unit Testing',
      'Git',
    ],
  },
];
