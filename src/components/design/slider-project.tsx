'use client'

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Typography from "../ui/typography";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

const featuredProjects: Project[] = [
  {
    title: "Refonte E-commerce",
    category: "UX/UI Design",
    description: "Une expérience d'achat intuitive et moderne pour une marque de luxe",
    image: "/images/projects/lesvanniers.png",
    color: "#CEF440"
  },
  {
    title: "Application Mobile",
    category: "Design Système",
    description: "Interface utilisateur cohérente et évolutive pour une app fintech",
    image: "/images/projects/paulsavine.png",
    color: "#CEF440"
  },
  {
    title: "Plateforme SaaS",
    category: "Web Design",
    description: "Dashboard analytique pour une startup en croissance",
    image: "/images/projects/rocket-school.png",
    color: "#CEF440"
  }
];

const SliderNavigationButton = ({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className="p-4 max-md:p-3 rounded-full bg-[#CEF440]/10 hover:bg-[#CEF440]/20 transition-colors"
  >
    {children}
  </button>
);

const ProjectInfo = ({ project }: { project: Project }) => (
  <div className="absolute bottom-0 left-0 right-0 p-12 max-md:p-8">
    <div className="w-2/3">
      <span className="inline-block px-4 py-2 rounded-full text-sm max-md:text-xs max-md:py-2 font-medium mb-4 bg-[#CEF440]/20 backdrop-blur-md text-[#CEF440]">
        {project.category}
      </span>
      <h3 className="text-5xl mb-2 max-sm:text-3xl font-bold text-white">
        {project.title}
      </h3>
      <p className="text-xl max-md:hidden font-[500] text-white/80">
        {project.description}
      </p>
    </div>
  </div>
);

export default function SliderProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = featuredProjects[currentIndex];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1515162e_1px,transparent_1px),linear-gradient(to_bottom,#1515162e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="mb-16">
        <Typography variant="title" className="text-gray">
          Nos derniers projets<b className="text-primary">.</b>
        </Typography>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative overflow-hidden aspect-[16/9]"
          >
            <Image 
              src={currentProject.image} 
              alt={currentProject.title}
              className="w-full h-full object-cover"
              width={1200}
              height={1200}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#151516] via-[#151516]/40 to-transparent">
              <ProjectInfo project={currentProject} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute max-md:bottom-8 max-md:right-8 right-12 bottom-12 flex items-center gap-4">
          <SliderNavigationButton onClick={prevSlide}>
            <ChevronLeft className="w-6 h-6 text-[#CEF440]" />
          </SliderNavigationButton>
          <SliderNavigationButton onClick={nextSlide}>
            <ChevronRight className="w-6 h-6 text-[#CEF440]" />
          </SliderNavigationButton>
        </div>
      </div>
    </section>
  );
}