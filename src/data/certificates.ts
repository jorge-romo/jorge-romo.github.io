import { StaticImageData } from 'next/image';

export type ICertificate = {
  title: string;
  description: string;
  /**
   * @deprecated Not supported
   */
  embed?: string;
  link?: string;
  image: string | StaticImageData;
  issuedDate?: string;
  issuer: string;
  featured?: boolean;
};

export const certificates: ICertificate[] = [
  {
    issuedDate: '',
    issuer: 'Issued by Coursera and authorized by IBM',
    description:
      'The badge earner has demonstrated an understanding of the software development lifecycle and the software building process. They have a foundational knowledge of software development and the tools used for it and can identify basic programming constructs. They can describe various types of system architectures, software architectures, and deployments. The badge earner can also identify the skills needed for software development roles and describe career opportunities for software engineers.',
    title: 'Software Engineering Essentials',
    embed:
      '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="b6bb6d52-24e8-4c3a-ba77-cafd701f0207" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>',
    link: 'https://www.credly.com/badges/b6bb6d52-24e8-4c3a-ba77-cafd701f0207/public_url',
    image:
      'https://images.credly.com/images/1b67aaf9-670d-4c92-8d51-7ac1190f0a42/image.png',
  },
  {
    issuedDate: '2025-03-07',
    issuer: 'Issued by Coursera and authorized by Meta',
    description:
      'The Meta Front-End Developer Certificate is awarded to learners who complete a series of courses on front-end web development, hosted by Coursera. With a focus on React.js, these rigorous, self-paced courses, developed by Meta experts, prepare a candidate for an entry level job as a front-end developer. The courses culminate in the successful completion of a capstone project.',
    title: 'Meta Front-End Developer Certificate',
    embed:
      '<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="09159688-f177-4229-b690-aa1877cc5156" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>',
    link: 'https://www.credly.com/badges/09159688-f177-4229-b690-aa1877cc5156/public_url',
    image:
      'https://images.credly.com/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png',
    featured: true,
  },
  {
    issuedDate: '',
    issuer: 'Issued by Coursera and authorized by IBM',
    description:
      'This badge earner has demonstrated foundational knowledge of Web Development with HTML, CSS, and JavaScript. The individual can define and describe the languages, frameworks, and tools that are used to create interactive and engaging websites and Cloud applications. The earner has hands-on experience creating a web application using HTML, CSS, and JavaScript.',
    title: 'Web Development with HTML, CSS, JavaScript Essentials',
    embed: '',
    link: '',
    image:
      'https://images.credly.com/images/2d1797d5-1de7-4778-8975-9e5c6ec73a1a/image.png',
  },
  {
    issuedDate: '',
    issuer: 'Issued by Coursera and authorized by IBM',
    description:
      'This badge earner has gained a fundamental knowledge of cloud concepts and the tools and techniques required for developing cloud-native applications. The earner can explain how a DevOps culture, CI/CD, and agile methodology aid the product development lifecycle. They have hands-on experience deploying apps, creating user stories in ZenHub, working with MongoDB for data integration, and using CI/CD for application enhancement and redeployment.',
    title: 'Cloud Native, DevOps, Agile & NoSQL Essentials',
    embed: '',
    link: '',
    image:
      'https://images.credly.com/images/0180c9c4-1723-4e5d-b38e-c439cd445130/image.png',
  },
];
