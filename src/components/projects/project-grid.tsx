'use client'

import { useState } from 'react';
import { ProjectCard } from "@/components/projects/project-card";
import Typography from "../ui/typography";
import { Button } from "../ui/button";
import Image from "next/image";
import { projects, categories } from "./data";
import { ProjectGridProps } from "./types";

export default function ProjectGrid({ limit }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  
  const filteredProjects = selectedCategory
    ? projects.filter(project => project.categoryId === selectedCategory)
    : projects;

  const displayedProjects = limit 
    ? filteredProjects.slice(0, limit) 
    : filteredProjects;

  return (
    <div>
      <div className="flex w-full overflow-hidden max-lg:flex-col gap-8 max-md:gap-4 justify-between">
        <div className="space-y-4 max-xs:space-y-6">
          <Typography className="text-gray" variant="title">
            Nos projets<b className="text-primary">.</b>
          </Typography>
          <div className="flex flex-wrap gap-4 max-md:text-sm items-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4  z-10  py-1.5 border font-[500] rounded-full transition-all duration-500
                ${!selectedCategory 
                  ? 'bg-gray text-secondary' 
                  : 'border-gray/50 text-gray/50 hover:bg-gray hover:text-secondary'}`}
            >
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 z-10 pointer-events-auto py-1.5 border font-[500] rounded-full transition-all duration-500
                  ${selectedCategory === category.id 
                    ? 'bg-gray text-secondary' 
                    : 'border-gray/50 text-gray/50 hover:bg-gray hover:text-secondary'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="w-1/3 max-lg:w-full">
          <span className="text-gray/50 font-[500] leading-9 text-xl">
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
        {displayedProjects.map((project) => (
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