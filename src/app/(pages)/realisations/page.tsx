// src/app/(marketing)/realisations/page.tsx
'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProjectGrid from "@/components/projects/project-grid";

const categories = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Booking' },
];

export default function Realisations() {
  return (
    <section className="py-14">
      {/* En-tête */}
      <div className="flex w-full justify-between">
        {/* Titre et catégories */}
        <div className="space-y-8">
          <h1 className="text-7xl font-bold text-gray uppercase">
            Nos projets<b className="text-primary">.</b>
          </h1>
          <div className="flex gap-4 items-center">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-1.5 border font-[500] hover:bg-gray hover:text-secondary
                          border-gray/50 text-gray/50 transition-all duration-500 rounded-full"
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Description et CTA */}
        <div className="w-1/3">
          <span className="text-gray/50 leading-9 text-xl">
            Retrouvez nos projets web, nos créations graphiques et bien plus..
          </span>
          <Button 
            variant="ghost" 
            className="mt-4 flex group transition-all duration-500 hover:text-gray items-center gap-4 text-gray/50"
          >
            Voir plus
            <Image 
              src="/images/ghost-arrow.webp" 
              alt="" 
              width={24} 
              height={24} 
              className="w-6 transition-all duration-500 group-hover:opacity-95 invert opacity-45" 
            />
          </Button>
        </div>
      </div>

      <ProjectGrid />
    </section>
  );
}