'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Typography from "../ui/typography";
import { cn } from "@/lib/utils";

interface Technology {
  icon: string;
  label: string;
  description: string;
  category: string[];
}

const technologies: Technology[] = [
  { 
    icon: '/images/figma.png',
    label: 'Figma',
    description: "Figma est notre outil principal pour la conception d'interfaces. Il nous permet de créer des designs collaboratifs et responsifs.",
    category: ["Design UI/UX", "de"]
  },
  { 
    icon: '/images/photoshop.png',
    label: 'Photoshop',
    description: "Adobe XD nous aide à créer des prototypes interactifs et à définir des systèmes de design cohérents.",
    category: ["Prototypage"]
  },
  { 
    icon: '/images/illustrator.png',
    label: 'Sketch',
    description: "Sketch est utilisé pour créer des interfaces précises et des composants réutilisables.",
    category: ["Design System"]
  },
  { 
    icon: '/images/pinterest.png',
    label: 'React',
    description: "React nous permet de développer des interfaces utilisateur dynamiques et performantes.",
    category: ["Développement"]
  },
  { 
    icon: '/images/figma.png',
    label: 'Next.js',
    description: "Next.js est notre framework de choix pour créer des applications web modernes et optimisées.",
    category: ["Framework"]
  },
  { 
    icon: '/images/illustrator.png',
    label: 'Tailwind',
    description: "Tailwind nous permet de styliser rapidement nos interfaces tout en maintenant une cohérence visuelle.",
    category: ["Styling"]
  }
];

const TechnologyCard = ({ tech, isActive, onClick }: { 
  tech: Technology; 
  isActive: boolean; 
  onClick: () => void;
}) => (
  <motion.div
    onClick={onClick}
    className={cn(
      "cursor-pointer relative p-4  border  transition-all duration-300",
      "hover:bg-gray/5 hover:border-gray/20",
      isActive ? "anim-graylight-bg border-gray/20" : "border-gray/10"
    )}
  >
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <Image
          src={tech.icon}
          alt={tech.label}
          fill
          className="object-contain p-2"
          sizes="56px"
        />
      </div>
      <span className={cn(
        "text-base font-medium text-center transition-colors",
        isActive ? "text-gray" : "text-gray/60"
      )}>
        {tech.label}
      </span>
    </div>
  </motion.div>
);

export default function UseTechno() {
  const [activeTech, setActiveTech] = useState<Technology>(technologies[0]);

  return (
    <section className="">
      <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full lg:w-4/6 space-y-6"
        >
          <motion.div
            key={activeTech.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <div className="flex gap-8 items-center">
            <Typography variant="title" className="text-gray -mb-1">
              {activeTech.label}<b className="text-primary">.</b>
            </Typography>
                        <div className="inline-block px-5 py-2 border border-gray/20 rounded-full">
              <span className="text-sm text-gray/60 font-medium">
                {activeTech.category}
              </span>
              </div>
              </div>
            
            <p className="text-lg text-gray/70 w-4/5 font-medium leading-relaxed">
              {activeTech.description}
            </p>

          </motion.div>
        </motion.div>

        {/* Technologies Grid */}
        <div className="w-full lg:w-2/6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.label}
                tech={tech}
                isActive={activeTech.label === tech.label}
                onClick={() => setActiveTech(tech)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}