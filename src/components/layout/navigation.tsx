'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { IconArrow } from '../ui/icons';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Développement', href: '/developpement' },
  { name: 'Design', href: '/design' },
  { name: 'Marketing', href: '/marketing' },
  { name: 'Projets', href: '/projets' },
  { name: 'Contact', href: '/contact', icon: ArrowUpRight },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MobileMenu = () => (
    isMobileMenuOpen && (
      <div className="fixed inset-0 z-50 bg-secondary flex flex-col">
        <div className="flex border-gray/10 border-b items-center justify-between px-10 py-6">
          <h2 className="text-4xl font-bold text-[#CEF440]">MENU</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-14 h-14 rounded-full bg-[#CEF440]/10 flex items-center justify-center hover:bg-[#CEF440] transition-colors group"
          >
            <X className="w-6 h-6 text-[#CEF440] group-hover:text-secondary" />
          </button>
        </div>
        
        <nav className="flex-1 flex flex-col gap-4 p-10 max-md:p-8">
          {navigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "relative group py-4 px-6 border border-[#CEF440]/10 text-5xl max-sm:text-2xl font-bold uppercase transition-all duration-300",
                index === navigationItems.length - 1
                  ? "bg-primary text-secondary rounded-full"
                  : pathname === item.href 
                    ? "bg-[#CEF440]/10 text-[#CEF440]" 
                    : "text-[#D5D5D5] hover:bg-[#CEF440]/5 hover:text-[#CEF440] hover:border-[#CEF440]/20"
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.href && index !== navigationItems.length - 1 && (
                <span className="absolute flex right-6 top-1/2 -translate-y-1/2 text-[#CEF440]">
                  •
                </span>
              )}
              {index === navigationItems.length - 1 && (
                <span className="absolute flex right-6 top-1/2 -translate-y-1/2">
                  <IconArrow className="text-secondary w-4 h-4" />
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    )
  );
  
  return (
    <>
      <header className="relative h-24 my-auto bg-primary py-6">
        <div className="max-w-[1800px] max-sm:px-6 mx-auto px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-5xl max-md:text-4xl font-bold">
              DIGITOILE
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-lg hover:text-primary',
                    pathname === item.href ? 'text-black' : 'text-muted-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link href="/contact">
                <Button variant="outline">
                  Contact
                  <IconArrow className='brightness-0 group-hover:brightness-[1]' />
                </Button>
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-[#CEF440] transition-colors group"
            >
              <Menu className="w-5 h-5 text-[#CEF440] group-hover:text-secondary" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu />
    </>
  );
}