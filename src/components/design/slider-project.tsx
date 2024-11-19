'use client'

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import Typography from "../ui/typography";
import Image from "next/image";
import { IconArrow } from "../ui/icons";

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
    className="p-4 max-md:p-3  hover:bg-primary group rounded-full bg-secondary/20  transition-colors"
  >
    {children}
  </button>
);

const ProjectInfo = ({ project }: { project: Project }) => (
  <div className="absolute bottom-0 left-0 right-0 p-12 max-md:p-8">
    <div className="w-2/3">
      <div className="inline-block text-white px-4 py-2 anim-dark-bg rounded-full text-sm max-md:text-xs max-md:py-2 font-medium mb-4  ">
        <span className="text-white/80 font-[600]">{project.category}</span>
      </div>
      <h3 className="text-5xl mb-2 max-sm:text-3xl font-bold text-secondary">
        {project.title}
      </h3>
      <p className="text-xl max-md:hidden font-[600] text-secondary/80">
        {project.description}
      </p>
    </div>
  </div>
);

export default function SliderProject() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = featuredProjects[currentIndex];
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Points de progression du scroll
    [1.2, 1.1, 1] // Valeurs de scale correspondantes
  );

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <section className="relative" ref={containerRef}>
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
            className="relative overflow-hidden  h-[500px]"
          >
            <motion.div
              style={{ scale }}
              className="w-full h-full"
            >
              <Image 
                src={currentProject.image} 
                alt={currentProject.title}
                className="w-full h-full object-cover object-top"
                width={1200}
                height={1200}
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray via-gray/60 to-transparent">
              <ProjectInfo project={currentProject} />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute  max-md:bottom-8 max-md:right-8 right-12 bottom-12 flex items-center gap-4">
          <SliderNavigationButton onClick={prevSlide}>
            <IconArrow className="-scale-y-[1] group-hover:text-secondary  text-inherit"/>
          </SliderNavigationButton>
          <SliderNavigationButton onClick={nextSlide}>
            <IconArrow className="!scale-y-[1] group-hover:text-secondary  text-inherit"/>
          </SliderNavigationButton>
        </div>
      </div>
    </section>
  );
}