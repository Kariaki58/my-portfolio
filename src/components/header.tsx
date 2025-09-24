'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const NavLink = ({ href, children, isMobile = false }: { href: string; children: React.ReactNode; isMobile?: boolean; }) => (
    <Link
      href={href}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
      className={cn(
        "font-medium transition-colors hover:text-primary",
        isMobile ? "block py-3 text-lg" : "text-sm"
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <Code className="w-5 h-5 text-primary" />
          </div>
          <span>Code Alchemist</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-xl border-l-white/10">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                    <Link href="#home" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                          <Code className="w-5 h-5 text-primary" />
                      </div>
                      <span>Code Alchemist</span>
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <X />
                      </Button>
                    </SheetTrigger>
                </div>
                <nav className="flex flex-col items-center gap-8 mt-16">
                  {navItems.map(item => (
                    <NavLink key={item.name} href={item.href} isMobile>
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}