// src/components/project-grid.tsx
'use client'

import { ProjectCard } from "@/components/projects/project-card";
import Typography from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  {
    id: 2,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  {
    id: 3,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  {
    id: 4,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  {
    id: 5,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  {
    id: 6,
    title: "Rocket School",
    image: "/images/projects/rocket-school.png",
  },
  // Ajoutez d'autres projets ici
];
const categories = [
  { id: 1, name: 'Développement' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Booking' },
];
export default function ProjectGrid() {
  return (
    <div>
     <div className="flex w-full overflow-hidden max-lg:flex-col gap-8 max-md:gap-4 justify-between">
        {/* Titre et catégories */}
            <div className="space-y-4 max-xs:space-y-6">
              <Typography className="text-gray" variant="title">
                Nos projets<b className="text-primary">.</b>
              </Typography>
              <div className="flex flex-wrap gap-4 max-md:text-sm items-center">
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
                  <div className="w-1/3 max-lg:w-full">
                    <span className="text-gray/50 leading-9 text-xl">
                      Retrouvez nos projets web, nos créations graphiques et bien plus..
                    </span>
                    <Button 
                      variant="ghost" 
                      className="mt-4 max-md:mt-6 flex group transition-all duration-500 hover:text-gray items-center gap-4 text-gray/50"
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
    <div className="grid mt-14 gap-10 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
        />
      ))}
      </div>
      </div>
  );
}