import { Github, Linkedin, Twitter } from 'lucide-react';

export const projects = [
  {
    title: 'Project Alpha',
    description: 'An advanced e-commerce platform with a focus on user experience and performance.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageId: 'project-1',
    link: '#',
  },
  {
    title: 'Project Beta',
    description: 'A cutting-edge data visualization tool for analyzing complex datasets in real-time.',
    tags: ['React', 'D3.js', 'Node.js', 'GraphQL'],
    imageId: 'project-2',
    link: '#',
  },
  {
    title: 'Project Gamma',
    description: 'A secure and intuitive mobile banking application designed for the modern user.',
    tags: ['React Native', 'Firebase', 'Redux'],
    imageId: 'project-3',
    link: '#',
  },
  {
    title: 'Project Delta',
    description: 'A collaborative project management SaaS that streamlines team workflows.',
    tags: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
    imageId: 'project-4',
    link: '#',
  },
];

export const timeline = [
  {
    year: '2018',
    title: 'Started Journey',
    description: 'Began my journey into web development, learning the fundamentals of HTML, CSS, and JavaScript.',
  },
  {
    year: '2020',
    title: 'Graduated University',
    description: 'Completed my degree in Computer Science, solidifying my understanding of software engineering principles.',
  },
  {
    year: '2021',
    title: 'First Junior Role',
    description: 'Joined a dynamic startup as a Junior Developer, contributing to a large-scale React application.',
  },
  {
    year: '2023',
    title: 'Senior Developer',
    description: 'Promoted to Senior Developer, leading a team and architecting new features for a fintech platform.',
  },
];

export const skills = [
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Figma', category: 'Design' },
];

export const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
] as const;

export const reviews = [
  {
    quote: "Working with this developer was an absolute pleasure. Their attention to detail and commitment to quality is unparalleled. They transformed our vision into a stunning, high-performance reality.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators",
    imageId: "reviewer-1"
  },
  {
    quote: "A true professional and a master of their craft. The code is clean, the communication is clear, and the results speak for themselves. I couldn't be happier with the final product.",
    name: "John Smith",
    title: "CTO, Future Solutions",
    imageId: "reviewer-2"
  },
  {
    quote: "Their ability to tackle complex problems with creative solutions is impressive. They delivered on time, on budget, and exceeded all our expectations. Highly recommended!",
    name: "Emily White",
    title: "Product Manager, Creative Co.",
    imageId: "reviewer-3"
  }
];
