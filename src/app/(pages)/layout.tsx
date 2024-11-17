'use client'

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      animate={{
        filter: isLoading ? 'blur(20px)' : 'blur(0px)',
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="flex min-h-screen flex-col bg-secondary"
    >
      {children}
    </motion.div>
  );
};

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <PageTransitionEffect>
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {!isContactPage && <Footer />}
    </PageTransitionEffect>
  );
}