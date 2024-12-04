import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IconArrow } from "../ui/icons";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  images: string[];
  clientName: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "DIGITALIZERR  ",
    category: "Design UI/UX",
    description: "Une expérience unique de navigation et d'achat pour une marque de luxe parisienne.",
    images: [
      "/images/design/digitali.png",
      "/images/design/digitali2.png",
    ],
    clientName: "E-commerce • Luxe"
  },
  {
    id: 2,
    title: "Rocket School",
    category: "Landing Page",
    description: "Interface mobile intuitive pour la gestion de patrimoine nouvelle génération.",
    images: [
      "/images/design/rockett.png",
      "/images/design/rockett2.png",
    ],
    clientName: "Finance • Tech"
  },
  {
    id: 3,
    title: "DietIA - Webapp",
    category: "Plateforme Web",
    description: "Plateforme éducative innovante avec un dashboard analytique personnalisé.",
    images: [
      "/images/design/dietiad.png",
      "/images/design/dietia2.png",
    ],
    clientName: "Education • SaaS"
  }
];

const MobileImageNav = ({ currentImageIndex, totalImages }: { 
  currentImageIndex: number;
  totalImages: number;
}) => (
  <div className="hidden max-sm:flex absolute top-4 right-4 z-20 bg-gray/10 backdrop-blur-sm rounded-full px-3 py-1.5">
    <span className="text-sm font-medium text-gray">
      {currentImageIndex + 1} / {totalImages}
    </span>
  </div>
);

const ThumbnailGallery = ({ 
  images, 
  currentImageIndex, 
  onSelect 
}: { 
  images: string[];
  currentImageIndex: number;
  onSelect: (index: number) => void;
}) => (
  <div className="absolute top-12 right-12 max-lg:top-6 max-lg:right-6 max-md:right-4 max-md:top-4 max-sm:hidden z-20 flex flex-col gap-6">
    {images.map((image, index) => (
      <motion.button
        key={image}
        onClick={() => onSelect(index)}
        initial={{ opacity: 0, x: 50 }}
        animate={{ 
          opacity: 1,
          x: currentImageIndex === index ? 0 : 10,
          scale: currentImageIndex === index ? 1.1 : 1,
          filter: currentImageIndex === index ? 'brightness(1)' : 'brightness(0.7)'
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          delay: index * 0.1
        }}
        className={`relative w-48 h-28 max-lg:w-36 max-lg:h-20 rounded-2xl overflow-hidden group 
          ${currentImageIndex === index 
            ? 'ring-2 ring-primary shadow-xl shadow-primary/20 z-10' 
            : 'hover:translate-x-2 hover:shadow-md'
          } transition-all duration-300`}
      >
        <Image
          src={image}
          alt={`Vue ${index + 1}`}
          fill
          className={`object-cover transition-transform duration-500 ${
            currentImageIndex === index 
              ? '' 
              : 'group-hover:scale-110'
          }`}
        />
        <div className={`absolute inset-0 transition-all duration-300 ${
          currentImageIndex === index
            ? 'bg-gradient-to-r from-primary/20 to-transparent'
            : 'bg-gray/40 group-hover:bg-gray/20'
        }`} />
        <div className="absolute bottom-3 left-3">
          <span className={`text-sm font-medium px-2 py-1 rounded-full backdrop-blur-sm ${
            currentImageIndex === index
              ? 'bg-primary/20 text-white'
              : 'bg-gray/20 text-gray/80'
          }`}>
            {index + 1}/{images.length}
          </span>
        </div>
        {currentImageIndex === index && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full"
          />
        )}
      </motion.button>
    ))}
  </div>
);

export default function SliderProject() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentProject = projects[currentProjectIndex];

  // Navigation entre les projets
  const handleNextProject = () => {
    if (isAnimating) return;
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const handlePrevProject = () => {
    if (isAnimating) return;
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  // Défilement automatique des images du projet courant
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % currentProject.images.length
      );
    }, 6000);

    return () => clearInterval(timer);
  }, [currentProject]);

  return (
    <section className="relative !rounded-3xl -mt-8 h-[600px] max-lg:h-[500px] max-md:h-[450px] max-sm:h-[400px] w-full overflow-hidden bg-gray/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1515162e_1px,transparent_1px),linear-gradient(to_bottom,#1515162e_1px,transparent_1px)] bg-[size:24px_24px] !z-20 pointer-events-none opacity-20" />
      
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentProject.id}-${currentImageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
            className="relative h-full"
          >
            {/* Image principale */}
            <div className="relative h-full overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-full"
              >
                <Image
                  src={currentProject.images[currentImageIndex]}
                  alt={currentProject.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent" />
              </motion.div>
            </div>

            {/* Navigation mobile pour les images */}
            <MobileImageNav 
              currentImageIndex={currentImageIndex}
              totalImages={currentProject.images.length}
            />

            {/* Galerie de vignettes */}
            <ThumbnailGallery
              images={currentProject.images}
              currentImageIndex={currentImageIndex}
              onSelect={setCurrentImageIndex}
            />

            {/* Contenu du projet */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-12 max-lg:p-8 max-md:p-6 z-10"
            >
              <div className="flex justify-between items-end max-lg:flex-col max-lg:items-start max-lg:gap-4">
                <div className="space-y-4 max-w-2xl max-lg:space-y-6">
                  <div className="space-y-4 max-lg:space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-4 py-1.5 max-lg:py-1 max-lg:px-3 anim-gray-bg backdrop-blur-sm max-md:text-xs rounded-full text-gray/60 text-sm font-medium">
                          {currentProject.category}
                        </span>
                      </div>
                    </div>
                    <h2 className="text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-2xl font-bold text-gray">
                      {currentProject.title}
                    </h2>
                  </div>
                  <p className="text-xl max-lg:text-lg max-md:text-base text-gray/80 font-medium leading-relaxed max-w-xl max-md:hidden">
                    {currentProject.description}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex max-lg:justify-between max-md:gap-6 items-end gap-10 max-lg:w-full">
                  <div className="flex items-end justify-end max-lg:gap-4 max-lg:justify-between gap-6">
                    <motion.span 
                      key={currentProjectIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-7xl max-lg:text-6xl max-lg:mb-1 -mb-2.5 !leading-none max-md:text-5xl max-sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 text-transparent bg-clip-text"
                    >
                      {String(currentProjectIndex + 1).padStart(2, '0')}
                    </motion.span>
                    <div className="text-right max-lg:-space-y-1.5">
                      <span className="block text-gray/40 text-lg max-md:text-base">Projet</span>
                      <span className="block text-gray/60 font-medium">
                        sur {String(projects.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end max-lg:justify-between gap-3">
                    <button 
                      onClick={handlePrevProject}
                      className="p-4 max-md:p-3 hover:bg-primary group rounded-full bg-gray/10 backdrop-blur-sm transition-all duration-300"
                    >
                      <IconArrow className="-scale-x-100 w-6 h-6 max-md:w-5 max-md:h-5 text-gray group-hover:text-secondary" />
                    </button>
                    <button 
                      onClick={handleNextProject}
                      className="p-4 max-md:p-3 hover:bg-primary group rounded-full bg-gray/10 backdrop-blur-sm transition-all duration-300"
                    >
                      <IconArrow className="w-6 h-6 max-md:w-5 max-md:h-5 text-gray group-hover:text-secondary" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}