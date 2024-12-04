'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { IconArrow } from '../ui/icons';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';

// Supprimez Contact de navigationItems pour le menu desktop
const navigationItems = [
    { name: 'Accueil', href: '/' },
  { name: 'Développement', href: '/developpement' },
  { name: 'Design', href: '/design' },
  { name: 'Marketing', href: '/marketing' },
  { name: 'Projets', href: '/projets' },
];

// Créez un array séparé pour le menu mobile qui inclut Contact
const mobileNavigationItems = [
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
        
        <nav className="flex-1 flex flex-col gap-6 p-10 max-sm:p-6 max-md:p-8">
          {mobileNavigationItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "relative group py-4 px-6 border border-gray/10 text-5xl max-xs:text-2xl max-md:text-3xl max-lg:text-4xl font-bold uppercase transition-all duration-300",
                index === mobileNavigationItems.length - 1
                  ? "bg-primary text-secondary rounded-full"
                  : pathname === item.href 
                    ? "bg-[#CEF440]/10 text-[#CEF440]" 
                    : "text-[#D5D5D5] hover:bg-[#CEF440]/5 hover:text-[#CEF440] hover:border-gray/20"
              )}
            >
              <span className="relative z-10">{item.name}</span>
              {pathname === item.href && index !== mobileNavigationItems.length - 1 && (
                <span className="absolute flex right-6 top-1/2 -translate-y-1/2 text-[#CEF440]">
                  •
                </span>
              )}
              {index === mobileNavigationItems.length - 1 && (
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
      <header className="relative h-24 max-md:h-[5.5rem] my-auto bg-primary py-6">
        <div className="max-w-[1800px] max-sm:px-6 mx-auto px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="tracking-tight  flex items-center gap-4  font-[800] text-5xl max-md:text-4xl">
              DIGITOILE
              <Image src='/images/star.webp' alt='ddede' width={30} height={20} className='slow-spin' />
            </Link>

            <nav className="hidden lg:flex items-center space-x-10">
           {navigationItems.map((item) => (
  <Link
    key={item.href}
    href={item.href}
    className={cn(
      'text-lg relative group font-[600] flex items-center transition-all',
      pathname === item.href ? 'text-black' : 'text-muted-foreground'
    )}
  >
    {/* Texte avec <b> uniquement sur la page active */}
    <span className={cn(
      "transition-all duration-300",
      pathname === item.href ? "mr-0" : "group-hover:mr-2"
    )}>
      {item.name}
      {pathname === item.href && (
        <b className="font-bold text-2xl !leading-none text-secondary/50">.</b>
      )}
    </span>

    {/* Icône avec transition d'opacité et déplacement à droite, mais invisible sur la page active */}
    {pathname !== item.href && (
      <IconArrow
        className="text-secondary absolute -right-3 bottom-2 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-x-[1px] group-hover:translate-x-6"
      />
    )}
  </Link>
))}




              <Link href="/contact">
                <Button className='' variant="outline">
                  
                  Contact
                  <IconArrow className='text-secondary group-hover:text-primary -mt-0.5' />
                </Button>
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-[#CEF440] transition-colors group"
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