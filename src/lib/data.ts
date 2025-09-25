import { Github, Linkedin, Twitter, MessageCircle, Code, Smartphone, BarChart, Video, Type, Briefcase, Smile, FolderKanban, Clock } from 'lucide-react';

export const projects = [
  {
    title: 'E-commerce Platform',
    description: 'An advanced e-commerce platform with a focus on user experience and performance.',
    tags: ['Web Development', 'Next.js', 'Stripe'],
    imageId: 'project-1',
    link: '#',
  },
  {
    title: 'Data Viz Dashboard',
    description: 'A cutting-edge data visualization tool for analyzing complex datasets in real-time.',
    tags: ['Web Development', 'React', 'D3.js'],
    imageId: 'project-2',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and intuitive mobile banking application designed for the modern user.',
    tags: ['App Development', 'React Native', 'Firebase'],
    imageId: 'project-3',
    link: '#',
  },
  {
    title: 'Project Management SaaS',
    description: 'A collaborative project management SaaS that streamlines team workflows.',
    tags: ['Web Development', 'Vue.js', 'MongoDB'],
    imageId: 'project-4',
    link: '#',
  },
];

export const timeline = [
  {
    year: '2018',
    title: 'Agency Founded',
    description: 'ClickFlow Studio was founded with the mission to help businesses succeed in the digital world.',
  },
  {
    year: '2020',
    title: 'Expanded Services',
    description: 'Expanded our service offerings to include App Development and SEO to meet growing client demand.',
  },
  {
    year: '2022',
    title: 'Growth Partner Program',
    description: 'Launched our In-house Growth Partner program, offering dedicated teams to accelerate business growth.',
  },
  {
    year: '2024',
    title: '100+ Happy Clients',
    description: 'Celebrated the milestone of helping over 100 clients achieve their digital marketing and development goals.',
  },
];

export const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Crafting beautiful, high-performance websites tailored to your brand and business goals.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Building intuitive and scalable mobile applications for both iOS and Android platforms.",
  },
  {
    icon: BarChart,
    title: "SEO",
    description: "Boosting your online visibility and driving organic traffic with proven SEO strategies.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description: "Producing compelling video content that engages your audience and tells your story.",
  },
  {
    icon: Type,
    title: "Copywriting",
    description: "Creating persuasive and engaging copy that converts visitors into customers.",
  },
  {
    icon: Briefcase,
    title: "In-house Growth Partner",
    description: "Embedding our experts in your team to provide continuous, data-driven growth.",
  }
];


export const socialLinks = [
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
  { icon: MessageCircle, href: 'https://wa.me/yourwhatsappnumber' },
] as const;

export const reviews = [
  {
    quote: "Working with ClickFlow Studio was an absolute pleasure. Their attention to detail and commitment to quality is unparalleled. They transformed our vision into a stunning, high-performance reality.",
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

export const stats = [
  {
    icon: Smile,
    value: 120,
    label: "Happy Clients"
  },
  {
    icon: FolderKanban,
    value: 250,
    label: "Projects Completed"
  },
  {
    icon: Clock,
    value: 6,
    label: "Years of Experience"
  }
];
