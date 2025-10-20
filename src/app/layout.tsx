import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clickflowstudio.com'),
  title: {
    default: 'ClickFlow Studio | Web & App Development Agency in Africa',
    template: '%s | ClickFlow Studio',
  },
  description:
    'ClickFlow Studio is a top-tier African digital agency specializing in web & app development, UI/UX design, SEO, and brand growth strategies that drive results.',
  keywords: [
    'ClickFlow Studio',
    'web development agency Africa',
    'SEO experts',
    'app developers',
    'UI/UX design',
    'digital marketing',
    'branding agency',
    'Next.js developers',
  ],
  authors: [{ name: 'ClickFlow Studio Team', url: 'https://www.clickflowstudio.com' }],
  creator: 'ClickFlow Studio',
  publisher: 'ClickFlow Studio',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.clickflowstudio.com',
    siteName: 'ClickFlow Studio',
    title: 'ClickFlow Studio | Web & App Development Agency in Africa',
    description:
      'A modern African digital agency helping businesses scale through world-class web design, app development, and SEO strategy.',
    images: [
      {
        url: '/og-image.jpg', // ✅ place an actual optimized 1200x630 image
        width: 1200,
        height: 630,
        alt: 'ClickFlow Studio Digital Agency for Web & App Development',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.clickflowstudio.com',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn('font-body antialiased', 'bg-background min-h-screen')}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
