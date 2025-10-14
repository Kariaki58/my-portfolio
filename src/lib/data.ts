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
      "Collaborating with ClickFlow Studio was a game-changer for our digital strategy. They understood our vision immediately and delivered a website that perfectly blends functionality with style. Truly a world-class experience.",
    name: "Ama Nkrumah",
    title: "Founder, Kente Digital Agency (Ghana)",
    imageId: "reviewer-1"
  },
  {
    quote:
      "The ClickFlow team brought a level of professionalism and creativity that’s rare to find. Our platform runs smoother, loads faster, and looks better than ever. Their commitment to excellence is unmatched.",
    name: "Tunde Adesina",
    title: "CTO, Lagos FinTech Hub (Nigeria)",
    imageId: "reviewer-2"
  },
  {
    quote:
      "They took the time to understand our local market and crafted a solution that truly speaks to our audience. From communication to execution, every step was handled with care and precision. Highly recommended!",
    name: "Zanele Mthembu",
    title: "Marketing Director, Ubuntu Creatives (South Africa)",
    imageId: "reviewer-3"
  },
  {
    quote:
      "What stood out for me was their ability to merge global design standards with a deep appreciation of African culture and storytelling. The final product exceeded our expectations in every way.",
    name: "Khalid Mwangi",
    title: "CEO, EastWave Media (Kenya)",
    imageId: "reviewer-4"
  },
  {
    quote:
      "Reliable, innovative, and deeply collaborative that’s how I’d describe ClickFlow Studio. They helped us scale our online store seamlessly while maintaining a sleek and modern look.",
    name: "Fatima Diallo",
    title: "E-Commerce Lead, Sahara Styles (Senegal)",
    imageId: "reviewer-5"
  }
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
