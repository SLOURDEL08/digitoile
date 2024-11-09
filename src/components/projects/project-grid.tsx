// src/components/project-grid.tsx
'use client'

import { ProjectCard } from "@/components/projects/project-card";

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

export default function ProjectGrid() {
  return (
    <div className="grid mt-14 gap-10 grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.image}
        />
      ))}
    </div>
  );
}