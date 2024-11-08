'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { IconArrow } from '../ui/icons';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Développement', href: '/services' },
  { name: 'Design', href: '/about' },
  { name: 'Réalisations', href: '/realisations' },
] as const;

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-primary backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="py-4 px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-5xl font-bold">DIGITOILE</span>
          </Link>

          {/* Navigation principale */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-lg font-regular transition-colors hover:text-primary',
                  pathname === item.href
                    ? 'text-black '
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Bouton CTA */}
          <div >
            <Button
              variant={'outline'}
            >
              Contact
              <IconArrow variant='outline' />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}