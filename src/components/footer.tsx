import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Code Alchemist. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
