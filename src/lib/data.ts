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
    year: '2022',
    title: 'Agency Founded',
    description: 'ClickFlow Studio was founded with the mission to help businesses succeed in the digital world.',
  },
  {
    year: '2023',
    title: 'Expanded Services',
    description: 'Expanded our service offerings to include App Development and SEO to meet growing client demand.',
  },
  {
    year: '2024',
    title: 'Growth Partner Program',
    description: 'Launched our In-house Growth Partner program, offering dedicated teams to accelerate business growth.',
  },
  {
    year: '2025',
    title: '20+ Happy Clients',
    description: 'Celebrated the milestone of helping over 20 clients achieve their digital marketing and development goals.',
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
    quote:
      "Working with Clickflow Studio completely transformed our online presence. They understood exactly what our dental clinic needed a clean, professional website that builds trust and reflects the quality of our care. The process was seamless, and the results speak for themselves",
    name: "Kariaki Gifted",
    title: "Founder, Neon Dental Prosthetics",
    imageId: "reviewer-1",
    tiktokHandle: "@neon_dental33"
  },
  {
    quote:
      "Clickflow Studio didn’t just make my site look good they made it work. My new landing page now brings in daily leads and sells my data analysis course automatically. I’ve never had this kind of consistency before!",
    name: "Oluwatosin Babalola",
    title: "CEO, Bomcel Digital",
    imageId: "reviewer-2",
    tiktokHandle: "@tech_sis29"
  },
  {
    quote:
      "Before working with Clickflow Studio, my salon was always packed people waiting, long lines, total chaos. Now, everyone books ahead through our new website, and business feels organized for the first time. I’m honestly obsessed with how clean and easy it looks!",
    name: "Cynthia Dimgba",
    title: "Owner of victoria hair braiding and weaving center",
    imageId: "reviewer-3",
    tiktokHandle: "@cynthiadimgba"
  },
  {
    quote:
      "What impressed me most about Clickflow Studio was how they understood our industry. They built a data-focused website that feels both global and personal simple, fast, and professional. It perfectly represents who we are as a brand.",
    name: "Ifeoluwa S. Faleye",
    title: "CEO, sekelhive",
    imageId: "reviewer-4",
    tiktokHandle: "@dataevangelist"
  },
];

export const stats = [
  {
    icon: Smile,
    value: 20,
    label: "Happy Clients"
  },
  {
    icon: FolderKanban,
    value: 25,
    label: "Projects Completed"
  },
  {
    icon: Clock,
    value: 4,
    label: "Years of Experience"
  }
];
