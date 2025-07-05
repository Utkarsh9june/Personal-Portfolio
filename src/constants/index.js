import {
  mobile,
  accenture,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  aws,
  css,
  linux,
  python,
  reactjs,
  redux,
  SHL,
  ispaze,
  tailwind,
  nodejs,
  MYSQL,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  php,
  go,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Gen AI Development",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "API Integration",
    icon: creator,
  }
];

const technologies = [
  {
    name: "php",
    icon: php,
  },
  {
    name: "GO",
    icon: go,
  },  
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MYSQL,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "python",
    icon: python,
  }
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "SHL",
    icon: SHL,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Working as a full-stack developer at SHL, primarily focusing on backend development using Go and PHP, along with building dynamic UIs in React.",
      "Hands-on experience with AWS services like EC2, Elastic, and S3 for application deployment and infrastructure management.",
      "Actively involved in designing scalable APIs, system architecture, and ensuring performance optimization across the stack. Also work extensively with relational and NoSQL databases for data modeling, query optimization, and performance tuning.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Gained hands-on experience with enterprise-grade backend technologies and data-centric application development in a corporate setting.",
      "Worked on SAP HANA for handling high-performance data processing and integration with backend services.Implementing responsive design and ensuring cross-browser compatibility.",
      "Developed a strong understanding of large-scale system architecture, database operations, and best practices for clean, efficient backend code.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "ISpaze Pvt Ltd",
    icon: ispaze,
    iconBg: "#383E56",
    date: "Jan 2024 - Jul 2024",
    points: [
      "Developed responsive user interfaces using React.js and Tailwind CSS.",
      "Collaborated with the backend team to integrate RESTful APIs and handle dynamic data rendering.",
      "Contributed to UI bug fixes, user experience improvements, and cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
