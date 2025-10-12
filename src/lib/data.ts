import { Github, Linkedin, Instagram, Twitter, MessageCircle, Code, Smartphone, BarChart, Video, Type, Briefcase, Smile, FolderKanban, Clock } from 'lucide-react';

export const projects = [
  {
    title: 'MLM System with Ecommerce',
    description: 'A 7 layer mlm system that allow people to refer and earn money, also have a marketplace.',
    tags: ['Web Development', 'Next.js', 'Futterwave', 'emailjs', 'Mongodb'],
    imageId: 'project-1',
    link: 'https://www.pamarel.com.ng/',
  },
  {
    title: 'Nkins Brand online Store',
    description: 'A professional looking website that increases Nkins sales by 35%',
    tags: ['Web Development', 'Nextjs 15', 'Mongodb', 'Resend'],
    imageId: 'project-2',
    link: 'https://nkins.vercel.app/',
  },
  {
    title: 'Data Analytics Company Website',
    description: 'A professional modern conversion focus data analytics website for sekelhive',
    tags: ['Web Development', 'Nextjs 15', 'Tailwind Css'],
    imageId: 'project-3',
    link: 'https://www.sekelhive.com/',
  },
  {
    title: 'Dentist WebSite',
    description: 'Modern designed Dentist Website for neondentalprosthetic',
    tags: ['Web Development', 'Nextjs 15', 'MongoDB', 'Tailwind Css'],
    imageId: 'project-4',
    link: 'https://www.neondentalprosthetic.com/',
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
  { icon: Github, href: 'https://github.com/Kariaki58' },
  { icon: Instagram, href: 'https://www.instagram.com/steve_growth58/' },
  { icon: Twitter, href: 'https://x.com/SKariaki' },
  { icon: MessageCircle, href: 'https://wa.me/+2348107920394' },
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
