import {
  Github,
  Instagram,
  Twitter,
  MessageCircle,
  Scissors,
  Film,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Sparkles,
} from 'lucide-react';

export const projects = [
  {
    title: 'Short-Form Edit (Hook + Captions)',
    description:
      'Short-form edit built for retention: hook-first open, clean captions, and platform-native pacing.',
    tags: ['Clipping', 'Short-form', 'Hooks', 'Captions'],
    imageId: 'project-1',
    link: '#contact',
    results: ['10+ clips per episode', 'Stronger hooks + retention', 'Consistent weekly output'],
    // Add your own video file in `public/portfolio/` and set this path.
    // Example: "/portfolio/clip-01.mp4"
    videoSrc: "",
    format: "short-form",
  },
  {
    title: 'Short-Form Edit (Story Cut)',
    description:
      'A story-first cutdown with tighter pacing, cleaner beats, and a CTA that feels natural.',
    tags: ['YouTube', 'Podcast', 'Long-form', 'Retention'],
    imageId: 'project-2',
    link: '#contact',
    results: ['Cleaner pacing', 'Higher average view duration', 'Repurposed into shorts'],
    videoSrc: "",
    format: "short-form",
  },
  {
    title: 'Short-Form Edit (Talking Head)',
    description:
      'Talking-head short optimized for clarity, punch, and readability on mobile.',
    tags: ['Repurposing', 'Systems', 'Consistency', 'Monetization'],
    imageId: 'project-3',
    link: '#contact',
    results: ['1 → 10+ assets', 'Faster publishing cadence', 'Stronger calls-to-action'],
    videoSrc: "",
    format: "short-form",
  },
  {
    title: 'Short-Form Edit (UGC Style)',
    description:
      'UGC-style pacing with clean captions and brand-safe polish—ready for organic or paid.',
    tags: ['UGC', 'Cutdowns', 'Brand-safe', 'Ads-ready'],
    imageId: 'project-4',
    link: '#contact',
    results: ['Multiple angles per concept', 'Clearer messaging', 'Ad + organic variants'],
    videoSrc: "",
    format: "short-form",
  },
  {
    title: 'Short-Form Edit (Podcast Pull)',
    description:
      'A podcast highlight pulled and edited into a vertical clip with tight pacing and clean audio.',
    tags: ['Podcast', 'Short-form', 'Vertical', 'Captions'],
    imageId: 'project-5',
    link: '#contact',
    results: ['Highlight selection', 'Retention-focused cuts', 'Publish-ready delivery'],
    videoSrc: "",
    format: "short-form",
  },
];

export const processSteps = [
  {
    title: 'Strategy + direction',
    description:
      'We align on your audience, offers, platforms, and what “a win” looks like (views, retention, leads, sales).',
  },
  {
    title: 'Capture + intake',
    description:
      'Drop your raw footage (or give us access). We pull highlights, map themes, and build a repeatable content plan.',
  },
  {
    title: 'Edit + optimize',
    description:
      'Platform-native pacing, hook-first openings, captions, and clean sound—built to stop scroll and hold attention.',
  },
  {
    title: 'Publish-ready delivery',
    description:
      'We deliver organized files, titles, and post notes so you can publish fast (or we can plug into your workflow).',
  },
  {
    title: 'Iterate weekly',
    description:
      'We review what’s working and double down—so your content gets more efficient over time, not more chaotic.',
  },
];

export const services = [
  {
    icon: Scissors,
    title: 'Short-form content clipping',
    description:
      'Turn long recordings into scroll-stopping TikToks, Reels, and Shorts that drive reach, saves, and followers.',
  },
  {
    icon: Film,
    title: 'Long-form editing',
    description:
      'YouTube videos and podcasts edited for watch-time tight structure, clean pacing, and premium polish.',
  },
  {
    icon: Repeat2,
    title: 'Content repurposing systems',
    description:
      'A repeatable workflow that turns 1 recording into 10+ assets so you post consistently without burning out.',
  },
  {
    icon: TrendingUp,
    title: 'Performance-driven optimization',
    description:
      'Hook testing, retention-first cuts, and packaging support to turn content into leads, bookings, and revenue.',
  },
  {
    icon: ShieldCheck,
    title: 'Agency-level reliability',
    description:
      'Fast turnaround, clean delivery, and a professional process—built for founders and personal brands that move fast.',
  }
];

export const pricingPackages = [
  {
    title: 'Starter',
    price: 'From $1,500/mo',
    description: 'For creators who want consistent output without hiring in-house.',
    items: [
      '8–12 short-form clips / month',
      'Captions + basic motion',
      '1 revision round',
      '48–72h turnaround (typical)',
    ],
  },
  {
    title: 'Growth',
    price: 'From $3,000/mo',
    description: 'For founders and coaches scaling content into leads and bookings.',
    items: [
      '20–30 short-form clips / month',
      'Weekly batch delivery',
      'Hook + retention optimization',
      'Content repurposing workflow',
    ],
    featured: true,
  },
  {
    title: 'Authority',
    price: 'Custom retainer',
    description: 'For personal brands publishing long-form + short-form at scale.',
    items: [
      'Long-form editing (YouTube/podcast)',
      '30+ short-form clips / month',
      'Priority turnaround',
      'Dedicated editor + producer support',
    ],
  },
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
      "The edits feel premium and the clips actually perform. What I love most is the consistency every week we have publish-ready content without the scramble.",
    name: "Client (Creator)",
    title: "Short-form + YouTube",
    imageId: "reviewer-1",
  },
  {
    quote:
      "They think beyond editing. Hooks, pacing, captions everything is built for attention and action. It’s been a real growth partnership.",
    name: "Client (Founder)",
    title: "Podcast + repurposing",
    imageId: "reviewer-2",
  },
  {
    quote:
      "Fast turnaround, clean delivery, and the content matches my brand. I can finally stay consistent without spending my weekends editing.",
    name: "Client (Coach)",
    title: "Reels + Shorts",
    imageId: "reviewer-3",
  },
  {
    quote:
      "Their process is professional and predictable. We record, they deliver, we publish. The system is the win.",
    name: "Client (Brand)",
    title: "UGC + cutdowns",
    imageId: "reviewer-4",
  },
];

export const stats = [
  {
    icon: Sparkles,
    value: 100,
    label: "Clips Delivered"
  },
  {
    icon: TrendingUp,
    value: 35,
    label: "Avg. Lift in Consistency"
  },
  {
    icon: Clock,
    value: 72,
    label: "Hour Turnaround (Typical)"
  }
];
