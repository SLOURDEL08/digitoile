'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Typography from "../ui/typography";

const technologies = [
  { 
    icon: '/images/figma.png',
    label: 'Figma',
    isImage: true,
    description: "Figma est notre outil principal pour la conception d'interfaces. Il nous permet de créer des designs collaboratifs et responsifs.",
    category: "Design UI/UX"
  },
  { 
    icon: '/images/photoshop.png',
    label: 'Photoshop',
    isImage: true,
    description: "Adobe XD nous aide à créer des prototypes interactifs et à définir des systèmes de design cohérents.",
    category: "Prototypage"
  },
  { 
    icon: '/images/illustrator.png',
    label: 'Sketch',
    isImage: true,
    description: "Sketch est utilisé pour créer des interfaces précises et des composants réutilisables.",
    category: "Design System"
  },
  { 
    icon: '/images/pinterest.png',
    label: 'React',
    isImage: true,
    description: "React nous permet de développer des interfaces utilisateur dynamiques et performantes.",
    category: "Développement"
  },
  { 
    icon: '/images/figma.png',
    label: 'Next.js',
    isImage: true,
    description: "Next.js est notre framework de choix pour créer des applications web modernes et optimisées.",
    category: "Framework"
  },
  { 
    icon: '/images/illustrator.png',
    label: 'Tailwind',
    isImage: true,
    description: "Tailwind nous permet de styliser rapidement nos interfaces tout en maintenant une cohérence visuelle.",
    category: "Styling"
  }
];

export default function UseTechno() {
  const [activeTech, setActiveTech] = useState(technologies[0]);

  return (
    <section className="">
      
      <div className="">
        <div className="flex max-lg:flex-col max-lg:gap-10 gap-20">
          {/* Contenu descriptif */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6 max-lg:w-3/5 w-2/3"
          >
            <Typography 
              variant="title"
              key={activeTech.label}
              className="text-gray"
            >
              {activeTech.label}<b className="text-primary">.</b>
            </Typography>
            <motion.p 
              key={activeTech.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray/70 text-xl max-w-xl leading-relaxed"
            >
              {activeTech.description}
            </motion.p>
          </motion.div>

          {/* Grille des technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid max-lg:flex max-lg:w-full max-lg:gap-8 max-lg:justify-between w-1/3 grid-cols-3 gap-4"
          >
            {technologies.map((item, index) => (
              <motion.div
                key={index}
                onClick={() => setActiveTech(item)}
                className={`group relative cursor-pointer ${
                  activeTech.label === item.label ? 'z-10' : ''
                }`}
              >
                {/* Fond avec bordure qui s'efface */}
                <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-500 ${
                  activeTech.label === item.label ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`} />
                
                {/* Card principale */}
                <div className={`relative w-full p-6 py-5 flex flex-col items-center justify-center gap-4 backdrop-blur-sm border transition-all duration-500 ${
                  activeTech.label === item.label 
                    ? 'border-gray/60 bg-gray/10 text-gray' 
                    : 'border-white/10 hover:border-gray/60 group-hover:bg-gray/10 group-hover:text-gray'
                }`}>
                  {/* Image ou Icône */}
                  {item.isImage ? (
                    <div className="relative max-lg:h-10 max-lg:w-10 h-12 w-12 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        fill
                        className="object-contain transition-transform duration-300"
                        sizes="(max-width: 48px) 100vw, 48px"
                      />
                    </div>
                  ) : (
                    <item.icon className={`h-12 w-auto transition-colors duration-300 ${
                      activeTech.label === item.label 
                        ? 'text-gray' 
                        : 'text-white/40 group-hover:text-gray'
                    }`} />
                  )}
                  
                  <span className={`text-base font-[500] text-center transition-colors ${
                    activeTech.label === item.label 
                      ? 'text-gray' 
                      : 'text-white/60 group-hover:text-gray'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}